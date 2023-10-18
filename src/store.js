import createSidebarState from "./components/sidebarSlice";
import createKanbanState from "./components/kanbanSlice";
import createNewTaskState from "./components/newTaskSlice";
import createTaskState from "./components/taskSlice";
import createNewBoardState from "./components/newBoardSlice";
import createEditBoardState from "./components/editBoardSlice";
import createBoardSettingsState from "./components/boardSettingsSlice";
import createDeleteBoardState from "./components/deleteBoardSlice";

const createStore = () => ({
    sidebar: createSidebarState(),
    kanban: createKanbanState(),
    newBoard: createNewBoardState(),
    newTask: createNewTaskState(),
    task: createTaskState(),
    editBoard: createEditBoardState(),
    boardSettings: createBoardSettingsState(),
    deleteBoard: createDeleteBoardState(),
});

export default createStore;
