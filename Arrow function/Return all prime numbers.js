const primeNum= num =>{
    for (let i=2 ;i<num;i++) {
        if(num % i === 0)
            return false;
}
return num !== 1;
};
let Array=[1,2,3,4,5,6,7,8,9];
const primeNumber =Array.filter(primeNum);
console.log(primeNumber);
