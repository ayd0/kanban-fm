import { signal } from "@preact/signals";

const createTaskState = () => {
    const showTask = signal(true);
    const selectedTaskName = signal("");
    const selectedTaskSubtasks = signal([]);

    const taskStatusList = [
        { name: "Todo", id: 0 },
        { name: "Doing", id: 1 },
        { name: "Done", id: 2 },
    ];

    return { showTask, taskStatusList, selectedTaskName, selectedTaskSubtasks };
};

export default createTaskState;
