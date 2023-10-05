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
    const newBoardCols = signal({});

    const resetBoardCols = () => {
        newBoardName.value = "";
        newBoardCols.value = {};
    }

    return { showNewBoard, newBoardName, resetBoardCols };
};

export default createNewBoardState;
