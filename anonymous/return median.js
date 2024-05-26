let a=[3,5,8,6]
let b=[1,4,7,2]
let c=a.concat(b)
let d=c.sort()
let n=d.length
let medianIs=function(d){
  if(n %3 ==0 ){
    return ((n+1)/2)
  }
if (n%2==0){
  return(((n/2)+((n/2)+1))/2)
}
}(d);
console.log(Math.ceil(medianIs))