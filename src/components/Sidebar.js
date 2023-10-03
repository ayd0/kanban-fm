import { signal } from "@preact/signals";

export default function Sidebar({ state }) {
    // global state
    const showNewBoard = state.showNewBoard;
    const { showBoardModal, selectedBoard, boards } = state.sidebar;

    // local state
    const mapBoards = () => {
        return boards.value.map((board) => {
            return (
                <div
                    className={`board-name ${
                        board.selected.value ? "board-name-selected" : ""
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
        });
    };

    return (
        <div id="sidebar">
            <picture>
                <source
                    media="(max-width: 599px)"
                    srcset="./assets/icons/logo-mobile.svg"
                ></source>
                <source
                    media="(min-width: 600px)"
                    srcset="./assets/icons/logo-dark.svg"
                ></source>
                <img id="logo" src="./assets/icons/logo-mobile.svg" />
            </picture>
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
                    {mapBoards()}
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
                    <div id="sidebar-toggler">
                        <img src="./assets/icons/icon-hide-sidebar.svg" />
                        <h3>Hide Sidebar</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
