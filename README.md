# Lista de Tarefas

Aplicação web simples para organizar tarefas do dia a dia. Permite adicionar itens, marcar tarefas como concluídas, editar sua descrição e removê-las com confirmação.

## Objetivo

Oferecer uma interface direta para acompanhar tarefas em uma lista, usando tecnologias web básicas, sem instalação de dependências ou configuração de servidor.

## Funcionalidades

- Adicionar tarefas à lista; entradas vazias são ignoradas.
- Marcar e desmarcar tarefas como concluídas ao clicar no item.
- Mover tarefas concluídas para o fim da lista e reabrir tarefas não concluídas no início.
- Editar o texto de uma tarefa por meio de uma janela modal, com opção para salvar ou cancelar.
- Excluir tarefas após confirmação do navegador.
- Exibir uma lista com rolagem quando há muitos itens.

## Tecnologias

- **HTML5** — estrutura da interface.
- **CSS3** — estilos, layout, modal e estados visuais.
- **JavaScript** — criação e manipulação das tarefas no navegador.

Não há frameworks, bibliotecas externas, etapa de build ou backend identificados no projeto.

## Estrutura do projeto

```text
.
├── tarefas.html  # Interface da lista de tarefas
├── style.css     # Estilos da aplicação
└── app.js        # Lógica para adicionar, editar, concluir e excluir tarefas
```

## Website hospedado

O website está hospedado no GitHub Pages e pode ser acessado pelo link:

[https://julialafaelly.github.io/Lista-de-Tarefas/]

## Limitações

- As tarefas existem apenas enquanto a página permanece aberta; não há persistência em armazenamento local, banco de dados ou servidor.
- Não há categorias, prazos, filtros ou sincronização entre dispositivos.

## Licença

Nenhuma licença específica foi identificada no repositório. Consulte a pessoa autora antes de reutilizar ou redistribuir o projeto.
