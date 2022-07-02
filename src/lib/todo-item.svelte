<script lang="ts">
    export let todo: Todo; 
</script>

<div class="todo">
    <form action="">
        <input type="hidden" name="done" value="" />
        <button aria-label="Mark done/not done" class="toggle"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="512"
                height="512"
                x="0"
                y="0"
                viewBox="0 0 520 520"
                style="enable-background:new 0 0 512 512"
                xml:space="preserve"
                class=""
                ><g
                    ><g
                        xmlns="http://www.w3.org/2000/svg"
                        id="_15-Checked"
                        data-name="15-Checked"
                        ><circle
                            cx="208.52"
                            cy="288.5"
                            fill="#b0ef8f"
                            r="176.52"
                            data-original="#b0ef8f"
                            class=""
                        /><path
                        id="tick"
                            d="m210.516 424.937-2.239-3.815c-34.2-58.27-125.082-181.928-126-183.17l-1.311-1.781 30.963-30.6 98.012 68.439c61.711-80.079 119.283-135.081 156.837-167.2 41.081-35.135 67.822-51.31 68.092-51.465l.608-.364h52.522l-5.017 4.468c-129.029 114.926-268.883 359.19-270.276 361.644z"
                            fill="#009045"
                            data-original="#009045"
                            class=""
                        /></g
                    ></g
                ></svg
            ></button
        >
    </form>

    <form action="" method="PATCH" class="text">
        <input type="text" name="text" value="{todo.text}"/>
        <button aria-label="Save todo" class="save"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="512"
                height="512"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                style="enable-background:new 0 0 512 512"
                xml:space="preserve"
                class=""
                ><g>
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        style=""
                        d="M507.606,84.394l-80-80C424.793,1.581,420.978,0,417,0H15C6.716,0,0,6.716,0,15v482  c0,8.284,6.716,15,15,15h482c8.284,0,15-6.716,15-15V95C512,91.022,510.419,87.207,507.606,84.394z"
                        fill="#72a3fc"
                        data-original="#72a3fc"
                        class=""
                    />
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        style=""
                        d="M507.606,84.394l-80-80C424.793,1.581,420.978,0,417,0H256v512h241c8.284,0,15-6.716,15-15V95  C512,91.022,510.419,87.207,507.606,84.394z"
                        fill="#2892fc"
                        data-original="#2892fc"
                    />
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        style=""
                        d="M406,242H106c-8.284,0-15,6.716-15,15v255h330V257C421,248.716,414.284,242,406,242z"
                        fill="#f9f9f9"
                        data-original="#f9f9f9"
                        class=""
                    />
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        style=""
                        d="M421,257c0-8.284-6.716-15-15-15H256v270h165V257z"
                        fill="#dfe4ea"
                        data-original="#dfe4ea"
                        class=""
                    />
                    <g xmlns="http://www.w3.org/2000/svg">
                        <path
                            style=""
                            d="M346,452H166c-8.284,0-15-6.716-15-15s6.716-15,15-15h180c8.284,0,15,6.716,15,15   S354.284,452,346,452z"
                            fill="#fad557"
                            data-original="#fad557"
                            class=""
                        />
                        <path
                            style=""
                            d="M346,332H166c-8.284,0-15-6.716-15-15s6.716-15,15-15h180c8.284,0,15,6.716,15,15   S354.284,332,346,332z"
                            fill="#fad557"
                            data-original="#fad557"
                            class=""
                        />
                        <path
                            style=""
                            d="M346,392H166c-8.284,0-15-6.716-15-15s6.716-15,15-15h180c8.284,0,15,6.716,15,15   S354.284,392,346,392z"
                            fill="#fad557"
                            data-original="#fad557"
                            class=""
                        />
                    </g>
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        style=""
                        d="M361,0H91v145c0,8.284,6.716,15,15,15h240c8.284,0,15-6.716,15-15V0z"
                        fill="#5458ea"
                        data-original="#5458ea"
                        class=""
                    />
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        style=""
                        d="M256,0v160h90c8.284,0,15-6.716,15-15V0H256z"
                        fill="#3545e3"
                        data-original="#3545e3"
                    />
                    <g xmlns="http://www.w3.org/2000/svg">
                        <path
                            style=""
                            d="M346,422h-90v30h90c8.284,0,15-6.716,15-15S354.284,422,346,422z"
                            fill="#fcb12b"
                            data-original="#fcb12b"
                            class=""
                        />
                        <path
                            style=""
                            d="M346,302h-90v30h90c8.284,0,15-6.716,15-15S354.284,302,346,302z"
                            fill="#fcb12b"
                            data-original="#fcb12b"
                            class=""
                        />
                        <path
                            style=""
                            d="M346,362h-90v30h90c8.284,0,15-6.716,15-15S354.284,362,346,362z"
                            fill="#fcb12b"
                            data-original="#fcb12b"
                            class=""
                        />
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg" />
                    <g xmlns="http://www.w3.org/2000/svg" />
                    <g xmlns="http://www.w3.org/2000/svg" />
                    <g xmlns="http://www.w3.org/2000/svg" />
                    <g xmlns="http://www.w3.org/2000/svg" />
                    <g xmlns="http://www.w3.org/2000/svg" />
                    <g xmlns="http://www.w3.org/2000/svg" />
                    <g xmlns="http://www.w3.org/2000/svg" />
                    <g xmlns="http://www.w3.org/2000/svg" />
                    <g xmlns="http://www.w3.org/2000/svg" />
                    <g xmlns="http://www.w3.org/2000/svg" />
                    <g xmlns="http://www.w3.org/2000/svg" />
                    <g xmlns="http://www.w3.org/2000/svg" />
                    <g xmlns="http://www.w3.org/2000/svg" />
                    <g xmlns="http://www.w3.org/2000/svg" />
                </g></svg
            ></button
        >
    </form>

    <form action="/todos/{todo.uid}?_method=delete" method="POST">
        <button aria-label="Delete todo" class="delete"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="512"
                height="512"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                style="enable-background:new 0 0 512 512"
                xml:space="preserve"
                class=""
                ><g
                    ><path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m256 80h-32v-48h-64v48h-32v-80h128zm0 0"
                        fill="#62808c"
                        data-original="#62808c"
                    /><path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m304 512h-224c-26.507812 0-48-21.492188-48-48v-336h320v336c0 26.507812-21.492188 48-48 48zm0 0"
                        fill="#e76e54"
                        data-original="#e76e54"
                        class=""
                    /><path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m384 160h-384v-64c0-17.671875 14.328125-32 32-32h320c17.671875 0 32 14.328125 32 32zm0 0"
                        fill="#77959e"
                        data-original="#77959e"
                        class=""
                    /><path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m260 260c-6.246094-6.246094-16.375-6.246094-22.625 0l-41.375 41.375-41.375-41.375c-6.25-6.246094-16.378906-6.246094-22.625 0s-6.246094 16.375 0 22.625l41.375 41.375-41.375 41.375c-6.246094 6.25-6.246094 16.378906 0 22.625s16.375 6.246094 22.625 0l41.375-41.375 41.375 41.375c6.25 6.246094 16.378906 6.246094 22.625 0s6.246094-16.375 0-22.625l-41.375-41.375 41.375-41.375c6.246094-6.25 6.246094-16.378906 0-22.625zm0 0"
                        fill="#ffffff"
                        data-original="#ffffff"
                        class=""
                    /></g
                ></svg
            ></button
        >
    </form>
