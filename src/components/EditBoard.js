import { checkClientBounds } from "./utils";
import { useSignal } from "@preact/signals";

export default function EditBoard({ state }) {
    // global state
    const showEditBoard = state.editBoard.showEditBoard;
    const { kanbanLists, selectedKanban, editKanban } = state.kanban;

    // local state
        kanbanLists.value[selectedKanban].cols.value.map((col) => ({
            orig: col.value.name.value,
            inKanban: true,
            deleted: false,
        }))
    let selectedKanbanName = kanbanLists.value[selectedKanban].name.value;
    const updatedCols = useSignal(kanbanLists.value[selectedKanban].cols.value.map(
        (col) => ({
            orig: col.value.name.value,
            inKanban: true,
            deleted: false,
        })
    ));

    const mapBoardCols = (col) => {
        if (!col.deleted) {
            return (
                <div>
                    <input
                        type="text"
                        value={col.updated || col.orig}
                        onChange={(e) => {
                            col.updated = e.target.value;
                        }}
                        placeholder="e.g. Todo"
                    />
                    <img
                        className="board-col-delete-btn"
                        src="./assets/icons/icon-cross.svg"
                        onClick={() => {
                            col.deleted = true;
                            // forces rerender
                            updatedCols.value = [...updatedCols.value];
                        }}
                    />
                </div>
            );
        }
    };

    return (
        <div
            className="modal-container"
            style={`display: ${showEditBoard.value ? "flex" : "none"}`}
            onClickCapture={(e) => {
                checkClientBounds(
                    e,
                    showEditBoard,
                    document.querySelector("#edit-board-list")
                );
            }}
        >
            <div className="modal-list" id="edit-board-list">
                <h3>Edit Board</h3>
                <h4>Board Name</h4>
                <input
                    type="text"
                    placeholder="e.g. Web Design"
                    value={selectedKanbanName}
                    onChange={(e) => (selectedKanbanName = e.target.value)}
                />
                <h4>Board Columns</h4>
                {updatedCols.value.map((col) => {
                    return mapBoardCols(col);
                })}
                <button
                    id="add-column-btn"
                    onClick={() => {
                        updatedCols.value = [
                            ...updatedCols.value,
                            { orig: "", deleted: false },
                        ];
                    }}
                >
                    <img src="./assets/icons/icon-add-board-mobile.svg" />
                    Add New Column
                </button>
                <button
                    id="add-board-btn"
                    onClick={() => {
                        editKanban(selectedKanbanName, updatedCols);
                        showEditBoard.value = false;
                    }}
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}
