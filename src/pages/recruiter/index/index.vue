<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<tab-bar :role="'recruiter'" :current="current"></tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				current: 0
			}
		},
		onLoad() {

		}
	}
</script>

<style>
</style>
