function sidebarRight_open() {
    document.getElementById("sillynewsSidebarRight").style.display = "flex";
}
              
function sidebarRight_close() {
    document.getElementById("sillynewsSidebarRight").style.display = "none";
}

document.getElementById("burgrr-right").addEventListener("click", sidebarRight_open);

document.getElementById("sidebar-items-right").addEventListener("click", sidebarRight_close);