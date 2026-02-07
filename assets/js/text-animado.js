document.addEventListener('DOMContentLoaded', function () {
    const typedTextSpan = document.querySelector(".containerTextAnima");
    const textArray = ["Desenvolvedor Web", "Automações",];
    const typingDelay = 90;
    const erasingDelay = 70;
    const pauseDelay = 1000;
    let textArrayIndex = 0;
    let charIndex = 0;
    let isErasing = false;

    function typeAndErase() {
        if (!isErasing && charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeAndErase, typingDelay);
        } else if (isErasing && charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeAndErase, erasingDelay);
        } else {
            isErasing = !isErasing;
            if (!isErasing) {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            }
            setTimeout(typeAndErase, pauseDelay);
        }
    }

    typeAndErase();
});