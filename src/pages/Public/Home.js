document.addEventListener('DOMContentLoaded', function() {
    // Carrossel com imagens locais
// Carrossel - Imagens locais
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = [
        { 
            image: '../images/carrossel1.png', 
            alt: 'Promoção One Piece' 
        },
        { 
            image: '../images/carrossel2.png', 
            alt: 'Novidades Solo Leveling' 
        },
        { 
            image: '../images/carrossel3.png', 
            alt: 'Lançamentos Dandadan' 
        }
    ];
    
    // Criar slides do carrossel
    slides.forEach((slide) => {
        const slideElement = document.createElement('div');
        slideElement.classList.add('carousel-slide');
        
        const imgElement = document.createElement('img');
        imgElement.src = slide.image;
        imgElement.alt = slide.alt;
        imgElement.style.width = '100%';
        imgElement.style.height = '150%';
        imgElement.style.objectFit = 'cover';
        
        // Adiciona tratamento de erro
        imgElement.onerror = function() {
            console.error('Erro ao carregar imagem:', slide.image);
            this.style.display = 'none';
            slideElement.innerHTML = `<div class="image-error">${slide.alt}</div>`;
            slideElement.style.backgroundColor = '#772583';
            slideElement.style.color = 'white';
            slideElement.style.display = 'flex';
            slideElement.style.justifyContent = 'center';
            slideElement.style.alignItems = 'center';
        };
        
        slideElement.appendChild(imgElement);
        carouselContainer.appendChild(slideElement);
    });

    const carouselSlides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    
    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    document.querySelector('.prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
        updateCarousel();
    });
    
    document.querySelector('.next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        updateCarousel();
    });
    
    setInterval(() => {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        updateCarousel();
    }, 5000);


document.addEventListener('DOMContentLoaded', function() {
    // Dropdown com delay para melhor experiência
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    let timeout;
    
    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.visibility = 'visible';
        document.querySelector('.dropdown-icon').style.transform = 'rotate(180deg)';
    });
    
    dropdown.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
            document.querySelector('.dropdown-icon').style.transform = 'rotate(0deg)';
        }, 200);
    });
    
    dropdownMenu.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
    });
    
    dropdownMenu.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
        }, 200);
    });
    
    // Restante do seu código (carrossel, etc...)
});


    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('img').style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('img').style.transform = 'scale(1)';
        });
    });

    

});