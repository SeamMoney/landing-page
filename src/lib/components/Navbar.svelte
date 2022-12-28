<script lang="ts">
	const menus = [
		{name: 'Explorer', link: 'https://app.seam.money/explorer'}, 
		{name: 'Github', link: 'https://github.com/SeamMoney'}, 
		{name: 'Twitter', link: 'https://twitter.com/SeamMoney'}, 
		{name: 'Docs', link: 'https://docs.seam.money/'},
		{name: 'Blog', link: 'https://paragraph.xyz/@seam'}
	]
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>
<nav
	class="container fixed top-0 z-[9999] max-w-full px-6 py-8 mx-auto md:flex md:justify-between md:items-center backdrop-blur-md"
>
	<div class="flex items-center justify-between">
		<a href={"/"} >
			<div class="flex items-center">
				<img src="/images/logo.png" width={80} alt="Seam Logo" class="sm:w-[80px] xss:w-[50px]" />
				<h1 class="sm:text-6xl xss:text-2xl sm:leading-[84px] xss:leading-[44px]">
					<span class="font-semibold">SΣ<span class="font-semibold sm:text-[76px] xss:text-[32px]">∀</span>M</span>
				</h1>
			</div>
		</a>
		<div on:click={toggleNavbar} class="flex md:hidden">
			<button
			type="button"
			class="text-slate-50 hover:text-slate-200 focus:outline-none focus:text-slate-200"
			>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			</button>
		</div>
	</div>

	<div
		class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
			? 'flex'
			: 'hidden'}"
	>
		{#each menus as menu}
			<a href={menu.link} class="nav-link">{menu.name}</a>
		{/each}
	</div>
</nav>

<style lang="postcss">
	.nav-link {
		@apply relative font-bold transition hover:text-info;
	}
	.nav-link:hover::after {
		content: '';
		position: absolute;
		bottom: -8px;
		left: 50%;
		border-radius: 10000px;
		width: 6px;
		height: 6px;
		background: linear-gradient(38.75deg, #6bd4ff 14.73%, #8c70ff 85.28%);
	}
</style>
