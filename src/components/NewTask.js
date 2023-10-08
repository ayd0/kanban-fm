import { useSignal } from "@preact/signals";
import { checkClientBounds } from "./utils";

// :::TODO:::
// * Make showNewTask and createNewTask state changes reset fields
// * Maintain field state between addition and deletion of fields
// -- This must be tracked as local state

export default function NewTask({ state }) {
    // global state
    const {
        showNewTask,
        taskName,
        subtaskList,
        taskStatusList,
        selectedTaskStatus,
        createTask,
    } = state.newTask;
    const { kanbanLists, selectedKanban } = state.kanban;

    // local state
    const showDropdown = useSignal(false);

    const mapSubtask = (subTask, idx) => {
        return (
            <div>
                <input
                    type="text"
                    value={subTask.name}
                    placeholder={`Subtask ${idx + 1}`}
                />
                <img
                    className="task-col-delete-btn"
                    src="./assets/icons/icon-cross.svg"
                    onClick={() => {
                        // not working
                        if (subtaskList.value.length > 1) {
                            const newSubtaskList = subtaskList.value;
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
    };

    const mapTaskStatus = (taskStatus) => {
        return (
            <p
                onClick={() => {
                    selectedTaskStatus.value = taskStatus.name;
                }}
            >
                {taskStatus.name}
            </p>
        );
    };

    return (
        <div
            className="modal-container"
            style={`display: ${showNewTask.value ? "flex" : "none"}`}
            onClick={(e) =>
                checkClientBounds(
                    e,
                    showNewTask,
                    document.querySelector("#new-task-modal")
                )
            }
        >
            <div className="modal-list" id="new-task-modal">
                <h3>Add New Task</h3>
                <h4>Title</h4>
                <input
                    type="text"
                    placeholder="e.g. Take a coffee break"
                    onChange={(e) => (taskName.value = e.target.value)}
                    value={taskName.value}
                />
                <h4>Description</h4>
                <textarea
                    rows="5"
                    placeholder="e.g. it's always good to take a break. This 15 minute break will recharge the batteries a little."
                />
                <h4>Subtasks</h4>
                {subtaskList.value.map((subTask, idx) => {
                    return mapSubtask(subTask, idx);
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
                    <p>{selectedTaskStatus.value}</p>
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
                            return mapTaskStatus(taskStatus);
                        })}
                    </div>
                </div>
                <button
                    id="new-task-btn"
                    onClick={() => {
                        createTask(kanbanLists, selectedKanban);
                        showNewTask.value = false;
                    }}
                >
                    Create New Task
                </button>
            </div>
        </div>
    );
}
