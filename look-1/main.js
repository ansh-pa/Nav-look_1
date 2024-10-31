let navContainer = document.getElementById('navContainer');
let dekstopNavEle = document.getElementById('dekstopNav');
let searchEle = document.getElementById('searchEle');
let searchBtn = document.getElementById('searchBtn');
let searchContainer = document.getElementById('searchContainer');
let searchCloseEle = document.getElementById('searchClose');
let overlayEle = document.getElementById('overlayEle');

searchBtn.onclick = function(){
    dekstopNavEle.classList.toggle('hide');
    searchContainer.classList.toggle('hide');
    overlayEle.classList.toggle('show');
    navContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
}

searchCloseEle.onclick = function(){
    dekstopNavEle.classList.toggle('hide');
    searchContainer.classList.toggle('hide');
    navContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlayEle.classList.toggle('show');
    searchEle.value = '';
}

overlayEle.onclick = function(){
    dekstopNavEle.classList.toggle('hide');
    searchContainer.classList.toggle('hide');
    navContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlayEle.classList.toggle('show');
    searchEle.value = '';
}
