//Number 1.
function sum(arg1,arg2){
    if(arg1>arg2) {
        return arg1;
}else{
    return arg2;
}
}
var a = sum(2,4);
console.log(a);





//Number 2.
function maxOfThree(x,y,z){
    if(x>y&&x>z){
        return x;
    }else if(y>x&&y>z){
        return y;
    }else{
        return z;
    }
}
    var e = maxOfThree(2,4,8);
    console.log(e);

//Number 3.
function isVowel(arg1){
     if(arg1==='a'||arg1==='e'||arg1==='i'||arg1==='o'||arg1==='u'||arg1==='A'||arg1==='E'||arg1==='I'||arg1==='O'||arg1==='U'){
        return true;
     }else{
        return false;
     }
    }
     console.log(isVowel('a'));


//Number 4.
function sum(args){
    let s = 0;
    for(let i=0;i<args.length;i++){
        s+=args[i];
        }
        return s;
}
console.log(sum([1,2,3,4]));
function multiply(ar){
    let k= 1;
    for(let i=0;i<ar.length;i++){
        k*=ar[i];
    }
    return k;
}
console.log(multiply([1,2]));


//Number 5.
function reverse(str){
    let x=" ";
    for(let i=str.length;i>-1;i--){
            x+=str[i];
    }
    return x;
}
console.log(reverse("eden"));
//Number 6.
function longestFirst(arr1) {
    if(arr1.length===0){
        return 0;
    }
    let maxLen=0;
    for (let i = 0; arr1.length; i++) {
       if(arr1[i].length>arr1[i+1].length){
        maxLen=arr1[i].length;
       }
        return maxLen;
    }
}
console.log(longestFirst(["name", "denb", "kerrrir"]));
//Number 7.
function filterLongWords(arr,e){
    let s = arr.filter(a=>a.length>e);
    console.log(s);
}
filterLongWords(["sari","son"],3);
//Number 8.
function computeSumOfSquares(array){
    let o = array.map(d=>d*d);
    console.log(o);
}
computeSumOfSquares([1,2,3,4]);

//Number 9.
function printOddNumbers(arrr){
    let t = arrr.filter(p=>p%2!==0);
    console.log(t);
}
printOddNumbers([1,2,3,4,5]);

//Number 10.
function computeSumOfSquaresOfEvensOnly(aer){
    let k = aer.filter(o=>o%2===0).map(p=>p*p);
        console.log(k);
    }
    computeSumOfSquaresOfEvensOnly([2,3,8,7,4]);

//Number 11.
function sum2(arg1){
    let a = arg1.reduce((a,b)=>{
        return a+b;},0);
    return a;
}
console.log(sum2([2,4,8]));


