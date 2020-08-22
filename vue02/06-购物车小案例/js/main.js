const app = new Vue({
	el: '#app',
	data: {
	books: [
			{
				id: 1,
				name: '《算法导论》',
				date: '2006-9',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '《UNIX编程艺术》',
				date: '2006-2',
				price: 59.00,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				date: '2008-10',
				price: 39.00,
				count: 1
			},
			{
				id: 4,
				name: '《代码大全》',
				date: '2006-3',
				price: 128.00,
				count: 1
			},
		]
	},
	filters:{
		priceFilter(price){
			return '￥'+price.toFixed(2);
		}
	},
	methods:{
		increment(index){
			this.books[index].count++;
	  },
		decrement(index){
			this.books[index].count--;
		},
		removeItem(index){
			this.books.splice(index,1);
		}
		
		
  },
	computed:{
		totalPrice(){
			let totalPrice=this.books.reduce(function(pv,book){
				return pv+(book.price*book.count);
			},0);
		/* 	for (let book of this.books) {
				totalPrice+=book.price*book.count;
			} */
			return totalPrice;
		}
	}

})