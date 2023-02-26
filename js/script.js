let count = document.querySelectorAll(".stats h3");
console.log(count);
let statsSection = document.querySelector(".stats");
let started = false
window.onscroll = function(){
    if (window.scrollY >= statsSection.offsetTop) {
        if(!started){
            count.forEach((num)=> {
                Start(num)
            })
            started = true
        }
    }
}
function Start(e) {
    let goal = e.dataset.goal;
    console.log(goal)
    let counter = setInterval(()=>{
        e.textContent++;
        if (e.textContent ==  goal) {
            clearInterval(counter);
        }
    },2000/goal);
}
/*
let section = document.querySelector(".our-skills")
let spans = document.querySelectorAll(".skill ");
console.log(spans);
window.onscroll = function (){
    spans.forEach((span)=>{
        if (window.scrollY >= section.offsetTop -50) {
            span.style.width = span.dataset.width;
        }
    })
}
*/