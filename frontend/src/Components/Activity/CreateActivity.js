import styles from "../Authentication/Style"
import { useState, useEffect } from "react";
import { axiosInstance, normalizeStr, STAFF_API_ENDPOINT } from "../../axiosInstance";
import { useHistory } from "react-router-dom"

export default function CreateActivity({ isTask }) {
    const [eligibleProjectManagers, setEligibleProjectManagers] = useState([])
    const [eligibleStaffMembers, setEligibleStaffMembers] = useState([])
    const [activityStatuses, setActivityStatuses] = useState([])

    const activity_name = isTask ? "Task" : "Project";
    const history = useHistory();

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const selectedStaffMembers = [...e.target.staffMember.options]
            .filter((x) => x.selected).map((x) => STAFF_API_ENDPOINT + x.value + "/");
        let endpoint = "activity/" + (isTask ? "tasks/" : "projects/")
        let body = {
            staff_members: selectedStaffMembers,
            name: normalizeStr(e.target.name.value),
            description: normalizeStr(e.target.activityDescription.value),
            start_date: normalizeStr(e.target.startDate.value),
            deadline: normalizeStr(e.target.deadline.value),
            notes: normalizeStr(e.target.notes.value),
            status: normalizeStr(e.target.status.value)
        }
        if (endpoint === "activity/projects/") {
            body["project_manager"] = STAFF_API_ENDPOINT + e.target.projectManager.value + "/";
        } else {
            // TODO add task related additional fields:
            // body["project"] = ...
        }

        axiosInstance
            .post(endpoint, body)
            .then(response => {
                console.log("response:", response)
                if (response.status === 201) {
                    alert(`Your ${activity_name.toLowerCase()} has been created.`)
                    history.push("/")
                }
                return response.data
            })
            .then(data => {
                console.log("data:", data)
            })
            .catch(error => {
                console.log(error, body)
            })
    }

    useEffect(e => {
        // Get project managers that are eligible to be assigned
        // to a project.
        axiosInstance
            .get("activity/get-eligible-project-manager-for-project/")
            .then(response => {
                setEligibleProjectManagers(response.data.project_managers)
            })

        if (!isTask) {
            // Get staff members that are eligible to be assigned
            // to a project.
            axiosInstance
                .get("activity/get-eligible-staff-for-project/")
                .then(response => {
                    setEligibleStaffMembers(response.data.staff_members)
                })
        }

        // Get activity statuses.
        axiosInstance
            .get("activity/get-all-activity-status-choices/")
            .then(response => {
                setActivityStatuses(response.data.statuses)
            })

    }, [isTask]);

    return (
        <div>
            <styles.ParentWrapper>
                <styles.Wrapper>
                    <styles.AuthFormInfoHolder>
                        <styles.AuthFormTitle>
                            {isTask ? "Create Task" : "Create Project"}
                        </styles.AuthFormTitle>
                        <styles.AuthFormDescription>
                            {isTask ?
                                "A project represents a large unit of work that can be divided " +
                                "into smaller projects: tasks."
                                :
                                "A task represents a single unit of work of a project."
                            }
                        </styles.AuthFormDescription>
                    </styles.AuthFormInfoHolder>
                    <styles.AuthFormHolder>
                        <styles.AuthForm method="POST" onSubmit={handleFormSubmit}>
                            {/* TODO Make the form shorter, maybe use a grid */}
                            <styles.AuthFormFieldHolder>

                                <styles.AuthFormLabel htmlFor="name">{activity_name} Name</styles.AuthFormLabel>
                                <br />
                                <styles.AuthFormInput type="text" id="name" required />
                                <br />

                                <styles.AuthFormLabel htmlFor="activityDescription">{activity_name} Description</styles.AuthFormLabel>
                                <br />
                                <styles.AuthFormTextArea cols="20" rows="5" id="activityDescription" required />
                                <br />
                                {/* TODO this is poorly designed (the select area is too small).
                                    Change it later on. Maybe a drop down would be a good idea. */}
                                <styles.AuthFormLabel htmlFor="staffMember">Staff Members</styles.AuthFormLabel>
                                <br />
                                <styles.AuthFormSelect id="staffMember" multiple required>
                                    {eligibleStaffMembers.map(e => {
                                        return (
                                            <option value={e.id}>
                                                {e.email} {" | "}
                                                {e.role} {" | "}
                                                Projects: {e.project_count}
                                            </option>
                                        )
                                    })}
                                </styles.AuthFormSelect>
                                <br />

                                <styles.AuthFormLabel htmlFor="status">{activity_name} Status</styles.AuthFormLabel>
                                <br />
                                <styles.AuthFormSelect id="status" required>
                                    {activityStatuses.map(e => {
                                        return (
                                            <option value={e[0]}>{e[0]}</option>
                                        )
                                    })}
                                </styles.AuthFormSelect>
                                <br />

                                <styles.AuthFormLabel htmlFor="startDate">{activity_name} Start Date</styles.AuthFormLabel>
                                <br />
                                <styles.AuthFormInput type="date" id="startDate" required />
                                <br />

                                <styles.AuthFormLabel htmlFor="deadline">{activity_name} Deadline</styles.AuthFormLabel>
                                <br />
                                <styles.AuthFormInput type="date" id="deadline" required />
                                <br />

                                <styles.AuthFormLabel htmlFor="notes">Additonal Notes</styles.AuthFormLabel>
                                <br />
                                <styles.AuthFormTextArea cols="20" rows="5" id="notes" />
                                <br />


                                {isTask ?
                                    <>
                                        <styles.AuthFormLabel htmlFor="taskProject">Associated Project</styles.AuthFormLabel>
                                        <br />
                                        <styles.AuthFormSelect id="taskProject" required>
                                            {/* TODO: get from API */}
                                            {/* {projects.map(e => {
                                            return (
                                                <option value={e[0]}>{e[0]}</option>
                                            )
                                        })} */}
                                        </styles.AuthFormSelect>
                                        <br />
                                    </>
                                    :
                                    <>
                                        <styles.AuthFormLabel htmlFor="projectManager">Project Manager</styles.AuthFormLabel>
                                        <br />
                                        <styles.AuthFormSelect id="projectManager" required>
                                            {eligibleProjectManagers.map(e => {
                                                return (
                                                    <option value={e.id}>
                                                        {e.email} {" | "}
                                                        Currently assigned projects: {e.project_count}
                                                    </option>
                                                )
                                            })}
                                        </styles.AuthFormSelect>
                                        <br />
                                    </>
                                }
                            </styles.AuthFormFieldHolder>
                            <styles.AuthFormSubmitInput type="submit" value={`Create ${activity_name}`} />
                        </styles.AuthForm>
                    </styles.AuthFormHolder>
                </styles.Wrapper>
            </styles.ParentWrapper>
        </div>
    )
}

