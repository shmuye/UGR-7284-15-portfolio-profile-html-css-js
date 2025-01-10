const sideBar = document.getElementById('side-bar');
const menu = document.getElementById('menu');
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;
menu.style.display = 'block';
function hideSideBar(){
 sideBar.style.display = 'none';
}
function showSideBar(){
 sideBar.style.display = 'flex';
}