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
<section class="dope-background py-48 mt-32">
	<div class="flex justify-between mx-auto space-x-40 max-w-7xl">
		<div class="flex flex-col w-1/2">
			<h1 class="text-5xl font-bold leading-[64px]">
				<span class="character-gradient">Composable</span> DeFi Products on Aptos
			</h1>
			<a href="https://app.seam.money">
				<button class="seam-button mt-8 w-fit text-lg">Launch App</button>
			</a>
		</div>
		<div class="relative flex items-center justify-center w-96 z-[99]">
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
<section class="py-20">
	<div class="max-w-screen-xl mx-auto">
		<div class="flex flex-col items-center">
			<h1 class="text-4xl font-extrabold">Supported Protocols</h1>
			<p class="mt-2 font-light">We can easily add your favorite protocol, pool, or dapp</p>
		</div>
		<div class="flex justify-between mt-32 space-x-24">
			
			<img
				src="/images/argologo.svg"
				class="transform transition duration-300 hover:scale-125 cursor-pointer"
				alt="Argo"
			/>
			<img
				src="/images/ditto.svg"
				class="transform transition duration-300 hover:scale-125 cursor-pointer"
				alt="Ditto"
			/>
			<img
				src="/images/hippo.png"
				class="transform transition duration-300 hover:scale-125 cursor-pointer h-16"
				alt="Hippo"
			/>
			<img
				src="/images/tsunami.svg"
				class="transform transition duration-300 hover:scale-125 cursor-pointer h-20"
				alt="Tsunami"
			/>
			<img
				src="/images/kana.svg"
				class="transform transition duration-300 hover:scale-125 cursor-pointer"
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

<section class="py-40">
	<div class="flex justify-between mx-auto py-3 max-w-7xl">
		<div class="relative">
			<img src="/images/dapp-explorer.png" class="shadow rounded-2xl max-w-full h-auto align-middle" alt="Dapp Explorer" />
		</div>
		<div class="flex flex-col mx-10 space-y-10 z-[2]">
			<h1 class="text-4xl font-bold leading-[54px]">Discover dapps on Aptos through the Seam <span class="character-gradient">Explorer</span></h1>
			<p class="leading-9">
				We believe the world is more beautiful as each person gets better. We believe the world is
				more beautiful as each person gets better. Person gets better.
			</p>
			<a href="https://app.seam.money/explorer">
			<button class="seam-button w-fit py-[18px] px-9">Try It Now</button>
			</a>
		</div>
	</div>
</section>

<section class="relative py-20">
	<div class="mx-auto max-w-7xl">
		<div class="relative flex justify-between">
			<div
				class="w-[480px] h-[280px] flex items-center justify-center absolute"
			>
				<img src="/images/function.png" class="border border-[3px] border-dashed rounded-2xl transform transition duration-300 hover:scale-110 cursor-pointer" width={900} height={900} alt="Function" />
			</div>
			<div />
			<div class="flex flex-col items-center w-3/6 mt-10 space-y-7 z-[2]">
				<h1 class="text-4xl font-bold leading-[64px] text-right">
					Examine <span class="character-gradient">Move modules</span> and build your dream DeFi position
				</h1>
			</div>
		</div>
	</div>
</section>

<section class="dope-background2 py-40 mt-20">
	<div class="flex justify-between mx-auto space-x-24 max-w-7xl">
		<div class="flex flex-col space-y-10 w-1/2 z-[2]">
			<h1 class="text-4xl font-bold leading-[64px]">Learn how our strategy pools are <span class="character-gradient">structured</span></h1>
			<p class="leading-9">
				We believe the future of DeFi is composability across pools, protocols, and chains. With Seam Money you can permissionlessly create custom vaults to hedge all your DeFi positions in one place.
			</p>
			<a href="https://docs.seam.money/">
			<button class="seam-button w-fit py-[18px] px-9">Documentation</button>
			</a>
		</div>
		<div class="relative flex justify-end w-[900px]">
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
	.dope-background {
		background-image: 
		url("/static/images/background.svg");
	}
	.dope-background2 {
		background-image: 
		url("/static/images/background2.svg");
	}
</style>
