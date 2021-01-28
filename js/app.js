

function getNum(num){
    console.log(num);
    const result = document.getElementById('inp');
    result.value += num; 
}
function clrbtn() {
    const result = document.getElementById('inp');
    result.value = ""; 
}