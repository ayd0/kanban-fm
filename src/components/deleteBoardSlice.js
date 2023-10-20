import { signal } from "@preact/signals";

const createDeleteBoardState = () => {
    const showDeleteBoard = signal(false);
    
    return { showDeleteBoard };
}

export default createDeleteBoardState;