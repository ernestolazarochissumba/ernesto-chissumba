function mostrarDetalhes(id) {
    const div = document.getElementById(id);
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function mostrarDetalhes(id) {
    const elemento = document.getElementById(id);
    elemento.classList.toggle('ativo'); <
    script >
        // Exibir mensagem de sucesso no envio do formulário
        const form = document.getElementById('formContato');
    const msg = document.getElementById('msgSucesso');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        msg.style.display = 'block';
        setTimeout(() => msg.style.display = 'none', 4000);
        form.reset(); // limpa os campos
    }); <
    /script>
} <
script >
    const form = document.getElementById('formContato');
const msg = document.getElementById('msgSucesso');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 4000);
    form.reset();
}); <
/script>