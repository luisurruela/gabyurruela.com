window.addEventListener('DOMContentLoaded', inicio);

function inicio() {

    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 6000,
        hoverPause: true,
        animationDuration: 1000,
    }).mount()
    
}