export default function Kanban({ state }) {
    // global state
    const { kanbanLists, selectedKanban } = state.kanban;

    // local state
    const mapCol = (col) => {
        console.log(col.value)

        return (
            <div class="kanban-col">
                <h4>
                    <div style={`background-color: ${col.value.color}`}></div>
                    {col.value.name + ` (${col.value.tasks.length})`}
                </h4>
                {col.value.tasks.map((task) => {
                    return (
                        <div class="kanban-row">
                            <h3>{task.name}</h3>
                            <p>0 of {task.subtasks.length} subtasks</p>
                        </div>
                    );
                })}
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
