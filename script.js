document.addEventListener('DOMContentLoaded', function () {
    // Funções para manipular armazenamento local
    function salvarAluno(aluno) {
        let alunos = obterAlunos();
        alunos.push(aluno);
        localStorage.setItem('alunos', JSON.stringify(alunos));
    }

    function obterAlunos() {
        return JSON.parse(localStorage.getItem('alunos')) || [];
    }

    // Página de Cadastro de Alunos
    if (window.location.pathname.endsWith("cadastro_alunos.html")) {
        const formCadastro = document.getElementById('formCadastro');
        
        formCadastro.addEventListener('submit', function (event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const faixa = document.getElementById('faixa').value;

            if (nome && faixa) {
                const aluno = { nome, faixa };
                salvarAluno(aluno);
                alert('Aluno cadastrado com sucesso!');
                formCadastro.reset();
            } else {
                alert('Preencha todos os campos.');
            }
        });
    }

    // Adicione mais lógica JavaScript conforme necessário para outras funcionalidades
});
