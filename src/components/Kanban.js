export default function Kanban() {
    return (
        <div id="kanban-container">
            <div id="add-new-col-btn">
                <h2>
                    This board is empty. Create a new column to get started.
                </h2>
                <button>
                    <img src="./assets/icons/icon-add-task-mobile.svg" />
                    Add New Column
                </button>
            </div>
            <div class="kanban-col">
                <h4><div></div>TODO (4)</h4>
                <div class="kanban-row">
                    <h3>Build UI for onboarding flow</h3>
                    <p>0 of 3 subtasks</p>
                </div>
                <div class="kanban-row">
                    <h3>Build UI for search</h3>
                    <p>0 of 1 subtasks</p>
                </div>
                <div class="kanban-row">
                    <h3>Create template structures</h3>
                    <p>0 of 2 subtasks</p>
                </div>
                <div class="kanban-row">
                    <h3>QA and test all major user journeys</h3>
                    <p>0 of 2 subtasks</p>
                </div>
            </div>
            <div class="kanban-col">
                <h4><div style="background-color: #8471F2"></div>DOING (4)</h4>
                <div class="kanban-row">
                    <h3>Build UI for onboarding flow</h3>
                    <p>0 of 3 subtasks</p>
                </div>
                <div class="kanban-row">
                    <h3>Build UI for search</h3>
                    <p>0 of 1 subtasks</p>
                </div>
                <div class="kanban-row">
                    <h3>Create template structures</h3>
                    <p>0 of 2 subtasks</p>
                </div>
                <div class="kanban-row">
                    <h3>QA and test all major user journeys</h3>
                    <p>0 of 2 subtasks</p>
                </div>
            </div>
            <div class="kanban-col">
                <h4><div style="background-color: #67E2AE"></div>DONE (4)</h4>
                <div class="kanban-row">
                    <h3>Build UI for onboarding flow</h3>
                    <p>0 of 3 subtasks</p>
                </div>
                <div class="kanban-row">
                    <h3>Build UI for search</h3>
                    <p>0 of 1 subtasks</p>
                </div>
                <div class="kanban-row">
                    <h3>Create template structures</h3>
                    <p>0 of 2 subtasks</p>
                </div>
                <div class="kanban-row">
                    <h3>QA and test all major user journeys</h3>
                    <p>0 of 2 subtasks</p>
                </div>
            </div>
        </div>
    );
}
