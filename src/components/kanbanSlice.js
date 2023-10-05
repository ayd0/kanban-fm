import { signal } from "@preact/signals";

const createKanbanState = () => {

    // TK: Pseudo-state prior to conversion to server-based, serves as example
    const kanbanLists = [
        {
            name: "Platform Launch",
            cols: [
                {
                    name: "TODO",
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
                },
                {
                    name: "DOING",
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
                },
                {
                    name: "DONE",
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
                },
            ],
        },
    ];
};

export default createKanbanState;
