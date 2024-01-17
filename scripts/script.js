accentColor = "#ffae47";
accentSecondaryColor = "#ff2e17";
primaryColor = "#2c2e35";
secondaryColor = "#ffffff";
tertiaryColor = "#e0e0e0";
navColor = "#202121";

window.addEventListener('scroll', function () {
    const scrollX = window.scrollY || document.documentElement.scrollTop;
    const screenWidth = window.innerWidth;

    if (scrollX > 100 && screenWidth >= 992) {
        document.getElementById("nav-panel").style.backgroundColor = navColor;
        if (scrollX > 300) {
            document.getElementById("nav-panel-primary").style.height = "0px";
        } else {
            document.getElementById("nav-panel-primary").style.height = "66px";;
        }
    }
    else if (scrollX > 100 && screenWidth < 992) {
        document.getElementById("nav-panel").style.backgroundColor = navColor;
    } else {
        document.getElementById("nav-panel").style.backgroundColor = "transparent";
        document.getElementById("nav-panel-primary").style.backgroundColor = "transparent";
        document.getElementById("nav-panel-primary").style.height = "66px"
    }

});

const closeSidebar = () => {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("search-bar").style.height = "0px";
    document.getElementById("backdrop-panel").style.display = "none";
}

const openSidebar = () => {
    document.getElementById("sidebar").style.width = "100% ";
    document.getElementById("backdrop-panel").style.display = "block";
}


const closeSearch = () => {
    document.getElementById("search-bar").style.height = "0px";
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("backdrop-panel").style.display = "none";
}

const openSearch = () => {
    document.getElementById("search-bar").style.height = "100%";
    document.getElementById("backdrop-panel").style.display = "block";
}
