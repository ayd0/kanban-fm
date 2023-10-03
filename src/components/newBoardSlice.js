import { signal } from "@preact/signals";

const createNewBoardState = () => {
    const showNewBoard = signal(true); 
    const newBoardName = signal("");
    return { showNewBoard, newBoardName };
}

export default createNewBoardState;