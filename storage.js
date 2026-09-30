/*========================
  LOCAL STORAGE
========================*/

const formulario = document.querySelector("form");

if (formulario) {

    const dadosSalvos = localStorage.getItem("dadosMenteConecta");

    if (dadosSalvos) {

        const dados = JSON.parse(dadosSalvos);

        Object.keys(dados).forEach(function (campo) {

            const elemento = formulario.elements[campo];

            if (elemento) {
                elemento.value = dados[campo];
            }

        });
    }

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const dadosFormulario = new FormData(formulario);
        const dados = {};

        dadosFormulario.forEach(function (valor, campo) {
            dados[campo] = valor;
        });

        localStorage.setItem(
            "dadosMenteConecta",
            JSON.stringify(dados)
        );

        mostrarToast();
    });
}