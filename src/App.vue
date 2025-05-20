<template>
	<Page :title>
		<router-view />
	</Page>
</template>

<script setup>
	import Page from '@/components/layout/PageLayout.vue';
	import { useRoute } from 'vue-router';
	import { computed } from 'vue';

	const route = useRoute();
	const title = computed(() => route.name);
</script>
