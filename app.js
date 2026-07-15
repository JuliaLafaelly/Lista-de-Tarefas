const input = document.querySelector("input");
const button = document.querySelector("button");
const lista = document.querySelector("ul");
const modal = document.querySelector(".modal");
const inputEditar = document.querySelector(".inputEditar");
const salvar = document.querySelector(".salvar");
const cancelar = document.querySelector(".cancelar");

let tarefaEditando = null;
button.addEventListener("click", addTarefa);

function addTarefa() {

    let texto = input.value.trim();
    if (texto === "") {
        return;
    }
    let tarefa = document.createElement("li");

    let textoTarefa = document.createElement("span");
    textoTarefa.textContent = texto;

    let editar = document.createElement("button");
    editar.textContent = "Editar";

    let excluir = document.createElement("button");
    excluir.textContent = "Excluir";

    tarefa.addEventListener("click", function () {
        tarefa.classList.toggle("concluida");

        if (tarefa.classList.contains("concluida")) {
            lista.appendChild(tarefa);
            editar.disabled = true;
            excluir.disabled = true;

        } else {
            lista.prepend(tarefa);
            editar.disabled = false;
            excluir.disabled = false;
        }

    });

    editar.addEventListener("click", function (event) {
        event.stopPropagation();
        tarefaEditando = tarefa;
        inputEditar.value = textoTarefa.textContent;
        modal.style.display = "flex";
    });

    excluir.addEventListener("click", function (event) {
        event.stopPropagation();
        let confirmar = confirm("Deseja realmente excluir essa tarefa?");
        if (confirmar) {
            tarefa.remove();
        }
    });

    tarefa.appendChild(textoTarefa);
    tarefa.appendChild(editar);
    tarefa.appendChild(excluir);
    lista.prepend(tarefa);
    input.value = "";
}

salvar.addEventListener("click", function () {
    let novoTexto = inputEditar.value.trim();
    if (novoTexto === "") {
        return;
    }
    let texto = tarefaEditando.querySelector("span");
    texto.textContent = novoTexto;
    modal.style.display = "none";
    tarefaEditando = null;
});

cancelar.addEventListener("click", function () {
    modal.style.display = "none";
    tarefaEditando = null;
});