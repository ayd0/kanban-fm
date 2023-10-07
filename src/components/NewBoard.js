import { checkClientBounds } from "./utils";

export default function NewBoard({ state }) {
    // global state
    const {
        showNewBoard,
        newBoardName,
        newBoardCols,
        resetBoardCols,
        addNewCol,
    } = state.newBoard;

    const createBoard = state.createBoard;

    const mapBoardCols = (col) => {
        return (
            <div>
                <input
                    type="text"
                    value={col.name.value}
                    onChange={(e) => (col.name.value = e.target.value)}
                    placeholder="e.g. Todo"
                />
                <img
                    className="board-col-delete-btn"
                    src="./assets/icons/icon-cross.svg"
                    onClick={() => {
                        // TODO: Force unique names
                        const updatedBoardCols = newBoardCols.value;
                        updatedBoardCols.splice(
                            newBoardCols.value.findIndex(
                                (found) => found.name === col.name
                            ),
                            1
                        );
                        newBoardCols.value = [...updatedBoardCols];
                    }}
                />
            </div>
        );
    };

    return (
        <div
            className="modal-container"
            style={`display: ${showNewBoard.value ? "flex" : "none"}`}
            onClick={(e) =>
                checkClientBounds(
                    e,
                    showNewBoard,
                    document.querySelector("#new-board-modal"),
                    resetBoardCols
                )
            }
        >
            <div className="modal-list" id="new-board-modal">
                <h3>Add New Board</h3>
                <h4>Board Name</h4>
                <input
                    onChange={(e) => (newBoardName.value = e.target.value)}
                    value={newBoardName.value}
                    type="text"
                    placeholder="e.g. Web Design"
                />
                <h4>Board Columns</h4>
                {newBoardCols.value.map((col) => {
                    return mapBoardCols(col);
                })}
                <button id="add-column-btn" onClick={() => addNewCol()}>
                    <img src="./assets/icons/icon-add-board-mobile.svg" />
                    Add New Column
                </button>
                <button
                    id="add-board-btn"
                    onClick={() => {
                        showNewBoard.value = false;
                        createBoard(newBoardName.value, newBoardCols.value)
                    }}
                >
                    Create New Board
                </button>
            </div>
        </div>
    );
}
