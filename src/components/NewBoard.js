import { checkClientBounds } from "./utils";

export default function NewBoard({ state }) {
    // global state
    const { showNewBoard, newBoardName } = state.newBoard;
    const createBoard = state.createBoard;

    // local state
    let boardName = '';

    return (
        <div
            className="modal-container"
            style={`display: ${showNewBoard.value ? "flex" : "none"}`}
            onClick={(e) => checkClientBounds(e, showNewBoard)}
        >
            <div className="modal-list">
                <h3>Add New Board</h3>
                <h4>Board Name</h4>
                <input onChange={(e) => boardName = e.target.value} type="text" placeholder="e.g. Web Design" />
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
                <button id="add-board-btn" onClick={() => {
                    createBoard(boardName);
                    showNewBoard.value = false}
                    }>Create New Board</button>
            </div>
        </div>
    );
}
