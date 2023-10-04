export default function NewTask({ state }) {
    // global state
    const showNewTask = state.newTask.showNewTask;

    return (
        <div id="new-task-container" style={`display: ${showNewTask.value ? "flex" : "none"}`}>
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
                <div>
                    <input type="text" placeholder="e.g. Make Coffee" />
                    <img
                        className="task-col-delete-btn"
                        src="./assets/icons/icon-cross.svg"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="e.g. Drink coffee & smile"
                    />
                    <img
                        className="task-col-delete-btn"
                        src="./assets/icons/icon-cross.svg"
                    />
                </div>
                <button id="add-subtask-btn">
                    <img src="./assets/icons/icon-add-board-mobile.svg" />
                    Add New Column
                </button>
                <h4>Status</h4>
                <input type="text" value="Todo" />
                <button id="new-task-btn" onClick={() => showNewTask.value = false}>Create New Task</button>
            </div>
        </div>
    );
}
