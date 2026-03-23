// Configuración de las flores con las fotos
const flowers = [
    {
        photo: "IMG-20260320-WA0238.jpg",
        message: "Esa mirada tuya ilumina mi mundo entero ✨ Eres hermosa, Jhoselyn 💖",
        flowerName: "Girasol"
    },
    {
        photo: "IMG_20260320_173349.jpg",
        message: "Tu sonrisa es mi lugar favorito en el mundo 💖 Cada vez que sonríes, mi corazón late más fuerte",
        flowerName: "Tulipán"
    },
    {
        photo: "IMG_20260320_171703.jpg",
        message: "Eres tan hermosa como una rosa al amanecer 🌹 Tu belleza es única e inigualable",
        flowerName: "Rosa"
    },
    {
        photo: "IMG_20260320_141815.jpg",
        message: "Tu esencia es única, como una flor en primavera 💕 Gracias por ser tan especial",
        flowerName: "Cerezo"
    }
];

// Mensajes de sorpresa
const surpriseMessages = [
    "🌷 Eres la persona más increíble que conozco, Jhoselyn",
    "💖 Cada día a tu lado es un regalo del universo",
    "🌸 Tu ternura me hace querer ser mejor persona",
    "✨ Eres la luz que ilumina mis días más oscuros",
    "🌹 Te mereces todo lo bonito que existe en el mundo",
    "💕 Eres mi razón para sonreír cada mañana",
    "🌟 No hay nadie como tú en este mundo, eres única",
    "💗 Gracias por existir y hacer mi vida más hermosa"
];

// Elementos del DOM
const flowersGrid = document.getElementById('flowersGrid');
const modal = document.getElementById('photoModal');
const modalPhoto = document.getElementById('modalPhoto');
const modalMessage = document.getElementById('modalMessage');
const closeModal = document.getElementById('closeModal');
const surpriseBtn = document.getElementById('surpriseBtn');
const dailyMessage = document.getElementById('dailyMessage');

// Crear las flores dinámicamente
function createFlowers() {
    flowersGrid.innerHTML = '';
    
    flowers.forEach((flower, index) => {
        const flowerCard = document.createElement('div');
        flowerCard.className = 'flower-card';
        flowerCard.setAttribute('data-photo', flower.photo);
        flowerCard.setAttribute('data-message', flower.message);
        
        // Iconos de flores diferentes para cada una
        const flowerIcons = ['🌻', '🌷', '🌹', '🌸'];
        
        flowerCard.innerHTML = `
            <div class="flower-icon">${flowerIcons[index]}</div>
            <div class="flower-name">${flower.flowerName}</div>
            <div class="flower-preview">📸 Toca para ver</div>
        `;
        
        flowerCard.addEventListener('click', () => openModal(flower.photo, flower.message));
        flowersGrid.appendChild(flowerCard);
    });
}

// Abrir modal con foto y mensaje
function openModal(photo, message) {
    modalPhoto.src = photo;
    modalMessage.textContent = message;
    modal.classList.add('show');
    
    // Efecto de corazones al abrir
    createHeartEffect();
}

// Cerrar modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Cerrar modal al hacer clic fuera
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Botón sorpresa
surpriseBtn.addEventListener('click', () => {
    const randomMessage = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
    dailyMessage.innerHTML = `💌 ${randomMessage} 💌`;
    
    // Cambiar color temporalmente
    const messageDiv = document.getElementById('messageOfDay');
    messageDiv.style.transform = 'scale(1.02)';
    setTimeout(() => {
        messageDiv.style.transform = 'scale(1)';
    }, 300);
    
    // Lluvia de corazones
    createHeartRain();
    
    // Animación de pétalos extra
    createExtraPetals();
});

// Efecto de corazón al abrir flor
function createHeartEffect() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = ['❤️', '💖', '💕', '💗', '💓', '💝'][Math.floor(Math.random() * 6)];
            heart.style.position = 'fixed';
            heart.style.left = (window.innerWidth / 2) + (Math.random() - 0.5) * 200 + 'px';
            heart.style.top = (window.innerHeight / 2) + (Math.random() - 0.5) * 100 + 'px';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1001';
            heart.style.opacity = '1';
            heart.style.transition = 'all 1s ease';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.transform = 'translateY(-80px)';
                heart.style.opacity = '0';
            }, 10);
            
            setTimeout(() => {
                heart.remove();
            }, 1000);
        }, i * 50);
    }
}

// Lluvia de corazones
function createHeartRain() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = ['❤️', '💖', '💕', '💗', '💓', '💝'][Math.floor(Math.random() * 6)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '-50px';
            heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.opacity = '0.8';
            heart.style.transition = 'all 3s ease';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.transform = 'translateY(' + (window.innerHeight + 100) + 'px)';
                heart.style.opacity = '0';
            }, 10);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 80);
    }
}

// Pétalos flotantes continuos
function createPetals() {
    const petalsContainer = document.getElementById('petals');
    const petalsList = ['🌸', '🌼', '🌻', '💮', '🌺', '🌸', '🌷', '🌹'];
    
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.innerHTML = petalsList[Math.floor(Math.random() * petalsList.length)];
        petal.style.left = Math.random() * window.innerWidth + 'px';
        petal.style.fontSize = (Math.random() * 25 + 15) + 'px';
        petal.style.animationDuration = Math.random() * 5 + 4 + 's';
        petal.style.animationDelay = Math.random() * 2 + 's';
        petalsContainer.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, 8000);
    }, 1500);
}

// Pétalos extra al hacer sorpresa
function createExtraPetals() {
    const petalsContainer = document.getElementById('petals');
    const petalsList = ['🌸', '🌼', '🌻', '💮', '🌺'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.innerHTML = petalsList[Math.floor(Math.random() * petalsList.length)];
            petal.style.left = Math.random() * window.innerWidth + 'px';
            petal.style.fontSize = (Math.random() * 30 + 20) + 'px';
            petal.style.animationDuration = Math.random() * 4 + 3 + 's';
            petalsContainer.appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, 5000);
        }, i * 50);
    }
}

// Mensaje de bienvenida
setTimeout(() => {
    dailyMessage.innerHTML = "🌸 ¡Bienvenida, Jhoselyn! Toca cualquier flor para ver tus recuerdos especiales 🌸";
    dailyMessage.style.fontWeight = 'bold';
    setTimeout(() => {
        dailyMessage.style.fontWeight = 'normal';
    }, 3000);
}, 1000);

// Inicializar
createFlowers();
createPetals();

// Teclado: Esc para cerrar modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
    }
});
