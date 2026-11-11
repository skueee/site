<script>
    import SocialPill from '#lib/components/SocialPill.svelte'
</script>

<div class="flex flex-col justify-start items-center">
    <div class="flex flex-col items-center justify-center gap-5">
        <div class="flex flex-col items-center justify-center gap-0.5">
            <div class="flex flex-col items-center justify-center">
                <p class="text-3xl google-sans-flex-regular -mb-4">Hi, I'm</p>
                <h1 class="text-9xl google-sans-flex-special-title">skue</h1>
            </div>
            <p class="google-sans-flex-regular mb-3.5">software engineer (for  fun)</p>
            <div class="flex flex-row gap-5">
                <SocialPill text="Github" link="https://github.com/skueee/"/>
                <SocialPill text="Email" link="mailto:me@skue.dev"/>
            </div>
        </div>
        <p class="text-xl google-sans-flex-bold-round">
            Heya, I'm skue (my real name is Robin, with a French pronounciation pls), a Belgian teen that codes for fun!
            I really like to solve random problems that I don't even have, and to experiment with things.
        </p>
        <p class="text-xl google-sans-flex-bold-round">
            I also sometimes try 3d modeling, music making and all that kind of stuff in my free time, but I'm not great at it. I just like to learn :)
        </p>
    </div>
</div>
