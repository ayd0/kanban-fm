import { useSignal } from "@preact/signals";

export default function Sidebar({ state }) {
    // global state
    const showNewBoard = state.showNewBoard;
    const showNewTask = state.showNewTask;
    const { showBoardModal, showSidebar, selectedBoard, themeDark, boards, numBoards } =
        state.sidebar;

    // local state
    const mapBoard = (board) => {
        let imageStyle = "";
        return (
            <div
                className={`board-name ${
                    board.selected.value ? "board-name-selected" : ""
                }`}
                onClick={() => {
                    boards.value[selectedBoard.value].selected.value = false;
                    selectedBoard.value = board.id;
                    board.selected.value = true;
                    imageStyle = imageStyle === "" ? "-selected" : "";
                }}
            >
                <img src={`./assets/icons/icon-board.svg${imageStyle}`} />
                <h3>{board.name}</h3>
            </div>
        );
    };

    // pseudo-state
    const themeVars = [
        {
            name: "--body-color",
            light: "var(--light-grey)",
            dark: "var(--very-dark-grey)",
        },
        {
            name: "--components-color",
            light: "var(--white)",
            dark: "var(--dark-grey)"
        },
        {
            name: "--lines-color",
            light: "var(--lines-light)",
            dark: "var(--lines-dark)"
        },
        {
            name: "--header-color",
            light: "var(--black)",
            dark: "var(--white)"
        }
    ];

    themeVars.forEach(theme => {
        document.querySelector(':root').style.setProperty(theme.name, themeDark.value ? theme.dark : theme.light);
    })


    return (
        <div>
            <div
                id="sidebar"
                style={`display: ${showSidebar.value ? "flex" : "none"}`}
            >
                <picture>
                    <source
                        media="(max-width: 669px)"
                        srcset="./assets/icons/logo-mobile.svg"
                    ></source>
                    <source
                        media="(min-width: 670px)"
                        srcset={`./assets/icons/logo-${themeDark.value ? "light" : "dark"}.svg`}
                    ></source>
                    <img id="logo" src="./assets/icons/logo-mobile.svg" />
                </picture>
                <h2
                    id="board-header"
                    onClick={() =>
                        (showBoardModal.value = !showBoardModal.value)
                    }
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
                    onClick={() => (showNewTask.value = true)}
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
                        <h3 id="board-list-title">
                            All Boards
                            {numBoards.value() > 0
                                ? ` (${numBoards.value()})`
                                : ""}
                        </h3>
                        {boards.value.map((board) => {
                            return mapBoard(board);
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
                                    <input onChange={(e) => themeDark.value = e.target.checked} id="theme-type" type="checkbox" />
                                    <label for="theme-type"></label>
                                </div>
                            </div>
                            <img src="./assets/icons/icon-dark-theme.svg" />
                        </div>
                        <div
                            id="sidebar-toggler"
                            onClick={() => (showSidebar.value = false)}
                        >
                            <img src="./assets/icons/icon-hide-sidebar.svg" />
                            <h3>Hide Sidebar</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="show-sidebar-btn"
                style={`display: ${showSidebar.value ? "none" : "block"}`}
                onClick={() => (showSidebar.value = true)}
            >
                <img src="./assets/icons/icon-show-sidebar.svg" />
            </div>
        </div>
    );
}
