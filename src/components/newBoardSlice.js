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
        {
            name: signal("Todo"),
        },
        {
            name: signal("Doing"),
        },
        {
            name: signal("Done"),
        },
    ]);

    const resetBoardCols = () => {
        newBoardName.value = "";
        newBoardCols.value = [
            {
                name: signal("Todo"),
            },
            {
                name: signal("Doing"),
            },
            {
                name: signal("Done"),
            },
        ];
    };

    const addNewCol = () => {
        newBoardCols.value = [...newBoardCols.value, { name: signal("") }];
    }

    return { showNewBoard, newBoardName, newBoardCols, resetBoardCols, addNewCol };
};

export default createNewBoardState;
