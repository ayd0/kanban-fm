import { useSignal } from "@preact/signals";

export default function Task({ state }) {
    // global state
    const { showTask, taskStatusList, selectedTaskName } = state.task;

    // local state 
    const showDropdown = useSignal(false);

    const mapTaskStatus = (taskStatus) => {
        return (
            <p
                onClick={() => {
                    selectedTaskName.value = taskStatus.name;
                }}
            >
                {taskStatus.name}
            </p>
        );
    };

    return (
        <div className="modal-container" style={`display: ${showTask.value ? "flex" : "none"}`}>
            <div className="modal-list">
                <div id="task-header">
                    <h3>Build UI for onboarding flow</h3>
                    <img src="./assets/icons/icon-vertical-ellipsis.svg" />
                </div>
                <p>
                    This is a description of the task including any relavent
                    details to its subtasks, ideally this will be exhaustive.
                </p>
                <div id="subtask-container">
                    <h4 id="subtask-header">Subtasks (2 of 3)</h4>
                    <div className="subtask-item">
                        <input id="subtask-0" type="checkbox" />
                        <label for="subtask-0">
                            <h4>
                                Research competitor pricing and business models
                            </h4>
                        </label>
                    </div>
                    <div className="subtask-item">
                        <input id="subtask-1" type="checkbox" />
                        <label for="subtask-1">
                            <h4>
                                Outline a business model that works for our solution
                            </h4>
                        </label>
                    </div>
                    <div className="subtask-item">
                        <input id="subtask-2" type="checkbox" />
                        <label for="subtask-2">
                            <h4>
                                Talk to potential customers about our proposal solution and ask for fair price expectency
                            </h4>
                        </label>
                    </div>
                </div>
                <h4>Current Status</h4>
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
                            return mapTaskStatus(taskStatus);
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}