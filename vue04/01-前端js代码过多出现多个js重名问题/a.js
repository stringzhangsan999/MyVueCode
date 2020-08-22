	var person ={};
	person.name='小红';
	person.age=18;
	person.gender='女';
	 
	if(flag){
		console.log(person);
		var flag=false	 //当全局变量很多时会出现重名问题出现问题, 会发现当我们在这里将flag设置为false那么小明的信息就打印不出来
	}
