document.addEventListener('DOMContentLoaded', function () {
    const typedTextSpan = document.querySelector(".containerTextAnima"); // Seleciona o elemento com a nova classe
    const textArray = ["Desenvolvedor Web", "Automações"]; // Textos que serão animados
    const typingDelay = 90; // Velocidade de digitação (ms)
    const erasingDelay = 70; // Velocidade de apagamento (ms)
    const pauseDelay = 1000; // Pausa antes de apagar ou digitar novamente (ms)
    let textArrayIndex = 0; // Qual texto do array está sendo animado
    let charIndex = 0; // Qual caractere está sendo animado
    let isErasing = false; // Indica se está apagando ou digitando

    function typeAndErase() {
        if (!isErasing && charIndex < textArray[textArrayIndex].length) {
            // Digita o texto
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeAndErase, typingDelay);
        } else if (isErasing && charIndex > 0) {
            // Apaga o texto
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeAndErase, erasingDelay);
        } else {
            // Pausa antes de alternar entre digitar e apagar
            isErasing = !isErasing; // Alterna entre digitação e apagamento
            if (!isErasing) {
                textArrayIndex++; // Muda para o próximo texto
                if (textArrayIndex >= textArray.length) textArrayIndex = 0; // Reinicia o ciclo
            }
            setTimeout(typeAndErase, pauseDelay);
        }
    }

    typeAndErase(); // Inicia a animação
});