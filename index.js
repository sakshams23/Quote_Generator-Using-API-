//Shree Ganeshaye Namah
const qset=document.getElementById("joke"),
btn=document.getElementsByClassName("button");

let getQuotes = () => {
    qset.classList.remove("fade");
    fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then( item =>{
        qset.textContent =`" ${item.quote} "`;
        qset.classList.add("fade");
    });
    //{id: 1, quote: 'Your heart is the size of an ocean. Go find yourself in its hidden depths.', author: 'Rumi'}
}
getQuotes();

    