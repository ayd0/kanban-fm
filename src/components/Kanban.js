export default function Kanban({ state }) {
    // global state
    const { kanbanLists, selectedKanban } = state.kanban;
    const { showNewTask, selectedTaskStatus } = state.newTask;
    const { showTask, selectedTaskName, selectedTaskSubtasks } = state.task;

    // local state
    const mapCol = (col, colIdx) => {
        let taskList;
        if (col.value.tasks.value.length === 0) {
            taskList = () => {
                return (
                    <div
                        class="kanban-row kanban-row-empty"
                        onClick={() => {
                            selectedTaskStatus.value = col.value.name.value;
                            showNewTask.value = true;
                        }}
                    >
                        <div>
                            <img src="./assets/icons/icon-add-task.svg" />
                            <h1>Add Tasks</h1>
                        </div>
                    </div>
                );
            };
        } else {
            taskList = () => {
                return col.value.tasks.value.map((task, taskIdx) => {
                    return (
                        <div
                            class="kanban-row"
                            onClick={() => {
                                let taskSelection = 
                                    kanbanLists.value[
                                        selectedKanban.value
                                    ].cols.value[colIdx].value.tasks.value[
                                        taskIdx
                                    ];
                                selectedTaskName.value = taskSelection.name.value;
                                selectedTaskSubtasks.value = taskSelection.subtasks;
                                selectedTaskStatus.value = col.value.name.value;
                                showTask.value = true;
                            }}
                        >
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
                    {col.value.name.value.toUpperCase() +
                        ` (${col.value.tasks.value.length})`}
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
            {kanbanLists.value[selectedKanban.value].cols.value.map(
                (col, idx) => {
                    return mapCol(col, idx);
                }
            )}
            <div class="kanban-col">
                <h4 style="opacity: 0%;">a</h4>
                <div class="kanban-row kanban-row-empty" onClick={() => {}}>
                    <div>
                        <img src="./assets/icons/icon-add-task.svg" />
                        <h1>New Column</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
