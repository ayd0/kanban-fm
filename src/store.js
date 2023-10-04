import createSidebarState from "./components/sidebarSlice";
import createNewBoardState from "./components/newBoardSlice";
import createNewTaskState from "./components/newTaskSlice";

const createStore = () => ({
    sidebar: createSidebarState(),
    newBoard: createNewBoardState(),
    newTask: createNewTaskState(),
});

export default createStore;
