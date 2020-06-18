<script>
	export default {
		onLaunch: function(e) {
			console.log(e) // 拿场景值
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import 'uview-ui/index.scss';
	@import '@/assets/scss/default.scss'
	/*每个页面公共css */
</style>
