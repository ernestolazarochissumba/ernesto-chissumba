< script >
    const slides = document.getElementById('slides');
const imagens = slides.getElementsByTagName('img');
let index = 0;

function mostrarProximaImagem() {
    index = (index + 1) % imagens.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

// Define largura total da área de slides
slides.style.width = `${imagens.length * 100}%`;

// Troca de imagem a cada 4 segundos
setInterval(mostrarProximaImagem, 4000); <
/script>