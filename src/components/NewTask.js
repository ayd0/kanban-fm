import { useSignal } from "@preact/signals";

export default function NewTask({ state }) {
    // global state
    const showNewTask = state.newTask.showNewTask;

    // local state
    const showDropdown = useSignal(false);

    // pseudo-state
    const subtaskList = useSignal([
        { name: "", id: 0 },
        { name: "", id: 1 },
    ]);

    const taskStatusList = [
        { name: "Todo", id: 0 },
        { name: "Doing", id: 1 },
        { name: "Done", id: 2 },
    ];
    const selectedTaskName = useSignal("Todo");

    return (
        <div
            id="new-task-container"
            style={`display: ${showNewTask.value ? "flex" : "flex"}`}
        >
            <div id="new-task-list">
                <h3>Add New Task</h3>
                <h4>Title</h4>
                <input type="text" placeholder="e.g. Take coffee break" />
                <h4>Description</h4>
                <textarea
                    rows="5"
                    placeholder="e.g. it's always good to take a break. This 15 minute break will recharge the batteries a little."
                />
                <h4>Subtasks</h4>
                {subtaskList.value.map((subTask) => {
                    return (
                        <div>
                            <input
                                type="text"
                                value={subTask.name}
                                placeholder={"e.g. Make Coffee"}
                            />
                            <img
                                className="task-col-delete-btn"
                                src="./assets/icons/icon-cross.svg"
                                onClick={() => {
                                    // not working
                                    if (subtaskList.value.length > 1) {
                                        const newSubtaskList =
                                            subtaskList.value;
                                        newSubtaskList.splice(
                                            newSubtaskList.findIndex(
                                                (sub) => sub.id === subTask.id
                                            ),
                                            1
                                        );
                                        subtaskList.value = [...newSubtaskList];
                                    } else {
                                        subtaskList.value = [];
                                    }
                                }}
                            />
                        </div>
                    );
                })}
                <button
                    id="add-subtask-btn"
                    onClick={() => {
                        subtaskList.value = [
                            ...subtaskList.value,
                            {
                                name: "",
                                id:
                                    subtaskList.value.length > 0
                                        ? subtaskList.value[
                                              subtaskList.value.length - 1
                                          ].id + 1
                                        : 0,
                            },
                        ];
                    }}
                >
                    <img src="./assets/icons/icon-add-board-mobile.svg" />
                    Add New Subtask
                </button>
                <h4>Status</h4>
                <div
                    class="dropdown"
                    onClick={() => (showDropdown.value = !showDropdown.value)}
                >
                    <p>{selectedTaskName.value}</p>
                    <img
                        src={`./assets/icons/icon-chevron-${
                            showDropdown.value ? "up" : "down"
                        }.svg`}
                    />
                    <div
                        class="dropdown-content"
                        style={`display: ${
                            showDropdown.value ? "flex" : "none"
                        }`}
                    >
                        {taskStatusList.map((taskStatus) => {
                            return (
                                <p
                                    onClick={() => {
                                        selectedTaskName.value =
                                            taskStatus.name;
                                    }}
                                >
                                    {taskStatus.name}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <button
                    id="new-task-btn"
                    onClick={() => (showNewTask.value = false)}
                >
                    Create New Task
                </button>
            </div>
        </div>
    );
}
