<template>
	<q-btn
		rounded
		flat
		class="spacing-btn"
		:ripple="false"
		:to="to"
		:class="disable ? 'btn-action' : 'disable-colors'">
		<q-icon v-if="withIcon" name="list" class="q-mr-sm" />
		<strong>{{ txt }}</strong>
	</q-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "BtnAction",
	props: {
		txt: {
			type: String,
			required: true,
		},
		to: {
			type: String,
			required: false,
		},
		withIcon: {
			type: Boolean,
			required: true,
		},
		disable: {
			type: Boolean,
			required: true,
		},
	},
});
</script>

<style scoped lang="scss">
.btn-action {
	background: $btn-action-bgcolor;
	color: $btn-action-font-color;
	text-transform: initial;

	&:active {
		background: $btn-action-pressed;
	}
}

.disable-colors {
	background: $btn-action-disabled;
	color: white;
	text-transform: initial;
}
</style>
