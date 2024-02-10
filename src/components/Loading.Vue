<template>
	<div v-if="isLoading & loading1" className="loading">
		<img src="../assets/gifs/spinner.gif" />
	</div>
</template>

<script>
export default {
	name: 'Loading',
	props: {
		isLoading: Boolean
	},
	data() {
		return {
			loading1: true
		}
	},
	mounted() {
		// Simulate a delay to represent the rendering time of your Vue application
		setTimeout(() => {
			// Set loading to false after the delay to indicate that the application has finished rendering
			this.loading1 = false
		}, 2000) // Adjust the timeout duration as needed
	}
}
</script>

<style scoped>
.loading {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: white
	display: flex;
	align-items: center;
	justify-content: center;
  z-index:1000;
}
</style>
