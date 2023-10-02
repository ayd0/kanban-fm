export default function NewBoard() {
    return (
        <div id="new-board-container">
            <div id="new-board-list">
                <h3>Add New Board</h3>
                <h4>Board Name</h4>
                <input type="text" />
                <h4>Board Columns</h4>
                <div>
                    <input type="text" />
                    <img src="./assets/icons/icon-cross.svg" />
                </div>
                <div>
                    <input type="text" />
                    <img src="./assets/icons/icon-cross.svg" />
                </div>
                <button>Add New Column</button>
                <button>Create New Board</button>
            </div>
        </div>
    );
}
