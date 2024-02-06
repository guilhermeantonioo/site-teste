const estrelas = document.querySelectorAll('.estrelas')
const contador = document.querySelector('#contador')
const btn = document.querySelector('#btn')
const msg = document.querySelector('#mensagem')
const text = document.querySelector
    ('#texto-de-avaliacao')
const avaliacao = document.querySelector('.avaliacao')
const avalie = document.querySelector('#avalie')




document.addEventListener('click', function (e) {
    let classStar = e.target.classList;
    if (!classStar.contains('ativo')) {
        estrelas.forEach(function (star) {
            star.classList.remove('ativo')
        });
        classStar.add('ativo');
        console.log(e.target.getAttribute('data-avaliacao'))
        contador.textContent = + e.target.getAttribute('data-avaliacao')
    }
})

btn.addEventListener("click", () => {
    msg.classList.remove('hide')
    setTimeout(function () {
        msg.classList.add('hide')
    }, 1200)
})

btn.addEventListener("click", () => {
    setTimeout(function () {
        text.classList.add('hide')
        btn.classList.add('hide')
        avaliacao.classList.add('hide')
        avalie.textContent = 'Obrigado pela avaliação!'
    }, 1)
})