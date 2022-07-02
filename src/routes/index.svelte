<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";
    export const load: Load = async ({ fetch }) => {
        const response = await fetch("/todos");

        if (!response.ok) {
            const { message } = await response.json();
            return {
                error: new Error(message),
            };
        }

        const todos = await response.json();
        console.log(todos);
        return {
            props: { todos },
        };
    };
</script>

<script lang="ts">
    import TodoItem from "../lib/todo-item.svelte";

    export let todos: Todo[];

    const title = "Todo";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="todos">
    <h1>{title}</h1>
    <form action="/todos" method="POST" class="new">
        <input
            type="text"
            name="text"
            aria-label="Add a todo"
            placeholder="+ type to add a todo"
        />
    </form>
{#each todos as todo }
<TodoItem {todo}/>
{/each}

</div>

<style>
    .todos {
        width: 100%;
        max-width: 42rem;
        margin: 0 auto;
    }

    .new {
        margin: 0 0 0.5rem 0;
    }

    .new input {
        display: inline-block;
        width: 100%;
        padding: 0.5rem 1rem 0.3rem 1rem;
        font-size: 1.8rem;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 0.5rem;
        text-align: center;
    }

    .todos :global(input) {
        border: 1px solid transparent;
    }
    .todos :global(input:focus-visible) {
        box-shadow: inset 1px 1px 6px rgba(0 0 0 /0.1);
        border: 3px solid #00d9ff !important;
        outline: none;
    }
</style>
