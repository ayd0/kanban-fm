import { signal } from "@preact/signals";

const createEditBoardState = () => {
    const showEditBoard = signal(true);

    return { showEditBoard };
};

export default createEditBoardState;
