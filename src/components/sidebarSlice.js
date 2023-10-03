import { signal } from "@preact/signals";

const createSidebarState = () => {
    const showBoardModal = signal(false);
    const showSidebar = signal(true);
    const selectedBoard = signal(0);

    const boards = signal([
        { name: "Platform Launch", selected: signal(true), id: 0 },
        { name: "Marketing Plan", selected: signal(false), id: 1 },
        { name: "Roadmap", selected: signal(false), id: 2 },
    ]);

    return { showBoardModal, showSidebar, selectedBoard, boards };
};

export default createSidebarState;
