const buttonAddBuckets = document.getElementById("add_buckets")
const titel = document.getElementById("titel_of_buckets")

const addBucketsHandler = () => {
    buttonAddBuckets.style.display="none"
    titel.style.display="block"

}



buttonAddBuckets.addEventListener("click",addBucketsHandler)