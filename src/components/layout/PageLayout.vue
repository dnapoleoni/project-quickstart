<template>
	<div class="bg-surface text-default min-h-screen font-sans">
		<header class="border-default border-b px-6 py-4">
			<h1 v-if="title" class="text-brand text-xl font-semibold">
				{{ title }}
			</h1>
		</header>

		<main class="p-6">
			<slot />
		</main>
	</div>
</template>

<script setup>
	defineProps({
		title: {
			type: String,
			default: '',
		},
	});
</script>
