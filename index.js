//目标：输出9*9乘法表
for(var i=1;i<10;i++){//行数
		    var att="";
		    for(var j=0;j<i;j++){//每行个数
		       
		  	   att=att+" "+i+"*"+(j+1)+"="+i*(j+1);
		    }
		    console.log(att);
        }

//第二题
for(var i=1;i<=20;i++){
	if(i%2==0){
		console.log(i+"是偶数。");
	}else{
		console.log(i+"是奇数。");
	}
}
