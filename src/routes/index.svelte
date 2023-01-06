<script lang="ts">
	import CardList from "./Cards.svelte";
	import Card from "../lib/components/Card.svelte";
	import { onMount } from "svelte";
	import Footer from '$lib/components/Footer.svelte'

	export const ssr = false;
	let isLoading = true;

	let showcase, basics, holos, galaxies, radiant, basicGallery, 
			vee, veeUltra, veeAlt, veeMax, veeMaxAlt, veeStar, 
			trainerHolo, rainbow, gold, veeGallery;

	const getCards = async () => {
		let promiseArray = [];
		let cardFetch = await fetch("https://raw.githubusercontent.com/simeydotme/pokemon-cards-css/main/public/data.json");
		let cards = await cardFetch.json();
		return cards;
	};

	getCards().then((cards) => {
		showcase = cards[23];
		basics = cards.slice(0, 3);
		holos = cards.slice(6, 12);
		galaxies = cards.slice(12, 15);
		radiant = cards.slice(15, 18);
		basicGallery = cards.slice(60, 63);
		vee = cards.slice(18, 21);
		veeUltra = cards.slice(21, 24);
		veeAlt = [...cards.slice(27, 30), ...cards.slice(33, 36)];
		veeMax = cards.slice(24, 27);
		veeMaxAlt = [cards[36], cards[31], cards[37]];
		veeStar = cards.slice(39, 42);
		trainerHolo = cards.slice(42, 48);
		rainbow = cards.slice(48, 51);
		gold = cards.slice(51, 60);
		veeGallery = cards.slice(63, 69);
		isLoading = false;
	});

	// const clientsList = [
	// 	[{name: 'Laminar', logo: '/images/clients/abel.png'}],
	// 	[{name: 'Econia', logo: '/images/clients/aptin.png'}, {name: 'Aries', logo: '/images/clients/AUX.svg'}],
	// 	[{name: 'PancakeSwap', logo: '/images/clients/AUX.svg'}, {name: 'Cetus', logo: '/images/clients/'}, {name: 'Argo', logo: '/images/clients/tsunami.svg'}],
	// 	[{name: 'AptoSwap', logo: '/images/clients/hippo.png'}, {name: 'Leizd', logo: '/images/clients/leizd-protocol.png'}],
	// 	[{name: 'Tortuga', logo: '/images/clients/tortuga-finance.png'}]
	// ]

	function scrollToTop() {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}

	onMount(() => {
		const $headings = document.querySelectorAll("h1,h2,h3");
		const $anchor = [...$headings].filter((el) => {
			const id = el.getAttribute("id")?.replace(/^.*?-/g,"");
			const hash = window.location.hash?.replace(/^.*?-/g,"")
			return id === hash;
		})[0];
		if( $anchor ) {
			setTimeout(() => {
				$anchor.scrollIntoView();
			},100);
		}
	});
</script>

<!-- Hero section -->

