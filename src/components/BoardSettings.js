import { checkClientBounds } from "./utils";

export default function BoardSettings({ state }) {
    const showBoardSettings = state.boardSettings.showBoardSettings;
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
                <p>Edit Board</p>
                <p>Delete Board</p>
            </div>
        </div>
    );
}