$(document).ready(function () {


    $('.header-toggle').click(function () {
        $('.header-menu').toggleClass('active')
        $('body').toggleClass('noscroll')
    })
})

const coins = document.querySelectorAll('.tokenomics-coin')
const tokenomics = document.querySelector('.tokenomics-container')
tokenomics.addEventListener('mousemove', (e) => {
    coins.forEach(coin => {
        const speed = coin.getAttribute('data-speed')
        const x = (window.innerWidth - e.clientX) * speed;
        const y = (window.innerHeight - e.clientY) * speed;

        coin.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
})

const coinsTotal = document.querySelectorAll('.total-coin')
const total = document.querySelector('.total-container')
total.addEventListener('mousemove', (e) => {
    coinsTotal.forEach(coin => {
        const speed = coin.getAttribute('data-speed')
        const x = (window.innerWidth - e.clientX) * speed;
        const y = (window.innerHeight - e.clientY) * speed;

        coin.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
})