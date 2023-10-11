<template>
	<div class="content">
		<q-img src="/public/Loader.png" alt="loading..." class="rotate" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "LoadState",
});
</script>

<style scoped>
.content {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
.rotate {
	animation: spin 2s linear infinite;
	width: 106px;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
