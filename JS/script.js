/*========================
  SPA - NAVEGAÇÃO
========================*/

const conteudoDinamico = document.getElementById("conteudo-dinamico");

const secoes = {
    "#Quemsomos": document.getElementById("Quemsomos"),
    "#Atividades": document.getElementById("Atividades"),
    "#Cursos": document.getElementById("Cursos")
};

const linksNavegacao = document.querySelectorAll(".menu a");

linksNavegacao.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const destino = link.getAttribute("href");

        if (secoes[destino]) {

            event.preventDefault();

            conteudoDinamico.innerHTML = "";

            const secao = secoes[destino].cloneNode(true);

            conteudoDinamico.appendChild(secao);

            window.scrollTo({
                top: conteudoDinamico.offsetTop,
                behavior: "smooth"
            });
        }
    });
});


/*========================
  MENU HAMBÚRGUER
========================*/

const botao = document.querySelector(".menu-hamburguer");
const menu = document.querySelector(".menu");

botao.addEventListener("click", function () {
    menu.classList.toggle("aberto");
});


/*========================
  SUBMENU
========================*/

const dropdown = document.querySelector(".dropdown");
const linkDropdown = dropdown.querySelector(":scope > a");

linkDropdown.addEventListener("click", function () {

    if (window.innerWidth <= 576) {
        dropdown.classList.toggle("aberto");
    }

});


/*========================
  MODAL
========================*/

function abrirModal() {
    document.getElementById("modal").classList.add("mostrar");
}


function fecharModal() {
    document.getElementById("modal").classList.remove("mostrar");
}


/*========================
  TOAST
========================*/

function mostrarToast() {

    const toast = document.getElementById("toast");

    toast.classList.add("mostrar");

    setTimeout(function () {
        toast.classList.remove("mostrar");
    }, 3000);

}