</div>

<style>
    .todo {
        display: grid;
        grid-template-columns: 2rem 1fr 2rem;
        gap: 0.5rem;
        padding: 0.5rem;
        margin: 0 0 0.5rem 0;
        background-color: white;
        border-radius: 8px;
        filter: drop-shadow(2px 4px 6px rgba(0 0 0/0.1));
        transform: translate(-1px, -1px);
        transition: filter 0.2s, transform 0.2s;
    }

    .todo button {
        width: 2rem;
        height: 2rem;
        border: none;
        background-color: transparent;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    }

    .todo input {
        flex: 1;
        padding: 0.5rem 2rem 0.5rem 0.8rem;
        border-radius: 3px;
    }

    .toggle {
        border: 1px solid rgba(0 0 0 / 0.2);
        border-radius: 50%;
        background-size: 1rem auto;
    }

    .text {
        position: relative;
        display: flex;
        align-items: center;
        flex: 1;
    }
    .save {
        position: absolute;
        right: 2px;
        opacity: 0;
    }

    .todo input:focus + .save,
    .save:focus {
        transition: opacity 0.2s;
        opacity: 1;
    }

    .save svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    .delete {
        opacity: 0.2;
    }

    .delete svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    .delete:hover,
    .delete:focus {
        transition: opacity 0.2s;
        opacity: 1;
    }

    /* TODO: Uncomment when api end point is done
    .done {
        transform: none; 
        opacity: .4;
        filter: drop-shadow(0 0 1px rgba( 0 0 0 /.1));
    } */

    .toggle svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    .done .toggle svg #tick{
        opacity: 0;
        transform: scale(0);
        transform-origin: bottom left;
        transition: opacity .2s, transform .2s;
    }

    .done .toggle:hover svg #tick{
        opacity: 1;
        transform: scale(1);
    }
</style>
