import { signal } from "@preact/signals";

const createNewTaskState = () => {
    const showNewTask = signal(false);
    const taskName = signal("");

    const subtaskList = signal([
        { name: "" },
        { name: "" },
    ]);

    const taskStatusList = [
        { name: "Todo", id: 0 },
        { name: "Doing", id: 1 },
        { name: "Done", id: 2 },
    ];
    const selectedTaskStatus = signal(taskStatusList[0].name);

    const createTask = (kanbanLists, selectedKanban, taskDescription) => {
        const kanbanColIndex = kanbanLists.value[
            selectedKanban.value
        ].cols.value.findIndex(
            (col) =>
                col.value.name.value.toLowerCase() ===
                selectedTaskStatus.value.toLowerCase()
        );

        subtaskList.value.forEach(
            (subtask) => (subtask.selected = signal(false))
        );

        const newTask = {
            name: signal(taskName.value),
            status: signal(selectedTaskStatus.value),
            description: signal(taskDescription.value),
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
