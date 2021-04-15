import styles from "../Authentication/Style"

export default function CreateActivity({ isTask }) {
    const activity_name = isTask ? "Task" : "Project";

    const handleFormSubmit = (e) => {
        // TODO 
    }

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

                                <styles.AuthFormLabel htmlFor="staff_member">Staff Members</styles.AuthFormLabel>
                                <br />
                                <styles.AuthFormSelect id="staff_member" multiple>
                                    {/* TODO: get from API */}
                                    {/* {staff_members.map(e => {
                                        return (
                                            <option value={e[0]}>{e[0]}</option>
                                        )
                                    })} */}
                                </styles.AuthFormSelect>
                                <br />

                                <styles.AuthFormLabel htmlFor="status">{activity_name} Status</styles.AuthFormLabel>
                                <br />
                                <styles.AuthFormSelect id="status">
                                    {/* TODO: get from API */}
                                    {/* {statuses.map(e => {
                                        return (
                                            <option value={e[0]}>{e[0]}</option>
                                        )
                                    })} */}
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
                                <styles.AuthFormTextArea cols="20" rows="5" id="notes" required />
                                <br />

                                {/* labels */}

                                {isTask ?
                                    <>
                                        <styles.AuthFormLabel htmlFor="taskProject">Associated Project</styles.AuthFormLabel>
                                        <br />
                                        <styles.AuthFormSelect id="taskProject">
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
                                        <styles.AuthFormSelect id="projectManager">
                                            {/* TODO: get from API */}
                                            {/* {projectManagers.map(e => {
                                            return (
                                                <option value={e[0]}>{e[0]}</option>
                                            )
                                        })} */}
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

