function sum(val){
    let total =0;
    for(let i=0; i<val;i++){
        total +=i;
    }
    return total;
}

function findSetTime(){
    console.log(sum(100))
}
setTimeout(findSetTime,1000) // global function provided by js
console.log("Hello")