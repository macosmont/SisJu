  // Função para alternar entre login e cadastro
  function toggleForm() {
    var loginForm = document.querySelector('.form-container.login');
    var cadastroForm = document.querySelector('.form-container.cadastro');
    loginForm.classList.toggle('hidden');
    cadastroForm.classList.toggle('hidden');
}

// Event Listeners para os links de alternância
document.getElementById('toggleCadastro').addEventListener('click', function(event) {
    event.preventDefault();
    toggleForm();
});

document.getElementById('toggleLogin').addEventListener('click', function(event) {
    event.preventDefault();
    toggleForm();
});
