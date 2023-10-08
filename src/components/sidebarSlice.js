import { signal, computed } from "@preact/signals";

const createSidebarState = () => {
    const showBoardModal = signal(false);
    const showSidebar = signal(true);
    // switch to false for build
    const themeDark = signal(true);

    const resetSelectedTaskStatus = (
        kanbanLists,
        selectedKanban,
        selectedTaskStatus
    ) => {
        selectedTaskStatus.value =
            kanbanLists.value[selectedKanban.value].cols.value[0].value.name
                .value;
    };

    return {
        showBoardModal,
        showSidebar,
        themeDark,
        resetSelectedTaskStatus,
    };
};

export default createSidebarState;
