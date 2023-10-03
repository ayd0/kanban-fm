export default function NewBoard({ state }) {
    // global state
    const { showNewBoard, newBoardName } = state;

    return (
        <div
            id="new-board-container"
            style={`display: ${showNewBoard.value ? "flex" : "none"}`}
        >
            <div id="new-board-list">
                <h3>Add New Board</h3>
                <h4>Board Name</h4>
                <input type="text" placeholder="e.g. Web Design" />
                <h4>Board Columns</h4>
                <div>
                    <input type="text" value="Todo" />
                    <img
                        className="board-col-delete-btn"
                        src="./assets/icons/icon-cross.svg"
                    />
                </div>
                <div>
                    <input type="text" value="Doing" />
                    <img
                        className="board-col-delete-btn"
                        src="./assets/icons/icon-cross.svg"
                    />
                </div>
                <button id="add-column-btn">
                    <img src="./assets/icons/icon-add-board-mobile.svg" />
                    Add New Column
                </button>
                <button id="add-board-btn" onClick={() => showNewBoard.value = false}>Create New Board</button>
            </div>
        </div>
    );
}
