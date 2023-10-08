import { signal } from "@preact/signals";

const createNewTaskState = () => {
    const showNewTask = signal(false);
    const taskName = signal("");

    const subtaskList = signal([
        { name: "", id: 0 },
        { name: "", id: 1 },
    ]);

    const taskStatusList = [
        { name: "Todo", id: 0 },
        { name: "Doing", id: 1 },
        { name: "Done", id: 2 },
    ];
    const selectedTaskStatus = signal(taskStatusList[0].name);

    const createTask = (kanbanLists, selectedKanban) => {
        const kanbanColIndex = kanbanLists.value[
            selectedKanban.value
        ].cols.value.findIndex(
            (col) =>
                col.value.name.value.toLowerCase() ===
                selectedTaskStatus.value.toLowerCase()
        );

        const newTask = {
            name: taskName.value,
            subtasks: subtaskList.value,
        };

        kanbanLists.value[selectedKanban.value].cols.value[
            kanbanColIndex
        ].value.tasks.value = [
            ...kanbanLists.value[selectedKanban.value].cols.value[
                kanbanColIndex
            ].value.tasks.value,
            newTask,
        ];
    };

    return {
        showNewTask,
        taskName,
        subtaskList,
        taskStatusList,
        selectedTaskStatus,
        createTask,
    };
};

export default createNewTaskState;
