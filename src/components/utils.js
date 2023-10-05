export const checkClientBounds = (e, state, cb) => {
    if (e.clientX == e.offsetX && e.clientY == e.offsetY) {
        state.value = false;
        if (typeof cb === "function") cb();
    }
};

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
