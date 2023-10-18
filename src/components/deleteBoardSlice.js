import { signal } from "@preact/signals";

const createDeleteBoardState = () => {
    const showDeleteBoard = signal(true);
    
    return { showDeleteBoard };
}

export default createDeleteBoardState;