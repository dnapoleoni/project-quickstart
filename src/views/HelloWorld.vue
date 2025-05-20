<template>
	<div class="grid gap-4 md:grid-cols-2">
		<Card title="Hello, crule world">
			<button class="rounded bg-blue-500 px-4 py-2 text-white" @click="store.increment">
				Number go up: {{ store.count }}
			</button>
		</Card>
	</div>
</template>

<script setup>
	import { useCounterStore } from '@/stores/counter';
	import Card from '@/components/ui/Card.vue';

	const store = useCounterStore();
</script>
