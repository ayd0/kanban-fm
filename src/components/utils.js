export const checkClientBounds = (
    e,
    state,
    target,
    cb = () => {},
    override = false
) => {
    const dims = target.getBoundingClientRect();

    // TODO: setup override to account for NewTask dropdown
    if (!override) {
        if (
            (e.clientY < dims.top ||
                e.clientY > dims.bottom ||
                e.clientX < dims.left ||
                e.clientX > dims.right) &&
            (dims.top > 0 || dims.bottom > 0 || dims.left > 0 || dims.right > 0)
        ) {
            state.value = false;
            cb();
        }
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
    {
        name: "--kanban-column",
        light: "linear-gradient(rgba(233,239,250,1) 0%, rgba(233,239,250,.3) 50%)",
        dark: "linear-gradient(rgba(43,44,55,1) 0%, rgba(43,44,55,0.3) 50%)",
    },
    {
        name: "--kanban-column-hover",
        light: "linear-gradient(rgba(233,239,250,1) 0%, rgba(233,239,250,.7) 100%)",
        dark: "linear-gradient(rgba(43,44,55,1) 0%, rgba(43,44,55,0.3) 100%)",
    },
];
