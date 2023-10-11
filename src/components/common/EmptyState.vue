<template>
	<div class="content">
		<h1>Ho-oh!</h1>
		<h4>You look lost on your journey!</h4>
		<BtnAction to="/" :disabled="true" :withIcon="false" txt="Go back home" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import BtnAction from "../buttons/BtnAction.vue";

export default defineComponent({
	name: "EmptyState",
	components: { BtnAction },
});
</script>

<style scoped>
.content {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
</style>
