export const checkClientBounds = (e, state, target, cb=()=>{}) => {
    const dims = target.getBoundingClientRect();

    if (
        e.clientY < dims.top ||
        e.clientY > dims.bottom ||
        e.clientX < dims.left ||
        e.clientX > dims.right
    ) {
        state.value = !state.value;
        cb();
    }
}

export const themeVars = [
    {
        name: "--body-color",
        light: "var(--light-grey)",
        dark: "var(--very-dark-grey)",
    },
    {
        name: "--components-color",
        light: "var(--white)",
        dark: "var(--dark-grey)",
    },
    {
        name: "--lines-color",
        light: "var(--lines-light)",
        dark: "var(--lines-dark)",
    },
    {
        name: "--header-color",
        light: "var(--black)",
        dark: "var(--white)",
    },
    {
        name: "--subheader-color",
        light: "var(--medium-grey)",
        dark: "var(--white)",
    },
    {
        name: "--subcomponent-color",
        light: "var(--white)",
        dark: "var(--very-dark-grey)",
    },
    {
        name: "--subcomponent-lines",
        light: "var(--light-grey)",
        dark: "#828FA3",
    },
    {
        name: "--alt-btn-color",
        light: "var(--main-purple-light)",
        dark: "var(--white)",
    },
];
