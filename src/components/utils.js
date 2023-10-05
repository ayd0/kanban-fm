export const checkClientBounds = (e, state) => {
    if (e.clientX == e.offsetX && e.clientY == e.offsetY) {
        state.value = false;
    }
};