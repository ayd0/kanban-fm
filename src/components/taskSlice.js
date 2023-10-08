import { signal } from "@preact/signals";

const createTaskState = () => {
    const showTask = signal(true);

    const taskStatusList = [
        { name: "Todo", id: 0 },
        { name: "Doing", id: 1 },
        { name: "Done", id: 2 },
    ];
    const currentSelectedTaskStatus = signal("Todo");

    return { showTask, taskStatusList, currentSelectedTaskStatus };
};

export default createTaskState;
