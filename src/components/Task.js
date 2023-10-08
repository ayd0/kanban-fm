import { useSignal } from "@preact/signals";
import { checkClientBounds } from "./utils";

export default function Task({ state }) {
    // global state
    const { showTask, taskStatusList, selectedTaskName, selectedTaskSubtasks } =
        state.task;
    const selectedTaskStatus = state.selectedTaskStatus;

    // local state
    const showDropdown = useSignal(false);

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

    const mapSubtasks = (subtask) => {
        return (
            <div className="subtask-item">
                <input id="subtask-0" type="checkbox" />
                <label for="subtask-0">
                    {/* Issue with reading subtask value, signal in new board */}
                    <h4>{subtask}</h4>
                </label>
            </div>
        );
    };

    return (
        <div
            className="modal-container"
            style={`display: ${showTask.value ? "flex" : "none"}`}
            onClick={(e) =>
                checkClientBounds(
                    e,
                    showTask,
                    document.querySelector("#task-list")
                )
            }
        >
            <div className="modal-list" id="task-list">
                <div id="task-header">
                    <h3>{selectedTaskName.value}</h3>
                    <img src="./assets/icons/icon-vertical-ellipsis.svg" />
                </div>
                <p>
                    This is a description of the task including any relavent
                    details to its subtasks, ideally this will be exhaustive.
                </p>
                <div id="subtask-container">
                    <h4 id="subtask-header">
                        Subtasks (
                        {selectedTaskSubtasks.value.length === 0
                            ? "none"
                            : `0 of ${selectedTaskSubtasks.value.length}`}
                        )
                    </h4>
                    {selectedTaskSubtasks.value.map((subtask) => {
                        return mapSubtasks(subtask);
                    })}
                </div>
                <h4>Current Status</h4>
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
            </div>
        </div>
    );
}
