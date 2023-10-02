export default function App() {
    return (
        <div id="main">
            <div id="sidebar">
                <img id="logo" src="./assets/icons/logo-dark.svg"></img>
                <h3 id="board-header">ALL BOARDS</h3>
                <div className="board-selector selected-board">
                    <img style="height: 2ch;" src="./assets/icons/icon-board-selected.svg"></img>
                    <p>Platform Launch</p>
                </div>
                <div className="board-selector">
                    <img style="height: 2ch;" src="./assets/icons/icon-board.svg"></img>
                    <p>Marketing Plan</p>
                </div>
                <div className="board-selector">
                    <img style="height: 2ch;" src="./assets/icons/icon-board.svg"></img>
                    <p>Roadmap</p>
                </div>
            </div>
        </div>
    );
}
