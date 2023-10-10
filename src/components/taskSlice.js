import { signal } from "@preact/signals";

const createTaskState = () => {
    const showTask = signal(false);
    const selectedTaskName = signal("");
    const selectedTaskSubtasks = signal([]);
    const selectedTaskDescription = signal("");

    return {
        showTask,
        selectedTaskName,
        selectedTaskSubtasks,
        selectedTaskDescription,
    };
};

export default createTaskState;
