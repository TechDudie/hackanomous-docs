<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import DarkModeSwitcher from "$lib/components/theme/dark-mode-switcher.svelte";
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import BookOpenIcon from "@lucide/svelte/icons/book-open";
	import GithubIcon from "@lucide/svelte/icons/github";
	import SparklesIcon from "@lucide/svelte/icons/sparkles";
	import RocketIcon from "@lucide/svelte/icons/rocket";
	import BrainIcon from "@lucide/svelte/icons/brain";
</script>

<nav class="bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
	<div class="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
		<div class="flex items-center gap-2">
			<img
				src="https://hackanomous-assets.vercel.app/assets/asset2.png"
				alt="Hackanomous logo"
				class="size-8 rounded-lg"
			/>

			<span class="font-bold text-lg">Hackanomous</span>
		</div>

		<div class="hidden md:flex items-center gap-6">
			<a href="/docs" class="text-muted-foreground hover:text-foreground text-sm">
				Documentation
			</a>
			<a href="/docs/welcome/faq" class="text-muted-foreground hover:text-foreground text-sm">
				FAQ
			</a>
			<a href="/docs/guides/guide" class="text-muted-foreground hover:text-foreground text-sm">
				Guides
			</a>
		</div>

		<div class="flex items-center gap-2">
			<DarkModeSwitcher />

			<Button
				variant="ghost"
				size="icon"
				href="https://github.com/SmartSparkCoding/hackanomous"
				target="_blank"
			>
				<GithubIcon class="size-4" />
			</Button>
		</div>
	</div>
</nav>

<section class="relative overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background"></div>

	<div
		class="absolute left-1/2 top-20 size-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-pulse"
	></div>

	<div class="relative mx-auto max-w-4xl px-4 py-32 text-center">

<img
	src="https://hackanomous-assets.vercel.app/assets/asset2.png"
	alt="Hackanomous logo"
	class="mx-auto mb-8 size-32 rounded-3xl shadow-lg animate-bounce"
/>

		<div
			class="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm"
		>
			<SparklesIcon class="size-4 text-primary" />
			Hack Club YSWS Programme
		</div>

		<h1 class="text-5xl font-bold tracking-tight sm:text-7xl">
			BUILD AI.
			<span class="text-primary">
				GET PRIZES.
			</span>
		</h1>

		<p class="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg sm:text-xl">
			Hackanomous is where teenagers design, build, and ship
			AI-powered projects. Learn, create, and earn rewards for your work.
		</p>


		<div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

			<Button size="lg" href="/docs" class="gap-2">
				Start Building
				<ArrowRightIcon class="size-4" />
			</Button>

			<Button
				variant="outline"
				size="lg"
				href="/docs/welcome/faq"
			>
				Read FAQ
			</Button>

		</div>

	</div>
</section>

<section class="border-t py-20">

	<div class="mx-auto max-w-5xl px-4">

		<div class="grid gap-6 md:grid-cols-3">

			<div class="rounded-xl border p-6 transition hover:shadow-lg">
				<BrainIcon class="mb-4 size-8 text-primary" />

				<h2 class="text-xl font-semibold">
					Learn AI
				</h2>

				<p class="text-muted-foreground mt-2">
					Explore artificial intelligence and machine learning by actually building things.
				</p>
			</div>


			<div class="rounded-xl border p-6 transition hover:shadow-lg">

				<RocketIcon class="mb-4 size-8 text-primary" />

				<h2 class="text-xl font-semibold">
					Ship Projects
				</h2>

				<p class="text-muted-foreground mt-2">
					Turn your ideas into real software, hardware, and tools that solve problems.
				</p>

			</div>


			<div class="rounded-xl border p-6 transition hover:shadow-lg">

				<SparklesIcon class="mb-4 size-8 text-primary" />

				<h2 class="text-xl font-semibold">
					Earn Rewards
				</h2>

				<p class="text-muted-foreground mt-2">
					Submit your work, earn Bolts, and unlock exciting rewards.
				</p>

			</div>

		</div>

	</div>

</section>

<section class="bg-muted/40 border-t py-20">

	<div class="mx-auto max-w-4xl px-4 text-center">

		<h2 class="text-3xl font-bold">
			How Hackanomous works
		</h2>

		<p class="text-muted-foreground mt-3">
			From your first idea to your finished project.
		</p>


		<div class="mt-10 grid gap-4 md:grid-cols-4">

			{#each [
				["01", "Inspire", "Create an idea"],
				["02", "Build", "Make your project"],
				["03", "Ship", "Share your work"],
				["04", "Reward", "Earn Bolts"]
			] as item}

			<div class="rounded-xl border bg-background p-5">

				<div class="text-primary text-3xl font-bold">
					{item[0]}
				</div>

				<h3 class="mt-2 font-semibold">
					{item[1]}
				</h3>

				<p class="text-muted-foreground text-sm">
					{item[2]}
				</p>

			</div>

			{/each}

		</div>

	</div>

</section>

<section class="border-t py-20">

	<div class="mx-auto max-w-3xl px-4 text-center">

		<h2 class="text-3xl font-bold">
			Ready to build something amazing?
		</h2>

		<p class="text-muted-foreground mt-4">
			Check out the documentation and start your Hackanomous journey.
		</p>

		<div class="mt-8">

			<Button size="lg" href="/docs">
				Open Documentation
			</Button>

		</div>

	</div>

</section>
