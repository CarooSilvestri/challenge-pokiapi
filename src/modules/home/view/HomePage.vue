<template>
	<q-page class="q-gutter-md row justify-center items-center">
		<div class="col-8 text-center">
			<q-img
				src="/public/pikachu-saying-hi.png"
				alt="pikachu saying hi!"
				class="img-ppal" />

			<div>
				<h1>Welcome to Pokédex</h1>
				<h4>
					The digital encyclopedia created by Professor Oak is an invaluable
					tool to Trainers in the Pokémon world.
				</h4>
			</div>
			<BtnAction
				txt="Get started"
				to="/list"
				:withIcon="false"
				:disable="true" />
		</div>
	</q-page>
</template>

<script lang="ts">
import BtnAction from "src/components/buttons/BtnAction.vue";

import { defineComponent } from "vue";

export default defineComponent({
	name: "HomePage",
	components: {
		BtnAction,
	},
});
</script>

<style scoped>
.img-ppal {
	width: 325px;
	height: 288px;
}
</style>
