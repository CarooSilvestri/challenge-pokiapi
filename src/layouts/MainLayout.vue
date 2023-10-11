<template>
	<q-layout view="lHh Lpr lFf">
		<q-page-container class="row justify-center items-center">
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "MainLayout",
});
</script>
