<template>
	<div class="btn-list q-my-xs q-pa-sm row">
		<q-btn
			flat
			:ripple="false"
			color="transparent"
			class="col-8"
			@click="handleClick"
			align="left">
			<p class="namePoke">{{ pokeName }}</p>
		</q-btn>
		<div class="col-2">
			<BtnFav
				:withText="false"
				:disable="false"
				:selected="seletedPoke"
				@click="updatePokemonName" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

// Components
import BtnFav from "./BtnFav.vue";

// Store
import store from "src/store/index";

export default defineComponent({
	name: "BtnList",
	props: {
		pokeName: {
			type: String,
			required: true,
		},
		onClick: Function as PropType<() => void>,
	},
	components: { BtnFav },
	setup(props) {
		const seletedPoke = ref(false);

		const handleClick = () => {
			if (props.onClick) {
				props.onClick();
			}
		};

		const updatePokemonName = () => {
			seletedPoke.value = true;
			store.commit("setPokemonName", props.pokeName);
		};

		return {
			handleClick,
			seletedPoke,
			updatePokemonName,
		};
	},
});
</script>

<style scoped lang="scss">
.btn-list {
	background: $btn-list-bgColor;
	color: $btn-list-font-normal;
	text-transform: initial;
	font-size: 22px;
	line-height: 26.4px;
	border-radius: 5px;
	justify-content: space-between;
}

.namePoke {
	text-transform: capitalize;
	text-align: left;
}
</style>
