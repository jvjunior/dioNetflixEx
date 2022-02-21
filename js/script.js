const page = document.querySelector("html")
const cor = document.getElementById("gray")
const cor2 = document.getElementById("red")
const cor3 = document.getElementById("black")
// const pesq = document.getElementById("pesq")
// const pesq2 = document.getElementById("pesquisa")
// pesq.addEventListener("click", function mostrar(){
//     document.getElementById("pesquisa").style.display = 'inline-flex'
// })
// pesq2.addEventListener("blur", function esconder(){
//     document.getElementById("pesquisa").style.display = 'none'
// })
function gray(){
    page.classList.add("gray");
    page.classList.remove("red");
    page.classList.remove("black");
}
function red(){
    page.classList.remove("gray");
    page.classList.add("red");
    page.classList.remove("black");
}
function black(){
    page.classList.remove("gray");
    page.classList.remove("red");
    page.classList.add("black");        
}
function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }

}
