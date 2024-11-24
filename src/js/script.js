function redirectTo(url) {
    window.location.href = url;
    closeWindow();
}
  
function closeWindow() {
    document.getElementById("window").classList.add("inactive");
}



 const subscribeButtons = document.querySelectorAll('.card a');

subscribeButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Estamos te redirecionando!');
  });
});



// scrool suave

// Seleciona todos os links internos
const linksInternos = document.querySelectorAll('a[href^="#"]');

// Adiciona um event listener para cada link
linksInternos.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = link.getAttribute('href');   

        const targetElement = document.querySelector(targetId);

        // Calcula a posição do elemento alvo
        const targetPosition = targetElement.offsetTop;

        // Anima a rolagem suavemente até o elemento alvo
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});