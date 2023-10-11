<template>
	<div class="col-xs-10 col-md-6 q-pt-md">
		<div v-if="!pokeList || Object.keys(pokeList).length === 0">
			<LoadState />
		</div>
		<div v-else>
			<q-header class="bg-transparent">
				<SearchBar @searchPokemon="searchPokemonByName" />
			</q-header>

			<q-page-container class="col-8 no-spacing">
				<PokeList :data="pokeList" />
			</q-page-container>

			<q-footer
				elevated
				class="bg-white q-py-sm text-center row justify-center q-gutter-md">
				<BtnAction
					txt="All"
					withIcon
					:disable="btnActionSelected"
					@click="handleClickBtnSelection" />
				<BtnFav
					withText
					@click="handleClickBtnSelection"
					:disable="btnFavSelected"
					:selected="btnFavSelected" />
			</q-footer>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

// Components
import SearchBar from "src/components/bars/SearchBar.vue";
import PokeList from "src/components/list/PokeList.vue";
import LoadState from "src/components/common/LoadState.vue";
import BtnAction from "src/components/buttons/BtnAction.vue";
import BtnFav from "src/components/buttons/BtnFav.vue";

// Services
import { getDataFromPokeApi } from "../service/pokeList.service";

export default defineComponent({
	name: "PokeListPage",
	components: {
		SearchBar,
		PokeList,
		LoadState,
		BtnAction,
		BtnFav,
	},
	setup() {
		const pokeList = ref({});
		const btnActionSelected = ref(true);
		const btnFavSelected = ref(false);
		const filteredList = ref({});

		const fetchPokeData = async () => {
			try {
				const responseData = await getDataFromPokeApi();
				pokeList.value = responseData;
			} catch (error) {
				console.error("Error al obtener pokedatos:", error);
			}
		};

		const handleClickBtnSelection = () => {
			btnActionSelected.value = !btnActionSelected.value;
			btnFavSelected.value = !btnFavSelected.value;
			if (btnActionSelected.value) {
				fetchPokeData();
				return pokeList;
			}
			if (btnFavSelected.value) {
				pokeList.value = Object.values(pokeList.value).filter((pokemon) => {
					return pokemon.name === "pikachu";
				});
			}
		};

		const searchPokemonByName = (value: string) => {
			filteredList.value = Object.values(pokeList.value).filter((pokemon) => {
				return pokemon.name === value;
			});
			pokeList.value = filteredList.value;
		};

		onMounted(async () => {
			await fetchPokeData();
		});

		return {
			pokeList,
			fetchPokeData,
			btnActionSelected,
			btnFavSelected,
			handleClickBtnSelection,
			searchPokemonByName,
		};
	},
});
</script>

<style>
.no-spacing {
	padding-top: 0 !important;
}
</style>
