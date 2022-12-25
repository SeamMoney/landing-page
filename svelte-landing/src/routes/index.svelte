<script lang="ts">
	import CardList from "./Cards.svelte";
	import Card from "../lib/components/Card.svelte";
	import { onMount } from "svelte";

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
		globalThis.cards = cards;
		showcase = cards[23];
		basics = cards.slice(0, 6);
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

	const clientsList = [
		['Airbnb'],
		['Google', 'BookMyShow'],
		['Microsoft', 'FedEx', 'Walmart'],
		['OYO', 'OLA'],
		['Amazon']
	]

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
<section class="dope-background py-48 mt-36">
	<div class="flex justify-between mx-auto space-x-40 max-w-7xl">
		<div class="flex flex-col w-1/2">
			<h1 class="text-5xl font-bold leading-[84px]">
				<span class="character-gradient">Composable</span> DeFi Products on Aptos
			</h1>
			<a href="https://app.seam.money">
				<button class="seam-button mt-8 w-fit text-lg">Launch App</button>
			</a>
		</div>
		<div class="relative flex items-center justify-center w-96">
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
	<div class="flex flex-col items-center">
		<h1 class="text-4xl font-extrabold">Supported Protocols</h1>
		<p class="mt-2 font-light">We can easily add your favorite protocol or pool</p>
	</div>
	<div class="flex items-center justify-center mt-20 space-x-6">
		{#each clientsList as clients}
			<div class="flex flex-col space-y-6">
				{#each clients as client}
					<div class="client-card">
						<img src={`/images/clients/${client} Logo.svg`} alt={client} />
					</div>
				{/each}
			</div>
		{/each}
	</div>
</section>

<section class="relative py-20">
	<div class="mx-auto max-w-7xl">
		<div class="relative flex justify-between">
			<div
				class="bg-secondary w-[263px] h-[263px] rounded-full flex items-center justify-center absolute -left-[5%]"
			>
				<img src="/images/objects/Other 07.png" width={182} height={182} alt="Other 07" />
			</div>
			<div
				class="absolute w-[51px] h-[51px] rounded-full flex items-center justify-center bottom-0 left-[15%] bg-secondary"
			>
				<img src="/images/objects/Ball.png" width={33} height={33} alt="Ball" />
			</div>
			<div />
			<div class="flex flex-col items-center w-3/4 space-y-7 z-[2]">
				<div class="relative">
					<div
						class="absolute w-[43px] h-[43px] bg-secondary rounded-full left-[35%] top-[65%] z-[1]"
					/>
					<img
						src="/images/objects/Other 02.png"
						width={124}
						height={124}
						alt="Other 02"
						class="relative z-10"
					/>
				</div>
				<h1 class="text-4xl font-bold leading-[84px] text-right">
					You are one step away from discovering your next <span class="character-gradient"
						>Character</span
					> in Pixi-World
				</h1>
			</div>
		</div>
	</div>
</section>

<section class="py-52">
	<div class="flex justify-between mx-auto space-x-24 max-w-7xl">
		<div class="relative w-1/2">
			<img src="/images/Gradient Ball.png" width={448} height={448} alt="Gradient Ball" />
			<img
				src="/images/objects/Other 19.png"
				width={177}
				height={177}
				alt="Other 19"
				class="absolute -top-20 -left-12"
			/>
			<img
				src="/images/objects/Other 10.png"
				width={120}
				height={120}
				alt="Other 10"
				class="absolute -top-20 right-40"
			/>
			<img
				src="/images/characters/Ikbal 5.png"
				width={413}
				height={413}
				alt="Ikbal 5"
				class="absolute -left-4 top-32"
			/>
			<img
				src="/images/objects/Other 18.png"
				width={232}
				height={232}
				alt="Other 18"
				class="absolute top-32 right-16"
			/>
		</div>
		<div class="flex flex-col space-y-10 w-1/2 z-[2]">
			<h1 class="text-4xl font-bold leading-[84px]">Discover Characters in Pixi-World</h1>
			<p class="leading-9">
				We believe the world is more beautiful as each person gets better. We believe the world is
				more beautiful as each person gets better. Person gets better.
			</p>
			<button class="w-fit py-[18px] px-9">Try It Now</button>
		</div>
	</div>
</section>

<section class="z-[2]">
	<div class="flex justify-between mx-auto space-x-24 max-w-7xl z-[99]">
		<CardList>
			{#if isLoading}
				loading...
			{:else}
				{#each basics as card, id}
					<Card
						name={card.name}
						img={card.images.large}
						number={card.number}
						supertype={card.supertype}
						subtypes={card.subtypes}
						rarity={card.rarity}
					/>
				{/each}
			{/if}
		</CardList>
	</div>
</section>

<section class="py-40">
	<div class="flex justify-between mx-auto space-x-24 max-w-7xl">
		<div class="flex flex-col space-y-10 w-1/2 z-[2]">
			<h1 class="text-4xl font-bold leading-[84px]">Discover Characters in Pixi-World</h1>
			<p class="leading-9">
				We believe the world is more beautiful as each person gets better. We believe the world is
				more beautiful as each person gets better. Person gets better.
			</p>
			<button class="w-fit py-[18px] px-9">Try It Now</button>
		</div>
		<div class="relative flex justify-end w-1/2">
			<img src="/images/Gradient Ball.png" width={448} height={448} alt="Gradient Ball" />
			<img
				src="/images/objects/Other 20.png"
				width={169}
				height={169}
				alt="Other 20"
				class="absolute left-32 -top-10"
			/>
			<img
				src="/images/objects/Other 19.png"
				width={158}
				height={158}
				alt="Other 19"
				class="absolute bottom-0 left-20"
			/>
			<img
				src="/images/characters/Marni 3.png"
				width={537}
				height={537}
				alt="Marni 3"
				class="absolute -bottom-1/3 left-28"
			/>
			<img
				src="/images/objects/Other 05.png"
				width={179}
				height={179}
				alt="Other 05"
				class="absolute -right-20 top-[30%]"
			/>
		</div>
	</div>
</section>

<div class="flex justify-end w-full px-10 py-12 mx-auto max-w-7xl">
	<div class="flex flex-col items-center justify-center space-y-2">
		<!-- <button class="back-to-top-button" on:click={scrollToTop}>
			<img src="/images/arrow.svg" alt="Arrow icon" width={16} height={16} />
		</button>
		<p class="text-center">Back to top</p> -->
	</div>
</div>

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
</style>
