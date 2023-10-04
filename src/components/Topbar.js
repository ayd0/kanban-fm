export default function Topbar({ state }) {
    const selectedBoardName =
        state.boards.value[state.selectedBoard.value].name;
    const showSidebar = state.showSidebar;
    const themeDark = state.themeDark;
    const showNewTask = state.showNewTask;

    return (
        <div id="topbar-container">
            <div
                id="logo-divider"
                style={`display: ${showSidebar.value ? "none" : "flex"}`}
            >
                <img
                    src={`./assets/icons/logo-${
                        themeDark.value ? "light" : "dark"
                    }.svg`}
                />
            </div>
            <h1>{selectedBoardName}</h1>
            <button onClick={() => (showNewTask.value = true)}>
                <img src="./assets/icons/icon-add-task-mobile.svg" />
                Add New Task
            </button>
            <img src="./assets/icons/icon-vertical-ellipsis.svg" />
        </div>
    );
}
