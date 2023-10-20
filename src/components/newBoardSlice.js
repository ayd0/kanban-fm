import { signal } from "@preact/signals";

const createNewBoard = (newBoardName, boardCols) => {
    return {
        name: signal(newBoardName.value),
        cols: signal(boardCols),
    };
};

const createNewBoardState = () => {
    const showNewBoard = signal(false);
    const newBoardName = signal("");
    // TRACKING: Kanban task duplication issue -> 
    const newBoardCols = signal([
        signal({
            name: signal("Todo"),
        }),
        signal({
            name: signal("Doing"),
        }),
        signal({
            name: signal("Done"),
        }),
    ]);

    const resetBoardCols = () => {
        newBoardName.value = "";
        newBoardCols.value = [
            signal({
                name: signal("Todo"),
            }),
            signal({
                name: signal("Doing"),
            }),
            signal({
                name: signal("Done"),
            }),
        ];
    };

    const addNewCol = () => {
        newBoardCols.value = [...newBoardCols.value, signal({ name: signal("") })];
    };

    return {
        showNewBoard,
        newBoardName,
        newBoardCols,
        resetBoardCols,
        addNewCol,
    };
};

export default createNewBoardState;
