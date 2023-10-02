export default function Sidebar() {
    return (
        <div id="sidebar">
            <img id="logo" src="./assets/icons/logo-mobile.svg" />
            <h2 id="board-header">Platform Launch</h2>
            <img
                id="board-chevron"
                src="./assets/icons/icon-chevron-down.svg"
            />
            <img
                id="add-task-btn"
                src="./assets/icons/icon-add-task-mobile.svg"
            />
            <img
                id="board-settings"
                src="./assets/icons/icon-vertical-ellipsis.svg"
            />
            <div id="board-header-container">
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
                </div>
            </div>
        </div>
    );
}
