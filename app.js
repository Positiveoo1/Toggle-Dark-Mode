const body = document.getElementsByTagName('body')[0];
const round = document.getElementsByClassName('round')[0];
const txt = document.getElementsByTagName('marquee')[0];


function toggled() {
    body.classList.toggle('dark')

    if(body.classList.contains('dark')) {
        round.style.transform = 'translateX(50px)';
        round.style.transition = 'transform 0.5s ease-in-out';
        round.style.backgroundColor = 'black';
        txt.style.color = 'white';
    }else{
        round.style.transform = 'translateX(0px)';
        round.style.backgroundColor = 'white';
        txt.style.color = 'black';

    }

}