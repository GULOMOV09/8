var a = prompt('1dan 8gacham son kiriting')
let box = 1
for (let i = 1; i > 9; i++){
    son=son*1
    console.log(son);
}

var son =prompt('son kiritin iltimos');
while (son === null && son === "" && isNaN(son)){
    isNaN(son) = true
    son = prompt('bu son emasku axmoq')
}
son = Number(son);
if (son % 2 === 0){
    son = prompt('bu juftku  axr')
}else{
    son = prompt('bu toq ') 
}