/*
  Autenticação simples (frontend, localStorage)
  Regras do projeto: UMA senha única do sistema.
  Para alterar a senha, edite a constante SENHA_UNICA abaixo.
  OBS: sistema frontend-only — a senha ficará no código (mantenha controle entre funcionários).
*/

const Auth = (function () {
  // SENHA_UNICA: altere para a senha desejada (apenas no repositório/colaboradores)
  const SENHA_UNICA = 'alemdobolo'; // <-- alterar aqui se necessário

  const CHAVE_AUT = 'alemdobolo_autenticado';

  function estaAutenticado() {
    return localStorage.getItem(CHAVE_AUT) === '1';
  }

  function login(senha) {
    if (senha === SENHA_UNICA) {
      localStorage.setItem(CHAVE_AUT, '1');
      return true;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem(CHAVE_AUT);
  }

  // Se estivermos na página de login, ligamos o formulário
  if (document.getElementById('form-login')) {
    document.getElementById('form-login').addEventListener('submit', function (e) {
      e.preventDefault();
      const senha = document.getElementById('senha').value.trim();
      const msg = document.getElementById('mensagem');
      if (login(senha)) {
        // redireciona para o painel interno
        window.location.href = 'dashboard.html';
      } else {
        msg.style.color = 'var(--vermelho)';
        msg.textContent = 'Senha incorreta.';
      }
    });
  }

  return { estaAutenticado, login, logout };
})();
