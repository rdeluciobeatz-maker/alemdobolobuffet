```markdown
# Além do Bolo — Documento de implantação e uso

Descrição rápida:
- Sistema interno para gestão de estoque (entrada/saída de insumos) e registros contábeis simples.
- Frontend puro: HTML, CSS, JavaScript.
- Armazenamento local: `localStorage`.
- Idioma: Português (pt-BR). Datas e moeda em BRL.

Estrutura do repositório (sugerida):
- /public → páginas HTML (login.html, dashboard.html)
- /assets/css → estilos (style.css)
- /assets/js → JavaScript (auth.js, utils.js, app.js)
- /docs → documentação (este arquivo)
- /.github/workflows → automações (deploy GitHub Pages)

Como usar localmente:
1. Abra `public/login.html` no navegador (pode abrir o arquivo direto).
2. Senha padrão (alterável em `assets/js/auth.js`): `alemdobolo`
3. Após login, você será redirecionado para `dashboard.html`.

Alterar senha:
- Edite a constante `SENHA_UNICA` em `assets/js/auth.js`.
- Como o sistema é frontend-only, a senha ficará no código — mantenha a comunicação entre funcionários sobre essa senha.

Persistência de dados:
- Os dados (estoque e registros) ficam em `localStorage` do navegador:
  - `alemdobolo_estoque`
  - `alemdobolo_registros`
- Limitações: ao limpar o armazenamento do navegador os dados são perdidos. Para backup, exporte manualmente (opção não implementada neste escopo).

Deploy no GitHub Pages:
- Você pode habilitar o GitHub Pages apontando para a pasta `/public` nas configurações do repositório.
- Opcionalmente, o workflow em `/.github/workflows/gh-pages.yml` publica automaticamente a pasta `/public` usando GitHub Actions.

Observações de segurança e limitações:
- Autenticação é frontend-only conforme requisito (localStorage). Não é segura para internet pública; serve apenas para uso interno e controle mínimo de acesso.
- Não foram usadas APIs pagas nem backend.
- Se precisar de funcionalidades adicionais (relatórios, export CSV, backup automático), podemos expandir mantendo as regras do projeto.
```
