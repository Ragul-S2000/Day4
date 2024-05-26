let a=[3,5,4,6]
let b=[1,4,5,6]
let c=a.concat(b)
let d=c.sort()
let n=d.length
let findDuplicates=(function(){
return d.filter(function(acc,value,index){
return d.indexOf(acc)==value;
});
});
console.log(findDuplicates(d));