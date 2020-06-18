<template>
	<view class="navigator">
		<view class="navigator-item" :class="current === item.id ? 'active-item' : ''" :style="{width: colWidth}" v-for="item in listMenus[role]" :key="item.id" @tap="switchTab(item)">
			<u-icon style="font-size: 30upx;margin-bottom: 10upx;" :name="item.icon"></u-icon>
			<view>{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	import { menu } from '@/env/menu.js';
	
	export default {
		props: {
			role: {
				type: String,
			    required: true
			},
			current: {
				type: Number,
				required: true
			}
		},
		
		data() {
			return {
				listMenus: menu,
				roleMenus: [],
				colWidth: 0
			}
		},
		
		mounted() {
			this.calcWidth()
		},
		
		methods: {
			calcWidth() {
				for (let i in this.listMenus) {
					if (i === this.role) {
						this.roleMenus = this.listMenus[i]
						this.colWidth = 100 / this.listMenus[i].length + '%'
					}
				}
			},
			
			switchTab(e){
				this.roleMenus.forEach(item => {
					if (item.id === e.id) {
						uni.redirectTo({
							url: item.path
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.navigator {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		border-top: 1upx solid #ddd;
		padding: 20upx 0;
		
		.navigator-item {
			float: left;
			height: 80upx;
		}
		
		.active-item {
			color: red;
		}
	}
</style>
