<script lang="ts">
	let mousePosY = 0;
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

<header class="navbar light-by-default backdrop-blur-md {mousePosY < 50 ? 'scrolled-to-top' : ''}">
	<nav
		class="w-full px-6 mx-auto md:flex md:justify-between md:items-center "
	>
		<div class="md:flex sm:block justify-between w-full mx-auto max-w-7xl">
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
				class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center lg:space-x-12 md:space-x-5 md:mt-0 {showMenu
					? 'flex'
					: 'hidden'}"
			>
				{#each menus as menu}
					<a href={menu.link} class="nav-link">{menu.name}</a>
				{/each}
			</div>
		</div>
	</nav>
</header>

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
	.navbar{
		position:fixed;
		left:0px;
		right:0px;
		top:0px;
		z-index:9999;
		--tw-translate-y: -2rem;
		transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
		transform:translate3d(var(--tw-translate-x),var(--tw-translate-y),0) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
		border-bottom-width:1px;
		border-color:#0000001a;
		background-color:#fffc;
		padding-top:3rem;
		padding-bottom:1rem;
		--tw-text-opacity: 1;
		color:rgb(0 0 0 / var(--tw-text-opacity));
		--tw-backdrop-blur: blur(16px);
		-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
		backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
		transition-property:all;
		transition-timing-function:cubic-bezier(.4,0,.2,1);
		transition-duration:.3s
	}
	@media (prefers-color-scheme: dark){
		.navbar{
			border-color:#ffffff1a;
			background-color:#0003;
			--tw-text-opacity: 1;
			color:rgb(255 255 255 / var(--tw-text-opacity))
		}
	}
	.navbar.scrolled-to-top{
		border-color:transparent;
		--tw-backdrop-blur: blur(0);
		-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
		backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)
	}
	@media (min-width: 768px){
		.navbar.scrolled-to-top{
			--tw-translate-y: 0px;
			transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
		}
	}
	.navbar.scrolled-to-top.light-by-default{
		background-color:transparent;
		--tw-text-opacity: 1;
		color:rgb(255 255 255 / var(--tw-text-opacity));
	}
</style>

<svelte:window bind:scrollY={mousePosY} />