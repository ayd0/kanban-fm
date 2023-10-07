import { signal } from "@preact/signals";

const createKanbanState = () => {
    // TK: Pseudo-state prior to conversion to server-based, serves as example
    const kanbanLists = signal([
        {
            name: signal("Platform Launch"),
            id: 0,
            cols: signal([
                signal({
                    name: "TODO",
                    color: "#49C4E5",
                    tasks: [
                        {
                            name: "Build UI for onboarding flow",
                            subtasks: [
                                "Research competitor pricing and business models",
                                "Outline a business model that works for our solution",
                                "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                            ],
                        },
                    ],
                }),
                signal({
                    name: "DOING",
                    color: "#8471F2 !important",
                    tasks: [
                        {
                            name: "Design settings and search pages",
                            subtasks: [
                                "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                            ],
                        },
                    ],
                }),
                signal({
                    name: "DONE",
                    color: "#67E2AE",
                    tasks: [
                        {
                            name: "Conduct 5 wireframe tests",
                            subtasks: [],
                        },
                    ],
                }),
            ]),
        },
    ]);

    const createBoard = (name, cols) => {
        let newKanban = {
            name: signal(name),
            id: kanbanLists.value[kanbanLists.value.length - 1].id + 1,
            // ^ arbitrary, will update later
            cols: signal([
                cols.map((col) => {
                    return signal({
                        name: col.name.value,
                        color: "#fff",
                        tasks: [],
                    });
                }),
            ]),
        }

        const updatedKanbanList = kanbanLists.value;
        updatedKanbanList.push(newKanban);

        kanbanLists.value = updatedKanbanList;
    };

    const selectedKanban = signal(0);

    return { kanbanLists, selectedKanban, createBoard };
};

export default createKanbanState;
