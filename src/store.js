import createNewBoardState from "./components/newBoardSlice";

const createStore = () => ({
    newBoard: createNewBoardState()
})

export default createStore;