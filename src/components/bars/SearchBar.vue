<template>
	<q-input
		class="col-6 q-ma-md q-px-md bg-white"
		standout
		borderless
		v-model="inputText"
		@change="$emit('searchPokemon', inputText)">
		<template v-slot:prepend>
			<q-icon name="search" />
		</template>
	</q-input>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "SearchBar",
	setup() {
		const inputText = ref("");

		return {
			inputText,
		};
	},
});
</script>

<style>
.input {
	border-radius: 5px;
}
</style>
