import { useSignal } from "@preact/signals";
import { checkClientBounds } from "./utils";
import { v4 as uuid } from "uuid";

export default function Task({ state }) {
    // global state
    const {
        showTask,
        taskStatusList,
        selectedTaskName,
        selectedTaskSubtasks,
        selectedTaskDescription,
    } = state.task;
    const selectedTaskStatus = state.selectedTaskStatus;

    // local state
    const showDropdown = useSignal(false);
    let dropdownBounds = 0;

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
        const id = uuid();
        return (
            <div className="subtask-item">
                <input
                    id={id}
                    type="checkbox"
                    checked={subtask.selected.value}
                    onChange={(e) =>
                        (subtask.selected.value = e.target.checked)
                    }
                />
                <label for={id}>
                    {/* Issue with reading subtask value, signal in new board */}
                    <h4
                        style={`${
                            subtask.selected.value === true
                                ? "text-decoration: line-through;"
                                : ""
                        }`}
                    >
                        {subtask.name}
                    </h4>
                </label>
            </div>
        );
    };

    return (
        <div
            className="modal-container"
            style={`display: ${showTask.value ? "flex" : "none"}`}
            onClickCapture={(e) => {
                console.log(e);
                checkClientBounds(
                    e,
                    showTask,
                    document.querySelector("#task-list"),
                    () => {}, // TK Dev
                    document.querySelector('#task-dropdown > .dropdown-content')
                );
            }}
        >
            <div className="modal-list" id="task-list">
                <div id="task-header">
                    <h3>{selectedTaskName.value}</h3>
                    <img src="./assets/icons/icon-vertical-ellipsis.svg" />
                </div>
                <p>{selectedTaskDescription.value}</p>
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
                    id="task-dropdown"
                    onClick={() => {
                        showDropdown.value = !showDropdown.value;
                    }}
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
