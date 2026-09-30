# Mente Conecta

## Sobre o projeto

O Mente Conecta é um projeto de site para uma ONG fictícia voltada ao apoio emocional, à convivência e ao desenvolvimento pessoal.

A proposta é criar um espaço onde as pessoas possam conhecer a organização, suas atividades, cursos e formas de participação.

O projeto foi desenvolvido como atividade acadêmica, utilizando HTML, CSS e JavaScript.

## Objetivo

O objetivo do projeto é desenvolver uma página web organizada, responsiva e interativa, aplicando conhecimentos de desenvolvimento web e boas práticas de organização do código.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Funcionalidades

O site possui:

- Navegação entre as seções da página;
- Menu responsivo com botão hambúrguer;
- Menu dropdown;
- Formulário de cadastro;
- Validação de campos utilizando recursos do HTML5;
- Armazenamento dos dados do formulário utilizando `localStorage`;
- Modal de interação;
- Mensagem de confirmação utilizando toast;
- Layout responsivo para diferentes tamanhos de tela.

## Estrutura do projeto

```text
ONG- mente conecta/
│
├── index.html
├── projetos.html
├── cadastro.html
├── style.css
├── README.md
│
├── JS/
│   ├── script.js
│   └── storage.js
│
└── imagens/
    └── arquivos de imagens utilizados no projeto

    ## Organização do JavaScript

O JavaScript foi dividido em arquivos para facilitar a organização do projeto.

### script.js

Responsável pelas funcionalidades de interação da página, como:

- navegação dinâmica;
- menu hambúrguer;
- menu dropdown;
- modal;
- mensagens de confirmação.

### storage.js

Responsável pelo armazenamento dos dados do formulário no navegador utilizando `localStorage`.

Os dados são convertidos para JSON para serem armazenados e recuperados posteriormente.

## Responsividade

O projeto utiliza CSS Grid e Flexbox para organizar os elementos da página.

Também foram utilizados diferentes pontos de quebra (`breakpoints`) para adaptar o layout a diferentes tamanhos de tela.

## Versionamento

O projeto utiliza Git para controle de versão e GitHub para armazenamento do código-fonte.

Foi adotada uma organização baseada no GitFlow, utilizando branches como:

- `main` — versão principal do projeto;
- `develop` — branch de desenvolvimento;
- `feature/local-storage` — desenvolvimento de funcionalidades específicas.

Também foram utilizados commits semânticos para identificar o tipo de alteração realizada no projeto.

## Como executar o projeto

Para visualizar o projeto localmente, basta abrir o arquivo `index.html` em um navegador.

O projeto também pode ser disponibilizado por meio do GitHub Pages.

## Autora

**Glaucilene Santos Pereira**

Projeto desenvolvido para fins acadêmicos.