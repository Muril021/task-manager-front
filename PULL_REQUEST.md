# Descrição do projeto Task Manager Frontend
Aqui está sendo descrito quais são as funcionalidades do projeto e o que cada uma dessas funcionalidades está fazendo.

## Componente principal
- App.tsx:
Este arquivo configura o componente principal do aplicativo. Ele incorpora as rotas definidas em `RoutesApp.tsx` para facilitar a navegação e utiliza o `ToastContainer` do pacote `react-toastify` para notificações visuais.

---

## Definição das rotas
- RoutesApp.tsx:
Responsável por definir as rotas da aplicação utilizando `react-router-dom`. Mapeia URLs para os componentes correspondentes, criando a estrutura de navegação do aplicativo.

---

## Instância da API
- api.tsx:
Configura uma instância do Axios para facilitar chamadas à API. A URL base é definida como `http://localhost:5000`, o endereço da API utilizada pelo aplicativo.

---

## Páginas da aplicação
- Home.tsx:
Exibe a lista de tarefas obtidas da API. Permite adicionar novas tarefas e apresenta cada tarefa usando o componente `Task`. Possui tratamento de erro para dados não encontrados.

---

- Register.tsx:
Permite a criação de uma nova tarefa. Após preencher o formulário e enviar, a tarefa é cadastrada na API, a lista é atualizada e o usuário é redirecionado para a página inicial.

---

- Edit.tsx:
Permite a edição de uma tarefa existente. Obtém os detalhes da tarefa da API e, após a edição, atualiza a tarefa na API. Após o envio do formulário, o usuário é redirecionado para a página inicial.

---

- NotFound.tsx:
Exibido quando uma página não é encontrada (erro 404). Fornece uma mensagem amigável e um link para retornar à lista de tarefas na página inicial.

---

## Componente da aplicação
- Task.tsx:
Representa uma única tarefa na lista. Exibe título, descrição e fornece opções para editar ou remover a tarefa. Se favoritada, um ícone de estrela é exibido. Notifica o usuário sobre sucesso ou erro ao remover uma tarefa.
