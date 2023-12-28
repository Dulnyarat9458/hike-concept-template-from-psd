const closeSidebar = () => {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("search-bar").style.display = "none";
    document.getElementById("backdrop-panel").style.display = "none";

}

const openSidebar = () => {
    document.getElementById("sidebar").style.width = "100% ";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("backdrop-panel").style.display = "block";
}


const closeSearch = () => {
    document.getElementById("search-bar").style.width = "0px";
    document.getElementById("search-bar").style.display = "none";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("backdrop-panel").style.display = "none";

}

const openSearch = () => {
    document.getElementById("search-bar").style.width = "100% ";
    document.getElementById("search-bar").style.display = "block";
    document.getElementById("backdrop-panel").style.display = "block";
}
