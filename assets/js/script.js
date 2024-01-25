window.addEventListener('DOMContentLoaded', () => {
    const brandElement = document.querySelector('.brand');
    const text = brandElement.textContent;
    brandElement.textContent = '';

    let index = 0;
    const typingInterval = setInterval(() => {
        brandElement.textContent += text[index];
        index++;

        if (index === text.length) {
            clearInterval(typingInterval);
        }
    }, 50);
});

window.onload = function () {
    var page = window.location.pathname;
    page = page.substr(1);

    var links = document.querySelectorAll('.options ul li a');

    links.forEach(function (link) {
        if (link.getAttribute('href') === page) {
            link.parentElement.classList.add('active');
        }
    });

    var menuItems = document.querySelectorAll('.options ul li');

    menuItems.forEach(function (item) {
        item.classList.add('slideInDown');
        item.addEventListener('animationend', function () {
            item.classList.remove('slideInDown');
        });
    });

    const options = document.querySelectorAll('.options ul li');

    // options.forEach(option => {
    //     option.addEventListener('mouseover', () => {
    //         const originalText = option.textContent;

    //         newText = undefined;
    //         //Fazer isso enquanto a palavra não for igual a original

    //         while (newText != option.textContent) {
    //             //Percorre o texto letra a letra
    //             for (let i = 0; i < originalText.length; i++) {
    //                 setTimeout(() => {
    //                     //Substitui a letra aleatoriamente por um caracter, e não para até achar a letra original
    //                     let newChar = originalText.charAt(i);
    //                     while (newChar === originalText.charAt(i)) {
    //                         newChar = String.fromCharCode(Math.floor(Math.random() * 255));
    //                         //Verifica se o novo caractere é a letra original
    //                         if (newChar === originalText.charAt(i)) {
    //                             option.textContent = option.textContent.substring(0, i) + newChar + option.textContent.substring(i + 1);
    //                             newText = option.textContent;
    //                             break;
    //                         }
    //                         newText = option.textContent;
    //                         option.textContent = option.textContent.substring(0, i) + newChar + option.textContent.substring(i + 1);
    //                     }
    //                 }, i * 50);
    //             }
    //         }




    //         option.textContent = newText;

    //         setTimeout(() => {
    //             option.textContent = originalText;
    //         }, 500);
    //     });
    // });
}