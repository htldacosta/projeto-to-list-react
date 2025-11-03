Meu Todo-List em React + TypeScript

Um projeto simples de lista de tarefas (To-do List) focado em performance e boas práticas, construído com React, Vite e TypeScript.

(Recomendo tirar um print da aplicação funcionando e adicionar aqui. Ex: ![Demo do App](caminho/para/imagem.png))

🚀 Sobre o Projeto

Este é um aplicativo de lista de tarefas "single-page" (SPA) onde o usuário pode adicionar, completar e remover tarefas. O projeto foi desenvolvido inicialmente em JavaScript e posteriormente refatorado para TypeScript, garantindo maior segurança de tipos e manutenibilidade.

O estado da aplicação é gerenciado localmente usando React Hooks (useState), e a interface é estilizada com CSS puro, demonstrando uma abordagem limpa e sem bibliotecas de UI externas.

✨ Funcionalidades

    ➕ Adicionar novas tarefas: Campo de input para criação rápida de tarefas.

    ✅ Marcar tarefas como concluídas: Altera visualmente o estado da tarefa (riscado).

    ❌ Remover tarefas da lista: Exclui tarefas permanentemente.

    📱 Layout Responsivo: O container da aplicação tem uma altura máxima e a lista de tarefas torna-se rolável, garantindo que o formulário de adição esteja sempre acessível.

🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

    React (v19): Biblioteca principal para a construção da interface de usuário.

    TypeScript: Superset do JavaScript que adiciona tipagem estática.

    Vite: Ferramenta de build e servidor de desenvolvimento de alta performance.

    CSS Puro: Para estilização manual e responsiva dos componentes (sem frameworks).

    ESLint: Para linting de código e manutenção de padrões.

📁 Estrutura de Arquivos

A estrutura de código-fonte (src/) está organizada da seguinte maneira:

src/
├── components/ # Componentes React reutilizáveis
│ ├── TodoForm.tsx
│ ├── TodoItem.tsx
│ └── TodoList.tsx
├── types.ts # Definições de tipos e interfaces (ex: interface Todo)
├── App.css # Estilos do componente App
├── App.tsx # Componente principal que gerencia o estado
├── index.css # Estilos globais (body, etc.)
└── main.tsx # Ponto de entrada da aplicação

🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em sua máquina local.

    Clone o repositório (ou use a pasta que você já tem):
    Bash

git clone https://github.com/seu-usuario/todo-list-react.git

Navegue até a pasta do projeto:
Bash

cd todo-list-react/meu-todo-list

Instale as dependências:
Bash

npm install

Execute o servidor de desenvolvimento:
Bash

    npm run dev

    Abra seu navegador e acesse http://localhost:5173 (ou o endereço indicado no seu terminal).

📄 Licença

Este projeto está licenciado sob a licença MIT.
