import { checkClientBounds } from "./utils";

export default function EditBoard({ state }) {
    // global state
    const showEditBoard = state.editBoard.showEditBoard;

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
            </div>
        </div>
    );
}
