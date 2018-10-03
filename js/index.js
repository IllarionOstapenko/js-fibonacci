const num = parseFloat(prompt('Enter Fibonacci number'));

alert("Fibonacci number recursive: " + fibRecursive(num));
alert("Fibonacci number cycle: " + fibCycle(num));

function fibRecursive(num){
    if(num <= 1) { 
       return num;
    }
    return fibRecursive(num - 1) + fibRecursive(num - 2);
}

function fibCycle(num) {
    let fibFirst = 1;
    let fibSecond = 1;
    for(let i = 3; i <= num; i++) {
        let fibNext = fibFirst + fibSecond;
        fibFirst = fibSecond;
        fibSecond = fibNext;
        }
        return fibSecond;
}