// wczytujemy dane
const imie = document.querySelector('#imie');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click',function () {
    let i = imie.value;
    wynik.innerHTML = 'Witaj '+i;
})