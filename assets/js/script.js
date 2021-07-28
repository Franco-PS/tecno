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


// document.body.style.backgroundColor = 'red'

// document.body.classList.add('red')

//declarando los estilos
// const styles = `
//     background:green;
//     color:blue;
//     margin-bottom:4rem;
// `
// document.getElementById('hola').setAttribute('style',styles)

//modificar
// document.documentElement.style.setProperty('--name','angel')

// leer variables css
// console.log(getComputedStyle(document.documentElement).getPropertyValue('--name'))