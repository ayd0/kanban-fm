import { signal } from "@preact/signals";

const createNewTaskState = () => {
    const showNewTask = signal(false);
    const taskName = signal("");

    const subtaskList = signal([
        { name: "" },
        { name: "" },
    ]);

    const selectedTaskStatus = signal("");

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

        console.log(kanbanLists.value);
    };

    return {
        showNewTask,
        taskName,
        subtaskList,
        selectedTaskStatus,
        createTask,
    };
};

export default createNewTaskState;
