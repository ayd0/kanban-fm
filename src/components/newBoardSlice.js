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
    const newBoardCols = signal([
        signal({
            name: signal("TODO"),
        }),
        signal({
            name: signal("DOING"),
        }),
        signal({
            name: signal("DONE"),
        }),
    ]);

    const resetBoardCols = () => {
        newBoardName.value = "";
        newBoardCols.value = [
            signal({
                name: signal("TODO"),
            }),
            signal({
                name: signal("DOING"),
            }),
            signal({
                name: signal("DONE"),
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
