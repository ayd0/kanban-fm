import { themeVars } from "./utils";
import { checkClientBounds } from "./utils";

export default function Sidebar({ state }, appState) {
    // global state
    const { showBoardModal, showSidebar, themeDark, resetSelectedTaskStatus } = state.sidebar;
    const { kanbanLists, selectedKanban } = state.kanban;
    const { showNewTask, selectedTaskStatus } = state.newTask;
    const showNewBoard = state.showNewBoard;

    // local state
    const mapBoard = (board) => {
        let imageStyle = selectedKanban.value === board.id ? "-selected" : "";
        return (
            <div
                className={`board-name ${
                    selectedKanban.value === board.id
                        ? "board-name-selected"
                        : ""
                }`}
                onClick={() => {
                    selectedKanban.value = board.id;
                    resetSelectedTaskStatus(
                        kanbanLists,
                        selectedKanban,
                        selectedTaskStatus
                    );
                }}
            >
                <img src={`./assets/icons/icon-board${imageStyle}.svg`} />
                <h3>{board.name.value}</h3>
            </div>
        );
    };

    themeVars.forEach((theme) => {
        document
            .querySelector(":root")
            .style.setProperty(
                theme.name,
                themeDark.value ? theme.dark : theme.light
            );
    });

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
                        srcset={`./assets/icons/logo-${
                            themeDark.value ? "light" : "dark"
                        }.svg`}
                    ></source>
                    <img id="logo" src="./assets/icons/logo-mobile.svg" />
                </picture>
                <h2
                    id="board-header"
                    onClick={() =>
                        (showBoardModal.value = !showBoardModal.value)
                    }
                >
                    {kanbanLists.value[selectedKanban.value].name.value}
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
                    onCLick={(e) =>
                        checkClientBounds(
                            e,
                            showBoardModal,
                            document.querySelector("#board-header-list")
                        )
                    }
                >
                    <div id="board-header-list">
                        <h3 id="board-list-title">
                            All Boards
                            {kanbanLists.value.length > 0
                                ? ` (${kanbanLists.value.length})`
                                : ""}
                        </h3>
                        {kanbanLists.value.map((board) => {
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
                                    <input
                                        onChange={(e) =>
                                            (themeDark.value = e.target.checked)
                                        }
                                        id="theme-type"
                                        type="checkbox"
                                    />
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
