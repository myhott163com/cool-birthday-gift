document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const catContainer = document.querySelector('.cat-container');
    const catIcon = document.querySelector('.cat-icon');
    const speechBubble = document.querySelector('.speech-bubble');
    const openButton = document.querySelector('.open-card');

    createBackgroundElements();
    addParticleEffect();

    // Set initial position of cat container to center of the card
    const cardRect = card.getBoundingClientRect();
    catContainer.style.left = `${cardRect.width / 2}px`;
    catContainer.style.top = `${cardRect.height / 2}px`;

    catContainer.addEventListener('click', () => {
        speechBubble.style.opacity = '0';
        speechBubble.style.transform = 'translateX(-50%) scale(0)';
        setTimeout(() => {
            speechBubble.classList.add('hidden');
            createFireworksAroundCat();
            showGiftButton();
        }, 300);
    });

    function createFireworksAroundCat() {
        const catRect = catContainer.getBoundingClientRect();
        const centerX = catRect.left + catRect.width / 2;
        const centerY = catRect.top + catRect.height / 2;

        // Create fireworks
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const angle = Math.random() * Math.PI * 2;
                const distance = 80 + Math.random() * 50;
                const x = centerX + Math.cos(angle) * distance;
                const y = centerY + Math.sin(angle) * distance;
                createFirework(x, y, document.body);
            }, i * 100);
        }

        // Create firecrackers
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const x = centerX + (Math.random() - 0.5) * 200;
                const y = centerY + (Math.random() - 0.5) * 200;
                createFirecracker(x, y, document.body);
            }, i * 50);
        }
    }

    function createFirework(x, y, container) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        firework.style.setProperty('--color', getRandomFireworkColor());
        container.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 2000);
    }

    function createFirecracker(x, y, container) {
        const firecracker = document.createElement('div');
        firecracker.classList.add('firecracker');
        firecracker.style.left = `${x}px`;
        firecracker.style.top = `${y}px`;
        container.appendChild(firecracker);

        setTimeout(() => {
            firecracker.remove();
        }, 1000);
    }

    function getRandomFireworkColor() {
        const colors = [
            '#ff0000', '#ff7700', '#ffff00', '#00ff00', '#0000ff', '#8a2be2', '#ff69b4'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function showGiftButton() {
        const catRect = catContainer.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        
        openButton.style.position = 'absolute';
        openButton.style.left = `${catRect.left - cardRect.left + catRect.width / 2}px`;
        openButton.style.top = `${catRect.bottom - cardRect.top + 10}px`;
        
        openButton.classList.remove('hidden');
        openButton.classList.add('visible', 'magical-appear');
        setTimeout(() => {
            openButton.classList.remove('magical-appear');
            openButton.classList.add('bling');
            setTimeout(() => openButton.classList.remove('bling'), 500);
        }, 500);
    }

    openButton.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.add('flipped');
        catContainer.style.display = 'none';
        openButton.style.display = 'none';
        // Add the flipCardBack event listener when opening the card
        card.addEventListener('click', flipCardBack);
    });

    // Replace the existing card click event listener with this:
    card.addEventListener('click', flipCardBack);

    function createBackgroundElements() {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const safeDistance = Math.max(cardRect.width, cardRect.height) / 2 + 20; // 20px extra margin

        createBalloons(cardCenterX, cardCenterY, safeDistance);
        createConfetti(cardCenterX, cardCenterY, safeDistance);
        createRobots(cardCenterX, cardCenterY, safeDistance);
        createStars(cardCenterX, cardCenterY, safeDistance);
        createBinaryCode(cardCenterX, cardCenterY, safeDistance);
    }

    function createBalloons(centerX, centerY, safeDistance) {
        const balloonsContainer = document.querySelector('.balloons');
        const balloonColors = ['#ff69b4', '#ff9a9e', '#fad0c4', '#a18cd1', '#fbc2eb'];

        for (let i = 0; i < 30; i++) {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            const angle = Math.random() * Math.PI * 2;
            const distance = safeDistance + Math.random() * 100;
            balloon.style.left = `${centerX + Math.cos(angle) * distance}px`;
            balloon.style.top = `${centerY + Math.sin(angle) * distance}px`;
            balloon.style.animationDelay = `${Math.random() * 15}s`;
            balloon.style.animationDuration = `${15 + Math.random() * 10}s`;
            balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
            balloon.style.transform = `scale(${0.5 + Math.random() * 0.5})`;
            balloonsContainer.appendChild(balloon);
        }
    }

    function createConfetti() {
        const confettiContainer = document.querySelector('.confetti');
        const colors = ['#ff69b4', '#ff9a9e', '#fad0c4', '#a18cd1', '#fbc2eb'];

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti-piece');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = `${Math.random() * 100}%`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confettiContainer.appendChild(confetti);
        }
    }

    function createRobots(centerX, centerY, safeDistance) {
        const robotsContainer = document.querySelector('.robots');
        const robotEmojis = ['🤖', '👾', '🎮', '💻', '📱', '🔬', '🧠', '🚀'];

        for (let i = 0; i < 10; i++) {
            const robot = document.createElement('div');
            robot.classList.add('robot');
            robot.textContent = robotEmojis[Math.floor(Math.random() * robotEmojis.length)];
            const angle = Math.random() * Math.PI * 2;
            const distance = safeDistance + Math.random() * 100;
            robot.style.left = `${centerX + Math.cos(angle) * distance}px`;
            robot.style.top = `${centerY + Math.sin(angle) * distance}px`;
            robot.style.animationDelay = `${Math.random() * 5}s`;
            robot.style.fontSize = `${20 + Math.random() * 20}px`;
            robotsContainer.appendChild(robot);
        }
    }

    function createStars(centerX, centerY, safeDistance) {
        const starsContainer = document.querySelector('.stars');
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const angle = Math.random() * Math.PI * 2;
            const distance = safeDistance + Math.random() * 100;
            star.style.left = `${centerX + Math.cos(angle) * distance}px`;
            star.style.top = `${centerY + Math.sin(angle) * distance}px`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            starsContainer.appendChild(star);
        }
    }

    function createBinaryCode(centerX, centerY, safeDistance) {
        const binaryContainer = document.querySelector('.binary-code');
        for (let i = 0; i < 20; i++) {
            const binary = document.createElement('div');
            binary.classList.add('binary');
            binary.textContent = Math.random().toString(2).substr(2, 8);
            const angle = Math.random() * Math.PI * 2;
            const distance = safeDistance + Math.random() * 100;
            binary.style.left = `${centerX + Math.cos(angle) * distance}px`;
            binary.style.top = `${centerY + Math.sin(angle) * distance}px`;
            binary.style.animationDelay = `${Math.random() * 5}s`;
            binaryContainer.appendChild(binary);
        }
    }

    function addParticleEffect() {
        const card = document.querySelector('.card');
        card.addEventListener('mousemove', (e) => {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${e.clientX}px`;
            particle.style.top = `${e.clientY}px`;
            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 1000);
        });
    }

    const checkAnswerButton = document.getElementById('check-answer');
    const answerInput = document.getElementById('integral-answer');
    const answerFeedback = document.getElementById('answer-feedback');
    const question1 = document.querySelector('.question');
    const question2 = document.getElementById('question2');

    checkAnswerButton.addEventListener('click', checkAnswer);
    answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });

    function checkAnswer() {
        const userAnswer = parseFloat(answerInput.value);
        answerFeedback.style.opacity = '0';
        setTimeout(() => {
            if (userAnswer === 8.26) {
                answerFeedback.textContent = "Correct! Well done!";
                answerFeedback.style.color = "#4CAF50";
                showNextQuestionButton();
            } else {
                answerFeedback.textContent = "WRONG! Are you CS student?";
                answerFeedback.style.color = "#F44336";
            }
            answerFeedback.style.opacity = '1';
        }, 300);
    }

    function showNextQuestionButton() {
        const nextButton = document.createElement('button');
        nextButton.classList.add('next-button');
        nextButton.setAttribute('aria-label', 'Next question');
        nextButton.addEventListener('click', showQuestion2);
        document.querySelector('.header').appendChild(nextButton);
    }

    function showQuestion2() {
        const question1 = document.getElementById('question1');
        const question2 = document.getElementById('question2');
        const nextButton = document.querySelector('.next-button');
        const giftProgress = document.querySelector('.gift-progress');
        
        question1.style.display = 'none';
        question2.style.display = 'block';
        nextButton.remove();
        
        // Update the gift progress text with animation
        giftProgress.style.opacity = '0';
        setTimeout(() => {
            giftProgress.textContent = '2/3 away from gift!';
            giftProgress.style.opacity = '1';
        }, 300);
        
        // Remove the event listener that flips the card back
        card.removeEventListener('click', flipCardBack);
        
        question2.innerHTML = `
            <h3>Which sentiment model might say "sure" just because it's tired?</h3>
            <div class="options">
                <button class="option" data-option="A">A. Decoder</button>
                <button class="option" data-option="B">B. Naive Bayes</button>
                <button class="option" data-option="C">C. BERT</button>
                <button class="option" data-option="D">D. My sleepy DADDY</button>
            </div>
            <p id="question2-feedback"></p>
        `;

        const options = question2.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', checkQuestion2Answer);
        });
    }

    function checkQuestion2Answer(e) {
        const selectedOption = e.target.dataset.option;
        const feedback = document.getElementById('question2-feedback');
        
        if (selectedOption === 'D') {
            feedback.textContent = "Correct! You know your DADDY well!";
            feedback.style.color = "#4CAF50";
            createFireworksEffect();
            showNextButton();
        } else {
            feedback.textContent = "You are grounded😤";
            feedback.style.color = "#F44336";
            createAngryFacesAnimation();
        }
    }

    function createAngryFacesAnimation() {
        const cardInside = document.querySelector('.card-inside');
        const angryFaces = ['😠', '😡', '🤬', '👿'];
        
        for (let i = 0; i < 20; i++) {
            const angryFace = document.createElement('div');
            angryFace.textContent = angryFaces[Math.floor(Math.random() * angryFaces.length)];
            angryFace.style.position = 'absolute';
            angryFace.style.left = `${Math.random() * 100}%`;
            angryFace.style.top = '-20px';
            angryFace.style.fontSize = '24px';
            angryFace.style.transition = 'top 2s ease-in, opacity 2s ease-in';
            angryFace.style.opacity = '1';
            cardInside.appendChild(angryFace);

            // Trigger the animation after a short delay
            setTimeout(() => {
                angryFace.style.top = '120%';
                angryFace.style.opacity = '0';
            }, 50);

            setTimeout(() => {
                angryFace.remove();
            }, 2050);
        }
    }

    function createFireworksEffect() {
        const cardInside = document.querySelector('.card-inside');
        const cardRect = cardInside.getBoundingClientRect();
        const centerX = cardRect.width / 2;
        const centerY = cardRect.height / 2;

        // Create fireworks
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const angle = Math.random() * Math.PI * 2;
                const distance = 80 + Math.random() * 50;
                const x = centerX + Math.cos(angle) * distance;
                const y = centerY + Math.sin(angle) * distance;
                createFirework(x, y, cardInside);
            }, i * 100);
        }

        // Create firecrackers
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const x = centerX + (Math.random() - 0.5) * 200;
                const y = centerY + (Math.random() - 0.5) * 200;
                createFirecracker(x, y, cardInside);
            }, i * 50);
        }
    }

    function createFirework(x, y, container) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        firework.style.setProperty('--color', getRandomFireworkColor());
        container.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 2000);
    }

    function createFirecracker(x, y, container) {
        const firecracker = document.createElement('div');
        firecracker.classList.add('firecracker');
        firecracker.style.left = `${x}px`;
        firecracker.style.top = `${y}px`;
        container.appendChild(firecracker);

        setTimeout(() => {
            firecracker.remove();
        }, 1000);
    }

    function showNextButton() {
        const nextButton = document.createElement('button');
        nextButton.classList.add('next-button');
        nextButton.setAttribute('aria-label', 'Next question');
        nextButton.addEventListener('click', showQuestion3);
        document.querySelector('.header').appendChild(nextButton);
    }

    function showQuestion3() {
        const question2 = document.getElementById('question2');
        const question3 = document.getElementById('question3');
        const nextButton = document.querySelector('.next-button');
        const giftProgress = document.querySelector('.gift-progress');
        
        question2.style.display = 'none';
        question3.style.display = 'block';
        nextButton.remove();
        
        // Update the gift progress text with animation
        giftProgress.style.opacity = '0';
        setTimeout(() => {
            giftProgress.textContent = '3/3 away from gift!';
            giftProgress.style.opacity = '1';
        }, 300);
        
        question3.innerHTML = `
            <h3>Would you voluntarily agree to grant Harry first author status on all your future papers?</h3>
            <div class="options">
                <button class="option" data-option="Yes">Yes</button>
                <button class="option" data-option="No">No</button>
            </div>
            <p id="question3-feedback"></p>
        `;

        const options = question3.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', checkQuestion3Answer);
        });
    }

    function checkQuestion3Answer(e) {
        const selectedOption = e.target.dataset.option;
        const feedback = document.getElementById('question3-feedback');
        
        if (selectedOption === 'Yes') {
            feedback.textContent = "Great choice! Harry appreciates your generosity!";
            feedback.style.color = "#4CAF50";
            createFireworksEffect();
            showFinalMessage();
        } else {
            feedback.textContent = "Are you sure?";
            feedback.style.color = "#F44336";
            e.target.addEventListener('click', confirmNoAnswer, { once: true });
        }
    }

    function confirmNoAnswer(e) {
        const feedback = document.getElementById('question3-feedback');
        feedback.textContent = "Think again! Harry's feelings are hurt 😢";
        feedback.style.color = "#F44336";
        createAngryFacesAnimation();
    }

    function showFinalMessage() {
        const cardInside = document.querySelector('.card-inside');
        const finalMessage = document.createElement('div');
        finalMessage.classList.add('final-message');
        finalMessage.innerHTML = `
            <h2 class="congratulations-title">Congratulations!</h2>
            <div class="qr-code-container">
                <img src="secret_gift.png" alt="Secret Gift QR Code" class="secret-gift-image" style="width: 60%; height: auto;">
            </div>
        `;
        
        setTimeout(() => {
            cardInside.innerHTML = '';
            cardInside.appendChild(finalMessage);
            createCelebrationEffects();
        }, 2000);
    }

    function createCelebrationEffects() {
        createFloatingEmojis();
        createSparkles();
    }

    function createFloatingEmojis() {
        const emojis = ['🎉', '🎈', '🎊', '🎁', '🥳', '💖', '✨'];
        const cardInside = document.querySelector('.card-inside');
        
        function createEmoji() {
            const emoji = document.createElement('div');
            emoji.classList.add('floating-emoji');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = `${Math.random() * 100}%`;
            emoji.style.animationDuration = '6s';
            cardInside.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, 6000);
        }

        // Create initial batch of emojis
        for (let i = 0; i < 20; i++) {
            createEmoji();
        }

        // Continue creating emojis every second
        const emojiInterval = setInterval(createEmoji, 1000);

        // Stop creating new emojis after 10 seconds
        setTimeout(() => {
            clearInterval(emojiInterval);
        }, 10000);
    }

    function createSparkles() {
        const cardInside = document.querySelector('.card-inside');
        
        for (let i = 0; i < 50; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.animationDuration = `${1 + Math.random()}s`;
            sparkle.style.animationDelay = `${Math.random()}s`;
            cardInside.appendChild(sparkle);
        }
    }

    // Add this function to handle flipping the card back
    function flipCardBack(e) {
        if (card.classList.contains('flipped')) {
            // Check if the click is on the card-inside or its children
            if (!e.target.closest('.card-inside')) {
                card.classList.remove('flipped');
                setTimeout(() => {
                    catContainer.style.display = 'flex';
                    openButton.style.display = 'block';
                }, 300);
            }
        }
    }
});