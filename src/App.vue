<template>
	<PageLayout :title>
		<router-view />
	</PageLayout>
</template>

<script setup>
	import PageLayout from '@/components/layout/PageLayout.vue';
	import { useRoute } from 'vue-router';
	import { computed } from 'vue';

	const route = useRoute();
	const title = computed(() => route.name);
</script>
