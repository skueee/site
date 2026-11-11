<script>
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/guestbook', label: 'Guestbook' },
		{ href: '/corners', label: 'Corners' }
	];

	/** @param {string} href */
	function isActive(href) {
		return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
	}
</script>

<header class="flex items-center justify-center">
	<div class="flex flex-row gap-5 md:gap-10 py-5">
		{#each links as { href, label } (href)}
			<a
				{href}
				class="text-2xl sm:text-3xl {isActive(href)
					? 'google-sans-flex-bold-extra-round'
					: 'google-sans-flex-bold-round'}">{label}</a
			>
		{/each}
	</div>
</header>
