export default function Topbar({ state }) {
    const selectedBoardName = state.boards.value[state.selectedBoard.value].name;
    return (
        <div id="topbar-container">
            <h1>{selectedBoardName}</h1>
            <button><img src="./assets/icons/icon-add-task-mobile.svg" />Add New Task</button>
            <img src="./assets/icons/icon-vertical-ellipsis.svg" />
        </div>
    );
}