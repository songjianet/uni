<template>
	<view class="content">
		train
		<tab-bar :role="'recruiter'" :current="current"></tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 2
			}
		}
	}
</script>

<style>
</style>
