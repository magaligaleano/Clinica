document.addEventListener('DOMContentLoaded', function () {
    const chatHeader = document.getElementById('chat-header');
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const chatIcon = document.getElementById('chat-icon');
    const chatBot = document.getElementById('chat-bot');

    chatHeader.addEventListener('click', function () {
        chatBody.classList.toggle('d-none');
        chatInput.classList.toggle('d-none');
    });

    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && chatInput.value.trim() !== '') {
            const userMessage = document.createElement('div');
            userMessage.className = 'user-message';
            userMessage.textContent = chatInput.value;
            chatBody.appendChild(userMessage);

            const botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = 'Gracias por tu mensaje. Un especialista se pondrá en contacto contigo pronto.';
            chatBody.appendChild(botMessage);

            chatInput.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    });
    if (chatIcon && chatBot && chatHeader) {
        chatIcon.addEventListener('click', function() {
            chatBot.style.display = 'block';
            chatIcon.style.display = 'none';
        });

        chatHeader.addEventListener('click', function() {
            if (window.innerWidth <= 600) {
                chatBot.style.display = 'none';
                chatIcon.style.display = 'flex';
            }
        });
    }
});



