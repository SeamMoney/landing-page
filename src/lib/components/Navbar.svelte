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
						<img src="{mousePosY < 50 ? '/images/logo.png' : '/images/logo-dark.png'}" width={80} alt="Seam Logo"  />
						<h1 class="text-3xl sm:leading-[84px] xss:leading-[44px] relative top-[11px]">
							<span class="font-semibold">SΣ<span class="font-semibold text-[42px]">∀</span>M</span>
						</h1>
					</div>
				</a>
				<div on:click={toggleNavbar} class="flex md:hidden">
					<button class="mobile-nav-button {showMenu ? 'toggled' : ''} {mousePosY < 50 ? 'text-white' : 'text-black'}" aria-label="Toggle navigation "></button>
					<!-- <button
					type="button"
					class="text-slate-50 hover:text-slate-200 focus:outline-none focus:text-slate-200 z-[100]"
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="{mousePosY < 50 ? 'white' : 'black'}" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</button> -->
				</div>
			</div>

			<div class="nav-mobile-menu flex md:hidden {showMenu ? 'toggled' : ''}">
				{#each menus as menu}
					<a href={menu.link} class="nav-link-mobile">{menu.name}</a>
				{/each}
			</div>

			<div
				class="flex-col mt-8 space-y-4 hidden md:flex md:space-y-0 md:flex-row md:items-center lg:space-x-12 md:space-x-5 md:mt-0"
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

	.nav-mobile-menu{
		position:fixed;
		top:0px;
		right:0px;
		bottom:0px;
		left:0px;
		height:100vh;
		width:100vw;
		--tw-translate-y: -100%;
		transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
		flex-direction:column;
		align-items:center;
		justify-content:center;
		gap:1rem;
		background-color:#000c;
		padding-top:5rem;
		padding-bottom:5rem;
		--tw-text-opacity: 1;
		color:rgb(255 255 255 / var(--tw-text-opacity));
		--tw-backdrop-blur:blur(12px);
		-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
		backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
		transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;
		transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
		transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;
		transition-duration:.5s;
		transition-timing-function:cubic-bezier(.4,0,.2,1)
	}
	.nav-mobile-menu.toggled{
		--tw-translate-y: 0px;
		transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
	}
	
	.nav-link-mobile{
		display:block;
		width:100%;
		padding:.5rem 2rem;
		font-size:1.5rem;
		line-height:2rem;
		font-weight:500
	}

	.mobile-nav-button{
		position:relative;
		z-index:50;
		display:flex;
		height:3rem;
		width:3rem;
		flex-direction:column;
		background-color: transparent;

	}
	@media (min-width: 640px){
		.mobile-nav-button{
			display:none
		}
	}
	.mobile-nav-button:before,.mobile-nav-button:after{
		position:absolute;
		width:1.5rem;
		background-color:currentColor;
		height:2px;
		content:"";
		left:calc(50% - 12px);
		top:50%;
		transform-origin:center;
		transition:transform .25s ease-in-out,background-color .25s ease-in-out
	}
	.mobile-nav-button:before{
		--tw-translate-y: -.25rem;
		transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
	}
	.mobile-nav-button:after{
		--tw-translate-y: .25rem;
		transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
	}
	.mobile-nav-button.toggled:before{
		--tw-translate-y: 0px;
		--tw-rotate: 45deg;
		transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
	}
	.mobile-nav-button.toggled:after{
		--tw-translate-y: 0px;
		--tw-rotate: -45deg;
		transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
	}
</style>

<svelte:window bind:scrollY={mousePosY} />