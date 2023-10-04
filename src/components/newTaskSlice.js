import { signal } from "@preact/signals";

const createNewTaskState = () => {
    const showNewTask = signal(false); 

    const subtaskList = signal([
        { name: "", id: 0 },
        { name: "", id: 1 },
    ]);

    const taskStatusList = [
        { name: "Todo", id: 0 },
        { name: "Doing", id: 1 },
        { name: "Done", id: 2 },
    ];
    const selectedTaskName = signal("Todo");

    return { showNewTask, subtaskList, taskStatusList, selectedTaskName };
}

export default createNewTaskState;