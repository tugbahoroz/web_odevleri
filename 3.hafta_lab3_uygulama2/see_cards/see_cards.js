let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');

function setActive() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.remove('active'));
    if(items[1]) items[1].classList.add('active'); // Ortadaki kart aktif olacak
}

// İlk başta aktif kartı ayarla
setActive();

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    slide.appendChild(items[0]);
    setActive();
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    slide.prepend(items[items.length-1]);
    setActive();
});

let seeButtons = document.querySelectorAll('.item button');

seeButtons.forEach(button => {
    button.addEventListener('click', function() {
        let activeItem = this.closest('.item');
        let name = activeItem.querySelector('.name').textContent;
        let descript = activeItem.querySelector('.descript').textContent;
        alert(`Name: ${name}\nDescription: ${descript}`);
    });
});


