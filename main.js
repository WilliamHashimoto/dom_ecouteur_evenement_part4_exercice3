// //1
// document.getElementsByTagName('h1')[0].addEventListener('click', (e)=>{
//     e.target.classList.add("text-blue");
// });

// //2
// document.getElementsByTagName('h3')[0].addEventListener('dblclick', (e)=>{
//     e.target.classList.add("text-error");
// });

// //3

//1
let h1 = document.querySelector('h1');
h1.addEventListener('click', () => {
    h1.setAttribute("class", "text-blue");
})

//2
let h3 = document.querySelector('h3');
h3.addEventListener("dblclick", (e) => {
    e.target.classList.add("text-error")
})

//3
let p = document.querySelector('p');
p.addEventListener('click', (e) => {
    e.target.classList.toggle("text-style");
})

//4
let p2 = document.querySelectorAll('p')[1];
let p2Arr = Array.from(p2.children);

p2Arr.forEach(element => {
    element.addEventListener("click", (e)=>{
        e.target.classList.toggle("bolder");
    })
});

//5
let p3 = document.querySelectorAll('p')[2]
let spanArr = Array.from(p3.children)

spanArr.forEach(el => {
    el.addEventListener("click", () => {
        spanArr.forEach(el => {
            if (el.className = "bolder-red") {
                el.classList.remove("bolder-red")
            }
        });
        el.classList.add('bolder-red')
    })
});