import { signal, computed } from "@preact/signals";

const createSidebarState = () => {
    const showBoardModal = signal(false);
    const showSidebar = signal(true);
    // switch to false for build
    const themeDark = signal(true);

    return {
        showBoardModal,
        showSidebar,
        themeDark,
    };
};

export default createSidebarState;
