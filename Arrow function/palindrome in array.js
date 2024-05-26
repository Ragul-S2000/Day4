const palinIn= str=>{
    str = str.split(',')
    let j = str . length-1;
    for(i=0;i<str.length/2;i++){
        if(str[i] !== str[j]){
        return false;
    }
    j--
}
return str.join(' ');
}
let arr=['racecar','nitin','rama'];
let palinDrome=arr.map(palinIn);
console.log(palinDrome.join('\n'));