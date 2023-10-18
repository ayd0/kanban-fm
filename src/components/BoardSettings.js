import { checkClientBounds } from "./utils";

export default function BoardSettings({ state }) {
    const showBoardSettings = state.boardSettings.showBoardSettings;
    const showEditBoard = state.showEditBoard;
    const showDeleteBoard = state.showDeleteBoard;

    return (
        <div
            className="modal-container"
            style={`background: none; display: ${
                showBoardSettings.value ? "flex" : "none"
            }`}
            onClickCapture={(e) =>
                checkClientBounds(
                    e,
                    showBoardSettings,
                    document.querySelector("#board-modal")
                )
            }
        >
            <div id="board-modal">
                <p
                    onClick={() => {
                        showEditBoard.value = !showEditBoard.value;
                        showBoardSettings.value = false;
                    }}
                >
                    Edit Board
                </p>
                <p
                    onClick={() => {
                        showDeleteBoard.value = true;
                        showBoardSettings.value = false;
                    }}
                >
                    Delete Board
                </p>
            </div>
        </div>
    );
}