<template>
	<q-dialog
		:model-value="modalOpen"
		@update:model-value="$emit('update:modalOpen', $event)">
		<q-card class="modal-content">
			<q-card-section class="q-pa-none bkg text-right">
				<q-btn
					round
					color="white"
					icon="close"
					text-color="black"
					size="sm"
					:ripple="false"
					class="q-mt-md q-mr-md"
					@click="$emit('closeModal')" />
				<div class="text-center">
					<q-img :src="setImgUrl()" style="height: 180px; width: 180px" />
				</div>
			</q-card-section>

			<q-card-section class="q-px-lg q-py-md">
				<p class="point-information q-py-sm te">
					<strong>Name: </strong> {{ pokeSelect.name }}
				</p>
				<p class="point-information q-py-sm">
					<strong>Weight: </strong> {{ pokeSelect.weight }}
				</p>
				<p class="point-information q-py-sm">
					<strong>Height: </strong> {{ pokeSelect.height }}
				</p>
				<p class="point-information q-py-sm">
					<strong>Types: </strong>
					<span v-for="(details, type) in pokeSelect.types" :key="type">
						{{ details.type.name }}
						<span v-if="type !== pokeSelect.types.length - 1">, </span>
					</span>
				</p>
			</q-card-section>

			<q-card-actions align="center" class="d-flex q-mb-md row justify-evenly">
				<div>
					<BtnAction
						txt="Share to my friends"
						:withIcon="false"
						:disable="true"
						@click="copylink" />
					<p v-if="copied" class="text-center">Copiado!</p>
				</div>
				<BtnFav :withText="false" :selected="isFaved" :disable="false" />
			</q-card-actions>
		</q-card>
	</q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";

// Components
import BtnAction from "../buttons/BtnAction.vue";
import BtnFav from "../buttons/BtnFav.vue";

// Utils
import { copyToClipboard } from "quasar";

export default defineComponent({
	name: "ModalInfoPoke",
	components: { BtnAction, BtnFav },
	props: {
		modalOpen: {
			type: Boolean,
			required: true,
		},
		pokeSelect: {
			type: Object,
			required: true,
		},
		isFaved: {
			modalOpen: {
				type: Boolean,
				required: true,
			},
		},
	},
	setup(props) {
		const copied = ref(false);

		const setImgUrl = () => {
			try {
				return props.pokeSelect.sprites.front_default;
			} catch {
				console.log("no hay imagen");
				return;
			}
		};
		const copylink = () => {
			copyToClipboard("Mira mi pokemon favorito es " + props.pokeSelect.name);
			copied.value = true;
		};
		return {
			copylink,
			copied,
			setImgUrl,
		};
	},
});
</script>

<style>
.modal-content {
	width: 50%;
	border-radius: 5px;
}

@media screen and (max-width: 500px) {
	.modal-content {
		width: 100%;
	}
}
.bkg {
	background-image: url("../../../public/bkg.png");
	background-position: center;
	background-repeat: none;
	background-size: cover;
	width: 100%;
	height: 200px;
}

.point-information {
	border-bottom: 1px solid #e8e8e8;
	text-transform: capitalize;
}
</style>
