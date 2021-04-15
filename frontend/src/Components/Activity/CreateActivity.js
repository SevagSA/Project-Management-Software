export default function CreateActivity({ isTask }) {
    return (
        <div>
            <h1>
                {isTask ? "Create Task" : "Create Project"}
            </h1>
        </div>
    )
}
