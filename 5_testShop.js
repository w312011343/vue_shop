var app = new Vue({
	el:'#app',
	data:{
		list:[
			{
				id:1,
				name:'iphone 7',
				price:6188,
				count:1,
				disableFlag:true
			},
			{
				id:2,
				name:'ipad pro',
				price:5888,
				count:1,
				disableFlag:true
			},
			{
				id:3,
				name:'MacBook Pro',
				price:21488,
				count:1,
				disableFlag:true
			}
		]
	},
	methods:{
		// 减少数量
		reduceFn:function(index){
			var self = this;
			var item = self.list[index];
			if (item.count === 1) {
				return;
			}
			item.count--;
			if (item.count <= 1) {
				item.disableFlag = true
			}
		},
		// 增加数量
		addFn:function(index){
			var self = this;
			var item = self.list[index];
			item.count++;
			if (item.count > 1) {
				item.disableFlag = false;
			}
			
		},
		// 减少货物
		removeList:function(index){
			var self = this;
			self.list.splice(index,1);
		},
		// 增加货物
		addList:function(){
			var self = this;
			var len = self.list.length;
			self.list.push({
				id:len+1,
				name:'MacBook Pro',
				price:21488,
				count:1,
				disableFlag:true
			});
		}
	},
	computed:{
		total:function(){
			var num = 0;
			var self = this;
			for(var i = 0;i<self.list.length;i++){
				num+=self.list[i].price*this.list[i].count;
			}
			return parseFloat(num).toFixed(3);
		}
	}
});