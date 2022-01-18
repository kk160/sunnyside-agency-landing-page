const menuIcon = document.querySelector('#menu')
const menuNav = document.querySelector('#menuNav')
const closeBtn = document.querySelector('#close')

function openMenu(){
    menuNav.style.display = 'flex'
    menuIcon.style.display = 'none'
    closeBtn.style.display = 'inline'
}

function closeMenu(){
    menuNav.style.display = 'none'
    menuIcon.style.display = 'flex'
    closeBtn.style.display = 'none'
}

menuIcon.onclick = openMenu
closeBtn.onclick = closeMenu