import { signal } from "@preact/signals";

const createKanbanState = () => {
    // TK: Pseudo-state prior to conversion to server-based, serves as example
    const kanbanLists = signal([
        {
            name: signal("Platform Launch"),
            id: 0,
            cols: signal([
                signal({
                    name: signal("Todo"),
                    color: "#49C4E5",
                    tasks: signal([
                        {
                            name: signal("Build UI for onboarding flow"),
                            status: signal("Todo"),
                            description: signal(
                                "This is a description of the task including any relavent details to its subtasks, ideally this will be exhaustive."
                            ),
                            subtasks: [
                                {
                                    name: "Research competitor pricing and business models",
                                    selected: signal(true),
                                },
                                {
                                    name: "Outline a business model that works for our solution",
                                    selected: signal(false),
                                },
                                {
                                    name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                                    selected: signal(false),
                                },
                            ],
                        },
                    ]),
                }),
                signal({
                    name: signal("Doing"),
                    color: "#8471F2 !important",
                    tasks: signal([
                        {
                            name: signal("Design settings and search pages"),
                            status: signal("Doing"),
                            description: signal(
                                "This is a description of the task including any relavent details to its subtasks, ideally this will be exhaustive."
                            ),
                            subtasks: [
                                {
                                    name: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                                    selected: signal(false),
                                },
                            ],
                        },
                    ]),
                }),
                signal({
                    name: signal("Done"),
                    color: "#67E2AE",
                    tasks: signal([
                        {
                            name: signal("Conduct 5 wireframe tests"),
                            status: signal("Done"),
                            description: signal(
                                "This is a description of the task including any relavent details to its subtasks, ideally this will be exhaustive."
                            ),
                            subtasks: [],
                        },
                    ]),
                }),
            ]),
        },
    ]);

    const selectedKanban = signal(0);

    const createBoard = (name, cols) => {
        cols.forEach((col) => {
            col.value.color = "#FFF";
            col.value.tasks = signal([]);
        });
        let newKanban = {
            name: signal(name),
            id: kanbanLists.value[kanbanLists.value.length - 1].id + 1,
            // ^ arbitrary, will update later
            cols: signal([...cols]),
        };

        kanbanLists.value = [...kanbanLists.value, newKanban];
    };

    const getSelectedTaskStatusList = () => {
        return [
            kanbanLists.value[selectedKanban.value].cols.value.map(
                (col) => col.value.name.value
            ),
        ];
    };

    const editKanban = (updatedName, updatedCols) => {
        const kanban = kanbanLists.value[selectedKanban.value];
        kanban.name.value = updatedName;
        updatedCols.value.forEach((col, idx) => {
            if (col.inKanban) {
                if (col.deleted) {
                    let editCols = kanban.cols.value;
                    editCols.splice(
                        editCols.findIndex(
                            (el) => el.value.name.value === col.orig
                        ),
                        1
                    );
                    kanban.cols.value = [...editCols];
                } else if (col.updated) {
                    let editCols = kanban.cols.value;
                    editCols[
                        editCols.findIndex(
                            (el) => el.value.name.value === col.orig
                        )
                    ].value.name.value = col.updated;
                    col.orig = col.updated;
                    col.updated = undefined;
                }
            } else {
                let editCols = kanban.cols.value;
                editCols.push(signal({
                    name: signal(col.updated || col.orig),
                    color: "#FFF",
                    tasks: signal([])
                }));
                kanban.cols.value = [...editCols];

                if (col.updated) {
                    col.orig = col.updated;
                    col.updated = undefined;
                }
                col.inKanban = true;
            }
        });

        // cleanup updatedCols
        let editCols = updatedCols.value.filter(col => !col.deleted);
        updatedCols.value = [...editCols];
    };

    return {
        kanbanLists,
        selectedKanban,
        createBoard,
        getSelectedTaskStatusList,
        editKanban,
    };
};

export default createKanbanState;
