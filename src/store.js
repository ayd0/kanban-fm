import createSidebarState from "./components/sidebarSlice";
import createKanbanState from "./components/kanbanSlice";
import createNewBoardState from "./components/newBoardSlice";
import createNewTaskState from "./components/newTaskSlice";
import createTaskState from "./components/taskSlice";

const createStore = () => ({
    sidebar: createSidebarState(),
    kanban: createKanbanState(),
    newBoard: createNewBoardState(),
    newTask: createNewTaskState(),
    task: createTaskState(),
});

export default createStore;
