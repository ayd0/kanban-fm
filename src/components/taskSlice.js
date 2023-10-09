import { signal } from "@preact/signals";

const createTaskState = () => {
    const showTask = signal(false);
    const selectedTaskName = signal("");
    const selectedTaskSubtasks = signal([]);
    const selectedTaskDescription = signal("");

    const taskStatusList = [
        { name: "Todo", id: 0 },
        { name: "Doing", id: 1 },
        { name: "Done", id: 2 },
    ];

    return {
        showTask,
        taskStatusList,
        selectedTaskName,
        selectedTaskSubtasks,
        selectedTaskDescription,
    };
};

export default createTaskState;
