<template>
	<view class="content">
		colleague
		<tab-bar :role="'recruiter'" :current="current"></tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 3
			}
		}
	}
</script>

<style>
</style>
