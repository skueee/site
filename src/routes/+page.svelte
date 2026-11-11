<script>
	import SocialPill from '#lib/components/SocialPill.svelte';
	import RepoListing from '#lib/components/RepoListing.svelte';

	let { data } = $props();
</script>

<div class="flex flex-col items-center justify-start gap-10">
	<div class="flex flex-col items-center justify-center gap-5">
		<div class="flex flex-col items-center justify-center gap-0.5">
			<div class="flex flex-col items-center justify-center">
				<p class="google-sans-flex-regular -mb-4 text-3xl">Hi, I'm</p>
				<h1 class="google-sans-flex-special-title text-8xl md:text-9xl">skue</h1>
			</div>
			<p class="google-sans-flex-regular mb-3.5">software engineer (for fun)</p>
			<div class="flex flex-row gap-5">
				<SocialPill text="Github" link="https://github.com/skueee/" />
				<SocialPill text="Email" link="mailto:me@skue.dev" />
			</div>
		</div>
		<p class="google-sans-flex-bold-round w-full text-start text-xl">
			Heya, I'm skue (my real name is Robin, with a French pronounciation pls), a Belgian teen that
			codes for fun! I really like to solve random problems that I don't even have, and to
			experiment with things.
		</p>
		<p class="google-sans-flex-bold-round w-full text-start text-xl">
			I also sometimes try 3d modeling, music making and all that kind of stuff in my free time, but
			I'm not great at it. I just like to learn :)
		</p>
	</div>
	<div class="flex w-full flex-col items-center justify-center gap-5 sm:px-10">
		<h1 class="google-sans-flex-title w-full text-3xl sm:text-4xl">
			What I'm currently active on:
		</h1>
		<div class="flex w-full flex-col gap-3 px-5">
			{#if data.repos.length === 0}
				<p>Loading projects or unable to fetch...</p>
			{:else}
				{#each data.repos as repo (repo.name)}
					<RepoListing name={repo.name} description={repo.description} url={repo.url} />
				{/each}
			{/if}
		</div>
		<a
			rel="noopener noreferer"
			target="_blank"
			href="https://github.com/skueee?tab=repositories"
			class="google-sans-flex-wide">See all →</a
		>
	</div>
	<div class="flex w-full flex-col items-center justify-center gap-5 sm:px-10">
		<h1 class="google-sans-flex-title w-full text-4xl">All my socials:</h1>
		<div class="flex w-full flex-wrap items-center justify-center gap-4">
			<SocialPill text="Github" link="https://github.com/skueee" />
			<SocialPill text="Gitlab" link="https://gitlab.com/skueee" />
			<SocialPill text="Email" link="mailto:me@skue.dev" />
			<SocialPill text="Twitter" link="https://x.com/skueee_" />
			<SocialPill text="Linkedin" link="https://www.linkedin.com/in/robin-brams-89707a443" />
			<SocialPill text="Bluesky" link="https://bsky.app/profile/skioue.bsky.social" />
		</div>
	</div>
</div>
