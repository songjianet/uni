<template>
	<view class="content">
		recruit
		<tab-bar :role="'recruiter'" :current="current"></tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 1
			}
		}
	}
</script>

<style>
</style>
