<template>
	<q-btn
		:round="!withText"
		:rounded="withText"
		flat
		:class="[withText ? 'spacing-btn' : '', selected ? 'selected' : 'btn-star']"
		size="md"
		:ripple="{ color: 'yellow' }"
		@click="handleClick">
		<q-icon
			name="fa-solid fa-star"
			:class="[withText ? 'q-mr-sm' : '', selected ? 'selected' : '']" />
		<span v-if="withText" class="q-mr-sm">
			<p><strong>Favorites</strong></p>
		</span>
	</q-btn>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: "BtnFav",
	props: {
		withText: {
			type: Boolean,
			required: true,
		},
		disable: {
			type: Boolean,
			required: true,
		},
		selected: {
			type: Boolean,
			required: true,
		},
		onClick: Function as PropType<() => void>,
	},
	setup(props) {
		const handleClick = () => {
			if (props.onClick) {
				props.onClick();
			}
		};
		return {
			handleClick,
		};
	},
});
</script>

<style scoped lang="scss">
.btn-star {
	background: $star-color-inactive;
	color: white;
}
.selected {
	background: white;
	color: $star-color-active;
}
</style>
