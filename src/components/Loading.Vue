<template>
	<div v-if="isLoading" className="loading">
		<img src="../assets/gifs/spinner.gif" />
	</div>
</template>

<script>
export default {
	name: 'Loading1',
	props: {
		isLoading: Boolean
	},
	data() {
		return {
			loading1: true
		}
	},
	
}
</script>

<style scoped>
.loading {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: white;
	display: flex;
	align-items: center;
	justify-content: center;
  	z-index:1000;
}
</style>
