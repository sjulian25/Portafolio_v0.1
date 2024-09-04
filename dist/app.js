const menuButton = document.querySelector("#menu-button");
const menuItems = document.querySelector("#menu");
const menuButtonSpans = document.querySelectorAll("#menu-button span");
const menuButtonIcons = document.querySelectorAll("#menu-button i");
const links = document.querySelectorAll("#menu a");

// Abrir menu
menuButton.addEventListener("click", () => {
    menuItems.classList.toggle("hidden");

    menuButtonSpans.forEach((span) => {
        span.classList.toggle("animado");
    })

})

links.forEach((link) => {
    link.addEventListener("click", () => {
        menuItems.classList.add("hidden");
        menuButtonSpans.forEach((span) => {
            span.classList.remove("animado");
        })
    })
})

// Cerrar el menu
window.onresize = function () {
    let w = window.outerWidth;
    if (w > 768) {
        menuItems.classList.add("hidden");
        menuButtonSpans.forEach((span) => {
            span.classList.remove("animado");
        })
    }
}

// Dark mode
const darkButton = document.querySelector("#darkButton");

darkButton.addEventListener('click', function() {

    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

// Cambiar de jobSection

const jobSelection = document.querySelector('#jobSection');
const articles = document.querySelectorAll('#jobSection article');

jobSelection.addEventListener('click', (event) => {
    const id = event.target.dataset.id;

    if(id){
        articles.forEach((articles) => {
            articles.classList.add('hidden');
        })
        const element = document.getElementById(id);
        element.classList.remove('hidden');
    }
})

const jobLinks = document.querySelectorAll('#jobSection button');
const firstLink = document.querySelector('#link1');

jobLinks.forEach((link) => {
    link.addEventListener('click', () => {
        firstLink.classList.remove('dark:bg-slate-700', 'bg-white', 'border-sky-500');
    });
});

// Carousel
window.addEventListener('load', function(){
    new Glider(this.document.querySelector('.carousel__lista'), {
        // Mobile-first defaults
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
            // screens greater than >= 775px
            breakpoint: 768,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
            },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
            }
        ]
    });
});