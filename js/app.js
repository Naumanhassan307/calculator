

function getNum(num){
    
    const result = document.getElementById('inp');
    result.value += num; 
}
function clrbtn() {
    const result = document.getElementById('inp');
    result.value = ""; 
}
function ans() {
    const result = document.getElementById('inp');
    result.value = eval(result.value);   
}