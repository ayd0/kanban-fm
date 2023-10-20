import { checkClientBounds } from "./utils";

export default function DeleteBoard({ state }) {
    // global state
    const showDeleteBoard = state.deleteBoard.showDeleteBoard;
    const deleteKanban = state.kanban.deleteKanban;

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
                        try {
                            deleteKanban();
                        } catch (e) {
                            // TODO: Replace alert with component
                            // add screen-shake to delete board and red popover type box
                            alert(e);
                        }
                        showDeleteBoard.value = false;
                    }
                    }>Delete</button>
                    <button onClick={() => (showDeleteBoard.value = false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}