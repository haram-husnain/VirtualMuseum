// js/gallery.js
document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.getElementById('sliderTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        // Sample data - replace with your actual images
        const cards = [
            { 
                image: 'assets/portraits/gallery-sized/1.jpg',
                title: 'One', 
                subtitle: 'Ateneo Municipal, 1872' 
            },
            { 
                image: 'assets/portraits/gallery-sized/2.jpg',
                title: 'Medical Studies', 
                subtitle: 'Madrid, 1882' 
            },

            { 
                image: 'assets/portraits/gallery-sized/3.jpg',
                title: 'Medical Studies', 
                subtitle: 'Madrid, 1882' 
            },
            { 
                image: 'assets/portraits/gallery-sized/4.jpg',
                title: 'One', 
                subtitle: 'Ateneo Municipal, 1872' 
            },
            { 
                image: 'assets/portraits/gallery-sized/5.jpg',
                title: 'Medical Studies', 
                subtitle: 'Madrid, 1882' 
            },

            { 
                image: 'assets/portraits/gallery-sized/6.jpg',
                title: 'Medical Studies', 
                subtitle: 'Madrid, 1882' 
            },
            { 
                image: 'assets/portraits/gallery-sized/7.jpg',
                title: 'One', 
                subtitle: 'Ateneo Municipal, 1872' 
            },
            { 
                image: 'assets/portraits/gallery-sized/11.jpg',
                title: 'Medical Studies', 
                subtitle: 'Madrid, 1882' 
            },

            { 
                image: 'assets/portraits/gallery-sized/9.jpg',
                title: 'Medical Studies', 
                subtitle: 'Madrid, 1882' 
            },
            { 
                image: 'assets/portraits/gallery-sized/10.jpg',
                title: 'One', 
                subtitle: 'Ateneo Municipal, 1872' 
            },
            { 
                image: 'assets/portraits/gallery-sized/8.jpg',
                title: 'Medical Studies', 
                subtitle: 'Madrid, 1882' 
            },

            { 
                image: 'assets/portraits/gallery-sized/12.jpg',
                title: 'Medical Studies', 
                subtitle: 'Madrid, 1882' 
            }
            // Add more cards as needed
        ];

        // Initialize slider
        let currentIndex = 0;

        function renderCards() {
            sliderTrack.innerHTML = '';
            
            // Create enough clones for infinite loop effect
            const displayCards = [...cards, ...cards, ...cards];
            
            displayCards.forEach((card, index) => {
                const cardElement = document.createElement('div');
                cardElement.className = 'slider-card';
                cardElement.style.backgroundImage = `url(${card.image})`;
                
                // Position cards
                const position = (index - currentIndex - cards.length);
                let transform = '';
                let zIndex = 0;
                
                if (position === 0) {
                    // Left card
                    transform = 'translateX(-150px) scale(0.9)';
                    zIndex = 5;
                } else if (position === 1) {
                    // Center card
                    transform = 'translateX(0) scale(1)';
                    cardElement.classList.add('center');
                    zIndex = 10;
                } else if (position === 2) {
                    // Right card
                    transform = 'translateX(150px) scale(0.9)';
                    zIndex = 5;
                } else {
                    // Hidden cards
                    transform = 'translateX(0) scale(0.8)';
                    cardElement.style.opacity = '0';
                    cardElement.style.pointerEvents = 'none';
                }
                
                cardElement.style.transform = transform;
                cardElement.style.zIndex = zIndex;
                
                cardElement.innerHTML = `
                    <div class="card-content">
                        <h3>${card.title}</h3>
                        <p>${card.subtitle}</p>
                    </div>
                `;
                
                sliderTrack.appendChild(cardElement);
            });
        }

        // Navigation
        function goToPrev() {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            renderCards();
        }

        function goToNext() {
            currentIndex = (currentIndex + 1) % cards.length;
            renderCards();
        }

        // Event listeners
        prevBtn.addEventListener('click', goToPrev);
        nextBtn.addEventListener('click', goToNext);

        // Initialize
        renderCards();
});