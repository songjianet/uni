<template>
	<view class="content">
		my
		<tab-bar :role="'recruiter'" :current="current"></tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 4
			}
		}
	}
</script>

<style>
</style>
