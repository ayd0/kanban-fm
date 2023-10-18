import { signal } from "@preact/signals"

const createBoardSettingsState = () => {
    const showBoardSettings = signal(true); 

    return { showBoardSettings };
}

export default createBoardSettingsState;