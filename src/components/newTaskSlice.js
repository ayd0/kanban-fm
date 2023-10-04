import { signal } from "@preact/signals";

const createNewTaskState = () => {
    const showNewTask = signal(false); 
    return { showNewTask };
}

export default createNewTaskState;