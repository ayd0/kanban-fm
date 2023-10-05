import { signal } from "@preact/signals";

const createNewBoard = (newBoardName, boardCols) => {
    return {
        name: signal(newBoardName.value),
        cols: signal(boardCols),
    };
};

const createNewBoardState = () => {
    const showNewBoard = signal(true);
    const newBoardName = signal("");
    const newBoardCols = signal([
        {
            name: "Todo",
        },
        {
            name: "Doing",
        },
        {
            name: "Done",
        },
    ]);

    const resetBoardCols = () => {
        newBoardName.value = "";
        newBoardCols.value = [];
    };

    return { showNewBoard, newBoardName, newBoardCols, resetBoardCols };
};

export default createNewBoardState;
