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
					<div class="border border-[3px] border-dashed rounded-2xl transform transition duration-300 hover:scale-110 cursor-pointer shadow-lg h-full block">
					<div class="flex justify-center">
						<div class="p-3 bg-white rounded-full shadow-lg inline-block -mt-8">
							<img src="/images/icon2.svg" alt="Icon2" />
						</div>
					</div>
					<div class="p-6">
						<h5 class="text-lg font-semibold mb-4">Made for Devs</h5>
						<p>
							View deployed Move modules from dapps or the aptos core library. Access parameters, data types, and call functions. Use the Seam Pass to access Sid∑wind∑r, a Move script executor
						</p>
					</div>
					</div>
				</div>
			
				<div class="mb-12 lg:mb-0">
					<div class="shadow-lg h-full block border border-[3px] border-dashed rounded-2xl transform transition duration-300 hover:scale-110 cursor-pointer">
					<div class="flex justify-center">
						<div class="p-3 bg-white rounded-full shadow-lg inline-block -mt-8">
							<img src="/images/icon4.svg" alt="Icon4" />
						</div>
					</div>
					<div class="p-6">
						<h5 class="text-lg font-semibold mb-4">Connect to Other Dapps</h5>
							<p>
								Tired of constantly switching between browser tabs to manage your DeFi positions? Open your favorite dapp directly from the dapp explorer window! 
							</p>
					</div>
					</div>
				</div>
			
				<div class="sm:mb-12 lg:mb-0">
					<div class="border border-[3px] border-dashed rounded-2xl transform transition duration-300 hover:scale-110 cursor-pointer shadow-lg h-full block">
					<div class="flex justify-center">
						<div class="p-1 bg-white rounded-full shadow-lg inline-block -mt-8">
							<img src="/images/icon3.svg" alt="Icon3" />
						</div>
					</div>
					<div class="p-6">
						<h5 class="text-lg font-semibold mb-4">Modular DeFi Position Builder</h5>
						<p>
							Track which liquidity pools you are in, validators you are staking with, and your overall risk to performance ratio. Build a composable position that combines any pool or derivative.
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
