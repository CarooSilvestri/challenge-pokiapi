<template>
	<q-input
		class="col-6 q-ma-md bg-white"
		filled
		v-model="inputText"
		@input="handleInput">
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

		const handleInput = () => {
			console.log(inputText);
		};
		return {
			inputText,
			handleInput,
		};
	},
});
</script>
