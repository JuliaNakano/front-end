document.addEventListener('DOMContentLoaded', function() {
    // Elementos do login
    const loginForm = document.querySelector('.login-box');
    const emailInput = loginForm.querySelector('input[type="email"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    
    // Validação do formulário de login
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            if (!emailInput.value || !passwordInput.value) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            if (!isValidEmail(emailInput.value)) {
                alert('Por favor, insira um email válido!');
                return;
            }
            
            // Se passar na validação, pode enviar os dados
            console.log('Login enviado:', {
                email: emailInput.value,
                password: passwordInput.value
            });
            
            // Chamada para a função de login
            handleLogin(emailInput.value, passwordInput.value);
        });
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    // Adicionar efeitos aos inputs
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#772583';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = '#ddd';
        });
    });
    
    // Lembrar email do usuário (se o elemento existir)
    if (emailInput && localStorage.getItem('rememberedEmail')) {
        emailInput.value = localStorage.getItem('rememberedEmail');
    }
    
    // Função para lidar com o login (simulada)
    async function handleLogin(email, password) {
        try {
            // Esta é uma simulação - substitua pela sua API real
            console.log('Tentando login com:', email, password);
            
            // Simulando uma resposta da API
            const success = true; // Simulando login bem-sucedido
            
            if (success) {
                // Login bem-sucedido
                alert('Login bem-sucedido! Redirecionando...');
                // window.location.href = '/dashboard';
            } else {
                alert('Email ou senha incorretos');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao conectar com o servidor');
        }
    }
});