<template>
	<div v-if="!data || Object.keys(data).length === 0">
		<EmptyState />
	</div>
	<div v-else v-for="pokemon in data" :key="pokemon.name" class="col-10">
		<BtnList :pokeName="pokemon.name" @click="openModal(pokemon.name)" />
	</div>
	<ModalInfoPoke
		:modalOpen="showModal"
		:pokeSelect="infoPokemon"
		@closeModal="closeModal()" />
</template>
import EmptyStateVue from "../common/EmptyState.vue";

<script lang="ts">
import { defineComponent, ref } from "vue";

// Components
import BtnList from "../../components/buttons/BtnList.vue";
import ModalInfoPoke from "src/components/modals/ModalInfoPoke.vue";
import EmptyState from "../common/EmptyState.vue";

// Services
import { getOnePokeData } from "../../modules/pokelist/service/pokeList.service";

export default defineComponent({
	name: "PokeList",
	props: {
		data: {
			type: Array,
			required: true,
		},
	},
	components: {
		BtnList,
		ModalInfoPoke,
		EmptyState,
	},
	setup() {
		const showModal = ref(false);
		const selectedPokemon = ref("");
		const infoPokemon = ref({});

		const fetchPoke = async () => {
			try {
				const responseData = await getOnePokeData(selectedPokemon.value);
				infoPokemon.value = responseData;
			} catch (error) {
				console.error("Error al obtener pokedatos:", error);
			}
		};

		const openModal = (pokemon) => {
			selectedPokemon.value = pokemon;
			fetchPoke();
			showModal.value = true;
		};

		const closeModal = () => {
			selectedPokemon.value = "";
			showModal.value = false;
		};

		return {
			showModal,
			openModal,
			closeModal,
			selectedPokemon,
			fetchPoke,
			infoPokemon,
		};
	},
});
</script>
