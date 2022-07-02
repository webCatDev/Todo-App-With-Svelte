<script>
    const title = "About Us"
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1>{title}</h1>
{#each Array(5) as array}
<p>This is my first document with svelte. This text is rendered 5 times.</p>
{/each}