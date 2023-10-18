import { checkClientBounds } from "./utils";

export default function DeleteBoard({ state }) {
    // global state
    const showDeleteBoard = state.deleteBoard.showDeleteBoard;
    const { kanbanLists, selectedKanban } = state.kanban;

    return (
        <div
            className="modal-container"
            style={`display: ${showDeleteBoard.value ? "flex" : "none"}`}
            onClick={(e) =>
                checkClientBounds(
                    e,
                    showDeleteBoard,
                    document.querySelector("#delete-board-list")
                )
            }
        >
            <div class="modal-list" id="delete-board-list">
                <h2 id="delete-board-header">Delete this board?</h2>
                <p>
                    Are you sure you want to delete the {`BOARD_NAME`} board?
                    This action will remove all columns and tasks and cannot be
                    reversed.
                </p>
                <div id="delete-board-btn-group">
                    <button onClick={() => {
                        // TODO:
                        // update state management to get func from kanbanSlice,
                        // if new board is empty array, update to empty board AND 
                        // show EditBoard modal
                        let updatedKanban = kanbanLists.value;
                        updatedKanban.splice(selectedKanban.value, 1);
                        console.log(updatedKanban);
                        selectedKanban.value = 0;
                        kanbanLists.value = [...updatedKanban];
                    }}>Delete</button>
                    <button onClick={() => (showDeleteBoard.value = false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}