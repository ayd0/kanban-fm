import { signal } from "@preact/signals"

const createBoardSettingsState = () => {
    const showBoardSettings = signal(false); 

    return { showBoardSettings };
}

export default createBoardSettingsState;