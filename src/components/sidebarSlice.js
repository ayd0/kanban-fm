import { signal, computed } from "@preact/signals";



const createSidebarState = () => {
    const showBoardModal = signal(false);
    const showSidebar = signal(true);
    const selectedBoard = signal(0);

    const boards = signal([
        { name: "Platform Launch", selected: signal(true), id: 0 },
        { name: "Marketing Plan", selected: signal(false), id: 1 },
        { name: "Roadmap", selected: signal(false), id: 2 },
    ]);

    const numBoards = signal(() => boards.value.length);

    const createBoard = (boardName) => {
        let board = {
            name: boardName,
            selected: signal(false),
            id: numBoards.value(),
        };

        boards.value = [...boards.value, board];
    };

    return {
        showBoardModal,
        showSidebar,
        selectedBoard,
        boards,
        numBoards,
        createBoard,
    };
};

export default createSidebarState;
