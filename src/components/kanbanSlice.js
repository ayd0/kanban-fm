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
                            status: signal('Todo'),
                            subtasks: [
                                "Research competitor pricing and business models",
                                "Outline a business model that works for our solution",
                                "Talk to potential customers about our proposed solution and ask for fair price expectancy",
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
                            status: signal('Doing'),
                            subtasks: [
                                "Talk to potential customers about our proposed solution and ask for fair price expectancy",
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
                            status: signal('Done'),
                            subtasks: [],
                        },
                    ]),
                }),
            ]),
        },
    ]);

    const selectedKanban = signal(0);

    const createBoard = (name, cols) => {
        cols.forEach(col => {
            col.value.color = "#FFF"
            col.value.tasks = signal([]);
        });
        let newKanban = {
            name: signal(name),
            id: kanbanLists.value[kanbanLists.value.length - 1].id + 1,
            // ^ arbitrary, will update later
            cols: signal([
                ...cols
            ]),
        }

        kanbanLists.value = [...kanbanLists.value, newKanban];
    };

    return { kanbanLists, selectedKanban, createBoard };
};

export default createKanbanState;
