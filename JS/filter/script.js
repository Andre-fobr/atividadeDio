function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 !== 0;
}

const meuArray = [1, 2, 4, 23, 30, 55, 67];

console.log(filtraPares(meuArray));