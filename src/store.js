import createSidebarState from "./components/sidebarSlice";
import createNewBoardState from "./components/newBoardSlice";
import createNewTaskState from "./components/newTaskSlice";
import createTaskState from "./components/taskSlice";

const createStore = () => ({
    sidebar: createSidebarState(),
    newBoard: createNewBoardState(),
    newTask: createNewTaskState(),
    task: createTaskState(),
});

export default createStore;
