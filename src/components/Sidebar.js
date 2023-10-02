import { signal } from "@preact/signals";

// pseudo-state
const showBoardModal = signal(true);

export default function Sidebar() {
    // pseudo-state
    const boards = [{ name: "Platform Launch" }];
    let selectedBoard = 0;

    console.log(showBoardModal.value);

    return (
        <div id="sidebar">
            <img id="logo" src="./assets/icons/logo-mobile.svg" />
            <h2
                id="board-header"
                onClick={() => (showBoardModal.value = !showBoardModal.value)}
            >
                Platform Launch
            </h2>
            <img
                id="board-chevron"
                src={`./assets/icons/icon-chevron-${
                    showBoardModal.value ? "up" : "down"
                }.svg`}
            />
            <img
                id="add-task-btn"
                src="./assets/icons/icon-add-task-mobile.svg"
            />
            <img
                id="board-settings"
                src="./assets/icons/icon-vertical-ellipsis.svg"
            />
            <div
                id="board-header-container"
                style={`display: ${showBoardModal.value ? "flex" : "none"}`}
            >
                <div id="board-header-list">
                    <h3 id="board-list-title">All Boards</h3>
                    <div className="board-name board-name-selected">
                        <img src="./assets/icons/icon-board-selected.svg" />
                        <h3>Platform Launch</h3>
                    </div>
                    <div className="board-name">
                        <img src="./assets/icons/icon-board.svg" />
                        <h3>Marketing Plan</h3>
                    </div>
                    <div className="board-name">
                        <img src="./assets/icons/icon-board.svg" />
                        <h3>Roadmap</h3>
                    </div>
                    <div id="create-board-btn" className="board-name">
                        <img src="./assets/icons/icon-board-add.svg" />
                        <img
                            id="create-new-board-icon"
                            src="./assets/icons/icon-add-board-mobile.svg"
                        />
                        <h3>Create New Board</h3>
                    </div>
                    <div id="theme-container">
                        <img src="./assets/icons/icon-light-theme.svg" />
                        <div id="theme-toggler">
                            <div id="theme-switch">
                                <input id="theme-type" type="checkbox" />
                                <label for="theme-type"></label>
                            </div>
                        </div>
                        <img src="./assets/icons/icon-dark-theme.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
