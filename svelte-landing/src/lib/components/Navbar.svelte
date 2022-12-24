<script lang="ts">
	const menus = [
		{name: 'Composables', link: 'https://app.seam.money/powersets'}, 
		{name: 'Explorer', link: 'https://app.seam.money/explorer'}, 
		{name: 'Github', link: 'https://github.com/SeamMoney'}, 
		{name: 'Docs', link: 'https://docs.seam.money/'}
		]
</script>

<nav class="fixed top-0 z-50 w-full py-6 backdrop-blur-md">
	<div class="flex justify-between mx-auto max-w-7xl">
		<a href={"/"}>
		<div class="flex items-center">
			<img src="/images/logo.png" width={80} alt="Seam Logo" />
			<h1 class="text-6xl leading-[84px]">
				<span class="font-semibold">Seam</span>
			</h1>
		</div>
		</a>
		<div class="flex items-center space-x-12">
			{#each menus as menu}
				<a href={menu.link} class="nav-link">{menu.name}</a>
			{/each}
		</div>
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
