// Utilitários: formatação de moeda e data e helpers para localStorage (pt-BR, BRL)

const Utils = (function () {
  function formatarMoeda(valor) {
    return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function formatarData(dataIso) {
    const d = new Date(dataIso);
    return d.toLocaleString('pt-BR');
  }

  function salvar(chave, dado) {
    localStorage.setItem(chave, JSON.stringify(dado));
  }

  function carregar(chave, padrao) {
    const v = localStorage.getItem(chave);
    return v ? JSON.parse(v) : padrao;
  }

  function gerarId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  return { formatarMoeda, formatarData, salvar, carregar, gerarId };
})();