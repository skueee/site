<script>
    let {title = "skue's website", description = "my place to share random things that i want", url = "https://skue.dev/", image = "https://skue.dev/og-image.png", type = "website"} = $props()
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />

    <meta property="og:type" content={type} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content={title}>

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
</svelte:head>
