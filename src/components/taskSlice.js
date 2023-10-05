import { signal } from "@preact/signals";

const createTaskState = () => {
    const showTask = signal(false);

    const taskStatusList = [
        { name: "Todo", id: 0 },
        { name: "Doing", id: 1 },
        { name: "Done", id: 2 },
    ];
    const selectedTaskName = signal("Todo");

    return { showTask, taskStatusList, selectedTaskName };
};

export default createTaskState;
