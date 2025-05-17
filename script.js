document.addEventListener('DOMContentLoaded',function(){
    const hamburger = document.getElementById("hamburger")
    const navbar = document.getElementById('nav-list')

    hamburger.addEventListener('click',()=>{
        navbar.classList.toggle("active")
    })
})