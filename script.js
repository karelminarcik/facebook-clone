// header image picture dropdown menu

var settingsMenu = document.querySelector(".settings-menu")

function settingsMenuToggle () {
    settingsMenu.classList.toggle("settings-menu-height")
}


// droppdown menu toggle button 

var darkBtn = document.querySelector("#dark-btn")


darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on")
    // dark mode
    document.body.classList.toggle("dark-theme")
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light")
    }

}
    // dark/light mode local storage
if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on")
    document.body.classList.remove("dark-theme")
} else if (localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on")
    document.body.classList.add("dark-theme")
} else {
    localStorage.setItem("theme", "light")
}

localStorage.setItem("theme", light)