<section class="dope-background py-40 sm:mt-32 px-6 sm:px-10">
	<div class="md:flex sm:block justify-between mx-auto max-w-7xl">
		<div class="flex flex-col md:w-1/2 sm:w-full">
			<h1 class="text-5xl font-bold leading-[64px]">
				<span class="character-gradient">Composable</span> DeFi Products on Aptos
			</h1>
			<a href="https://app.seam.money">
				<button class="seam-button mt-8 w-fit text-lg">Launch App</button>
			</a>
		</div>
		<div class="relative flex items-center justify-center md:w-96 xss:w-full z-[99] md:mt-0 sm:mt-20 xss:mt-20">
			<div class="showcase">
				{#if isLoading}
					loading...
				{:else}
					<Card
						name="max"
						img=""
						number="0"
						supertype="basic"
						subtypes="pokémon"
						rarity="common"
						showcase={true}
					/>
				{/if}
			</div>
		</div>
	</div>
</section>

<!-- Our clients section -->
<!-- <section class="lg:py-20 xss:py-6"> -->
<section class="py-20">
	<div class="max-w-screen-xl mx-auto px-6">
		<div class="flex flex-col items-center">
			<h1 class="text-4xl font-extrabold text-center">Supported Protocols</h1>
			<p class="mt-2 font-light text-center">We can easily add your favorite protocol, pool, or dapp</p>
		</div>
		<div class="grid grid-cols-1 xl:grid-cols-5 md:grid-cols-3 items-center justify-between mt-20 gap-10 px-8 sm:px-8 justify-center">
			<img
				src="/images/tsunami.svg"
				class="transform transition duration-300 hover:scale-125 cursor-pointer h-20 sm:h-28 sm:mb-10 mt-10 sm:pl-0 pl-3"
				alt="Tsunami"
			/>
			<img
				src="/images/ditto.svg"
				class="transform transition duration-300 hover:scale-125 cursor-pointer h-11 sm:pl-0 pl-4"
				alt="Ditto"
			/>
			<img
				src="/images/argologo.svg"
				class="transform transition duration-300 hover:scale-125 cursor-pointer h-16 sm:pl-0 pl-12"
				alt="Argo"
			/>
			<img
				src="/images/hippo.png"
				class="transform transition duration-300 hover:scale-125 cursor-pointer h-16 sm:pl-0 pl-10"
				alt="Hippo"
			/>
			<img
				src="/images/kana.svg"
				class="transform transition duration-300 hover:scale-125 cursor-pointer sm:pl-0 pl-8"
				alt="Kana"
			/>
		</div>
	</div>
	<!-- <div class="flex items-center justify-center mt-20 space-x-6">
		{#each clientsList as clients}
			<div class="flex flex-col space-y-6">
				{#each clients as client}
					<div class="client-card">
						<img src={client.logo} alt={client.name} />
					</div>
				{/each}
			</div>
		{/each}
	</div> -->
</section>

<section class="lg:py-40 xss:py-6 sm:mb-20 mb-48 mt-20 sm:mt-0">
	<div class="flex flex-col mx-10 space-y-10 z-[2] text-center">
		<!-- <p class="leading-9 px-40">
			Manage all your DeFi positions from one central dashboard. Evaluate aggregate risk, open & close positions across dapps, and track net performance.
		</p> -->
		<!-- <a href="https://app.seam.money/explorer/dapps/home">
		<button class="seam-button w-fit py-[18px] px-9">View Dapps</button>
		</a> -->

		<h1 class="sm:mt-0 mt-10 text-4xl font-bold leading-[54px]">Discover dapps on Aptos through the <span class="character-gradient">Seam Explorer</span></h1>

		<div class="block flex-col md:flex justify-between py-3 max-w-[1280px] mx-auto px-0">

			<div class="relative group">
				<div class="pb-2 mb-2 absolute -inset-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-200"></div>
				<div class="relative sm:px-0 px-0">
					<img src="/images/dapp-explorer2.png" class="shadow rounded-xl h-auto align-middle" alt="Dapp Explorer" />
				</div>
			</div>

		</div>

		<div class="container my-24 pt-6 mx-auto max-w-[1280px]">
			<section class="text-white text-center">
				<div class="grid lg:gap-x-12 lg:grid-cols-3">
				<div class="mb-12 lg:mb-0">
					<div class="rounded-2xl border border-[3px] border-dashed shadow-lg h-full block">
					<div class="flex justify-center">
						<div class="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
						<svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path fill="currentColor"
							d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
							</path>
						</svg>
						</div>
					</div>
					<div class="p-6">
						<h5 class="text-lg font-semibold mb-4">Support 24/7</h5>
						<p>
						Laudantium totam quas cumque pariatur at doloremque hic quos quia eius. Reiciendis
						optio minus mollitia rerum labore facilis inventore voluptatem ad, quae quia sint.
						Ullam.
						</p>
					</div>
					</div>
				</div>
			
				<div class="mb-12 lg:mb-0">
					<div class="shadow-lg h-full block rounded-2xl border border-[3px] border-dashed">
					<div class="flex justify-center">
						<div class="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
						<svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path fill="currentColor"
							d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z">
							</path>
						</svg>
						</div>
					</div>
					<div class="p-6">
						<h5 class="text-lg font-semibold mb-4">Safe and solid</h5>
						<p>
						Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam aspernatur odio
						soluta, quisquam dolore animi mollitia a omnis praesentium, expedita nobis!
						</p>
					</div>
					</div>
				</div>
			
				<div class="sm:mb-12 lg:mb-0">
					<div class="rounded-2xl border border-[3px] border-dashed shadow-lg h-full block">
					<div class="flex justify-center">
						<div class="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
						<svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path fill="currentColor"
							d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z" />
						</svg>
						</div>
					</div>
					<div class="p-6">
						<h5 class="text-lg font-semibold mb-4">Extremely fast</h5>
						<p>
						Enim cupiditate, minus nulla dolor cumque iure eveniet facere ullam beatae hic
						voluptatibus dolores exercitationem? Facilis debitis aspernatur amet nisi?
						</p>
					</div>
					</div>
				</div>
				</div>
			</section>
			</div>
		</div>
</section>

<section class="xss:py-6 -sm:py-40">
	<div class="block md:flex justify-between mx-auto py-3 max-w-7xl sm:pt-10 -mt-38">
		<div class="relative sm:px-0 px-6">
			<img src="/images/function.png" class="border border-[3px] border-dashed rounded-2xl transform transition duration-300 hover:scale-110 cursor-pointer" width={970} height={920} alt="Function" />
		</div>
		<div class="flex flex-col mx-10 space-y-10 z-[2] text-right">
			<h1 class="sm:mt-0 mt-10 text-4xl font-bold leading-[54px]">
				Examine <span class="character-gradient">Move modules</span> and build your dream DeFi position
			</h1>
			<a href="https://app.seam.money/explorer/modules/mainnet/0x1">
				<button class="relative seam-button w-fit py-[18px] px-9 ml-30">Try It Now</button>
			</a>
		</div>
	</div>
</section>

<section class="dope-background2 lg:py-40 xss:py-6 px-6 mt-18 sm:mt-18">
	<div class="block lg:flex justify-between mx-auto max-w-7xl sm:mt-20 mt-32">
		<div class="flex flex-col space-y-10 sm:w-1/2">
			<h1 class="text-4xl font-bold leading-[54px]">Learn how our strategy pools are <span class="character-gradient">structured</span></h1>
			<p class="leading-9">
				We believe the future of DeFi is composability across pools, protocols, and chains. With Seam Money you can permissionlessly create custom vaults to hedge all your DeFi positions in one place.
			</p>
			<a href="https://docs.seam.money/">
			<button class="seam-button w-fit py-[18px] px-9">Documentation</button>
			</a>
		</div>
		<div class="relative flex justify-end max-w-[900px] p-0 sm:p-10 lg:mt-0 xss:mt-10">
			<img src="/images/pool.png" class="border border-[3px] border-dashed rounded-2xl transform transition duration-300 hover:scale-110 cursor-pointer" alt="Transaction Executor" />
		</div>
	</div>
	<!-- <div class="mt-48 h-0"> -->
	<!-- <Footer /> -->
	<!-- </div> -->
</section>

<style lang="postcss">
	.character-gradient {
		background: linear-gradient(
			245.29deg,
			#6dc1dc 13.32%,
			#a690fc 28.55%,
			#fc96bb 55.55%,
			#ffc397 84.12%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
	.client-card {
		@apply bg-white px-[38px] py-8 flex justify-center items-center;
		@apply transition hover:-translate-y-2 cursor-pointer duration-300;
		background: #ebe6fa;
		box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.2);
		border-radius: 16px;
	}
	.back-to-top-button {
		@apply flex items-center justify-center;
		width: 56px;
		height: 56px;
		background: #ebe6fa;
		box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.2);
		border-radius: 88px;
	}
	.seam-button{
		background-color: transparent;
		padding-right: 4rem;
		padding-left: 4rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		border-radius: 8px;
		color: white;
		border: dashed 3px  #ffffff;
	}
	.seam-button:hover{
  		background-color: #ffffff;
  		color: black;
	}
	.dope-background2 {
		width: 100%;
		background-image: 
		url("/static/images/background2.svg");
		background-repeat: no-repeat;
	}
	.dope-background {
		width: 100%;
		background-image: 
		url("/static/images/background.svg");
		background-repeat: no-repeat;
	}
	@media screen and (min-width: 10px) and (max-width: 480px) {
		.dope-background {
			background-image: 
			url("/static/images/background_scaled.svg");
			background-repeat: no-repeat;
		}
		.dope-background2 {
			background-image: url("/static/images/dope-background3_scaled.svg");
			background-repeat: no-repeat;
		}
	}
</style>
