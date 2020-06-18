<template>
	<view class="wrap">
		<u-row>
			<u-col :span="4">
				111
			</u-col>
		</u-row>
	</view>
</template>

<script>
	import { menu } from '@/env/menu.js';
	
	export default {
		props: {
			isOpen: {
				type: Boolean,
				default: false
			},
			role: {
				type: String,
			    required: true
			}
		},
		
		data() {
			return {
				listMenus: menu
			}
		},
		
		mounted() {
			console.log(this.listMenus)
		}
	}
</script>

<style>
</style>
