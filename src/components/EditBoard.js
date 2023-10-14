import { checkClientBounds } from "./utils";

// TODO: 
// Add delete function to mapBoardCols delete-btn

export default function EditBoard({ state }) {
    // global state
    const showEditBoard = state.editBoard.showEditBoard;
    const { kanbanLists, selectedKanban } = state.kanban;

    // local state
    const selectedKanbanName = kanbanLists.value[selectedKanban].name.value;

    const mapBoardCols = (col) => {
        return (
            <div>
                <input
                    type="text"
                    value={col.value.name.value}
                    onChange={(e) => (col.value.name.value = e.target.value)}
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
                                (found) => found.name === col.value.name
                            ),
                            1
                        );
                        newBoardCols.value = [...updatedBoardCols];
                    }}
                />
            </div>
        )
    }

    return (
        <div
            className="modal-container"
            style={`display: ${showEditBoard.value ? "flex" : "none"}`}
            onClickCapture={(e) => {
                checkClientBounds(
                    e,
                    showEditBoard,
                    document.querySelector("#edit-board-list"),
                )
            }}
        >
            <div className="modal-list" id="edit-board-list">
                <h3>Edit Board</h3>
                <h4>Board Name</h4>
                <input type="text" placeholder="e.g. Web Design" value={selectedKanbanName} />
                <h4>Board Columns</h4>
                {kanbanLists.value[selectedKanban.value].cols.value.map(col => {
                    return mapBoardCols(col);
                })}
                <button id="add-column-btn" onClick={() => {}}>
                    <img src="./assets/icons/icon-add-board-mobile.svg" />
                    Add New Column
                </button>
                <button
                    id="add-board-btn"
                    onClick={() => {}}
                >
                    Create New Board
                </button>
            </div>
        </div>
    );
}
