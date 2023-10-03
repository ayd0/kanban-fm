import createNewBoardState from "./components/newBoardSlice";
import createSidebarState from "./components/sidebarSlice";

const createStore = () => ({
    newBoard: createNewBoardState(),
    sidebar: createSidebarState(),
});

export default createStore;
