import { signal } from "@preact/signals";

const createEditBoardState = () => {
    const showEditBoard = signal(false);

    return { showEditBoard };
};

export default createEditBoardState;
