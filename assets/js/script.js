// const botton= document.getElementById("botton-scroll");
// const nav= document.getElementById("main-nav");

// const elem= botton.addEventListener('click',()=>{
//     nav.classList.toggle('main-nav-view')
// })

const showMenu= (toggleId,navId)=>{
    const toggle= document.getElementById(toggleId),
        nav= document.getElementById(navId);
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('botton-scroll','main-nav');

// const view= 
// if()