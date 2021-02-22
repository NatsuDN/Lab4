function onOnClick(){
    on1.classList.remove('selection');
    on2.classList.remove('selection');
    on3.classList.remove('selection');
    on4.classList.remove('selection');
    on1.classList.add('selected');
    on2.classList.add('selected');
    on3.classList.add('selected');
    on4.classList.add('selected');
    on1.addEventListener('click', onOffClick);
    on2.addEventListener('click', onOffClick);
    on3.addEventListener('click', onOffClick);
    on4.addEventListener('click', onOffClick);
}

function onOffClick(){
    on1.classList.remove('selected');
    on2.classList.remove('selected');
    on3.classList.remove('selected');
    on4.classList.remove('selected');
    on1.classList.add('selection');
    on2.classList.add('selection');
    on3.classList.add('selection');
    on4.classList.add('selection');
    on1.removeEventListener('click', onOnClick);
    on2.removeEventListener('click', onOnClick);
    on3.removeEventListener('click', onOnClick);
    on4.removeEventListener('click', onOnClick);
    on1.removeEventListener('click', onOffClick);
    on2.removeEventListener('click', onOffClick);
    on3.removeEventListener('click', onOffClick);
    on4.removeEventListener('click', onOffClick);
    on1.addEventListener('click', onOnClick);
    on2.addEventListener('click', onOnClick);
    on3.addEventListener('click', onOnClick);
    on4.addEventListener('click', onOnClick);
}

const on1 = document.querySelector('#on1.selection');
const on2 = document.querySelector('#on2.selection');
const on3 = document.querySelector('#on3.selection');
const on4 = document.querySelector('#on4.selection');
on1.addEventListener('click', onOnClick);
on2.addEventListener('click', onOnClick);
on3.addEventListener('click', onOnClick);
on4.addEventListener('click', onOnClick);



