import { signal } from "@preact/signals";

// pseudo-state
const showBoardModal = signal(false);
const boards = signal([
    { name: "Platform Launch", selected: signal(true), id: 0 },
    { name: "Marketing Plan", selected: signal(false), id: 1 },
    { name: "Raodmap", selected: signal(false), id: 2 },
]);
const selectedBoard = signal(0);

export default function Sidebar({ state }) {
    const showNewBoard = state.showNewBoard;

    return (
        <div id="sidebar">
            <img id="logo" src="./assets/icons/logo-mobile.svg" />
            <h2
                id="board-header"
                onClick={() => (showBoardModal.value = !showBoardModal.value)}
            >
                {boards.value[selectedBoard.value].name}
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
                    {boards.value.map((board) => {
                        return (
                            <div
                                className={`board-name ${
                                    board.selected.value
                                        ? "board-name-selected"
                                        : ""
                                }`}
                                onClick={() => {
                                    boards.value[
                                        selectedBoard.value
                                    ].selected.value = false;
                                    selectedBoard.value = board.id;
                                    board.selected.value = true;
                                }}
                            >
                                <img src="./assets/icons/icon-board.svg" />
                                <h3>{board.name}</h3>
                            </div>
                        );
                    })}
                    <div
                        id="create-board-btn"
                        className="board-name"
                        onClick={() => {
                            showBoardModal.value = false;
                            showNewBoard.value = true;
                        }}
                    >
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
