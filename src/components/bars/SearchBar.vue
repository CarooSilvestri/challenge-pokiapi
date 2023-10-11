<template>
	<q-input
		class="col-6 q-ma-md bg-white"
		filled
		v-model="textInput"
		@input="handleInput">
		<template v-slot:prepend>
			<q-icon name="search" />
		</template>
	</q-input>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "SearchBar",
	data() {
		return {
			textInput: "",
		};
	},
	methods: {
		handleInput() {
			console.log(this.textInput);
		},
	},
});
</script>
