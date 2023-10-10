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
    const { kanbanLists, selectedKanban } = state.kanban;
    const selectedTaskStatus = state.selectedTaskStatus;

    // local state
    const showDropdown = useSignal(false);
    const selectedTaskStatusList = kanbanLists.value[
        selectedKanban.value
    ].cols.value.map((col) => {
        return { name: col.value.name.value };
    });

    const mapTaskStatus = (taskStatus) => {
        return (
            <p
                onClick={() => {
                    if (selectedTaskStatus.value !== taskStatus.name) {
                        const prevTaskStatus = selectedTaskStatus.value;
                        const kanbanCols =
                            kanbanLists.value[selectedKanban.value].cols;
                        selectedTaskStatus.value = taskStatus.name;

                        const prevColIdx = kanbanCols.value.findIndex(
                            (col) => col.value.name.value === prevTaskStatus
                        );
                        const newColIdx = kanbanCols.value.findIndex(
                            (col) =>
                                col.value.name.value ===
                                selectedTaskStatus.value
                        );
                        const prevTaskIdx = kanbanCols.value[
                            prevColIdx
                        ].value.tasks.value.findIndex(
                            (task) => task.name.value === selectedTaskName.value
                        );

                        let updatedPrevCol =
                            kanbanCols.value[prevColIdx].value.tasks.value;
                        let updatedNewCol = [
                            ...kanbanCols.value[newColIdx].value.tasks.value,
                            ...updatedPrevCol.splice(prevTaskIdx, 1),
                        ];
                        kanbanCols.value[prevColIdx].value.tasks.value = [
                            ...updatedPrevCol,
                        ];
                        kanbanCols.value[newColIdx].value.tasks.value = [
                            ...updatedNewCol,
                        ];
                    }
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
                checkClientBounds(
                    e,
                    showTask,
                    document.querySelector("#task-list"),
                    () => {}, // TK Dev
                    document.querySelector("#task-dropdown > .dropdown-content")
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
                        {selectedTaskStatusList.map((taskStatus) => {
                            return mapTaskStatus(taskStatus);
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
