<script>
    let { img = '', alt = '', link = '#' } = $props();
</script>

<a href={link}>
    <img src={img} alt={alt} height=31 width=81/>
</a>
