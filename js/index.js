const buttonAddBuckets = document.getElementById("add_buckets")
const titel = document.getElementById("titel_of_buckets")
const addInput =document.getElementById("input_titel")
const svgAddInput= document.getElementById("svg_add_titel")

let titels = JSON.parse(localStorage.getItem("titels"));
const addBucketsHandler = () => {
    buttonAddBuckets.style.display="none"
    titel.style.display="block"
    
}
const addTitelHandler = () => {
    const task =addInput.value;
    const titel = {
        tasktitel:task;
    }
    if(titel){
        titels.push(titel)
        addInput.value ="";
    }
}
const showalert = () => {
    
}
svgAddInput.addEventListener("click",addTitelHandler)
buttonAddBuckets.addEventListener("click",addBucketsHandler)