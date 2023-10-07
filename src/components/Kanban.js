export default function Kanban({ state }) {
    // global state
    const { kanbanLists, selectedKanban } = state.kanban;

    // local state
    const mapCol = (col) => {
        let taskList;
        if (col.value.tasks.length === 0) {
            taskList = () => {
                return (
                    <div class="kanban-row">
                        <h3>No Tasks Yet!</h3>
                    </div>
                );
            };
        } else {
            taskList = () => {
                return col.value.tasks.map((task) => {
                    return (
                        <div class="kanban-row">
                            <h3>{task.name}</h3>
                            <p>
                                {task.subtasks.length > 0
                                    ? `0 of ${task.subtasks.length} subtasks`
                                    : "No subtasks"}
                            </p>
                        </div>
                    );
                });
            };
        }

        return (
            <div class="kanban-col">
                <h4>
                    <div style={`background-color: ${col.value.color}`}></div>
                    {col.value.name + ` (${col.value.tasks.length})`}
                </h4>
                {taskList()}
            </div>
        );
    };

    return (
        <div id="kanban-container">
            <div id="add-new-col-btn">
                <h2>
                    This board is empty. Create a new column to get started.
                </h2>
                <button>
                    <img src="./assets/icons/icon-add-task-mobile.svg" />
                    Add New Column
                </button>
            </div>
            {kanbanLists.value[selectedKanban.value].cols.value.map((col) => {
                return mapCol(col);
            })}
        </div>
    );
}
