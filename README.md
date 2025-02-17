# Listar tarefas App


```plaintext
to-do-list-app/
├── src/
│   ├── components/
│   │   ├── AddTask.js
│   │   ├── EditTask.js
│   │   ├── Task.js
│   │   └── TaskList.js
│   ├── data/
│   │   └── db.json
│   ├── pages/
│   │   ├── HomePage.js
│   │   └── TaskDetailsPage.js
│   ├── App.js
│   └── index.js
├── public/
│   ├── index.html
│   └── ...
├── package.json
└── README.md
```
## 🚀 Como Executar o Projeto

#### Pré-requisitos

- Node.js;
- Npm;
- React-dom;
- Lucide-react;
- Axios;


#### Usar versão Node do projeto:

Digite o seguinte comando no terminal:

```bash
node -v > .nvmrc
```

#### Passos para Execução

1. #### Clone o Repositório**
   ```bash
   git clone https://github.com/anaisa-teodoro/to-do-list-aula3
   ```

2. #### Instale as Dependências
   ```bash
   npm install
   ```

3. #### Inicie o Banco de Dados (JSON Server)
   ```bash
   npx json-server --watch ./src/data/db.json --port 3001
   ```
   - Certifique-se de que o arquivo `db.json` existe na pasta `data` do projeto. Ele deve conter uma estrutura inicial como esta:
     ```json
     {
       "tarefas": [
         { "id": "0101",
         "title": "Estudar JavaScript",
         "completed": false 
         }]},
     ```

4. #### Inicie o Servidor de Desenvolvimento
   ```bash
   npm start
   ```

5. ### Acesse a Aplicação
   #### Abra o navegador e acesse: 
   
   [http://localhost:3000](http://localhost:3000)
  
    [http://localhost:3001/tarefas](http://localhost:3001/tarefas)

---

## 🌟 Como Usar a Aplicação

1. #### Adicionar uma Nova Tarefa
   - Na página inicial, insira o título da tarefa no campo de texto e clique em "Adicionar" a tarefa".
   - Podem serem adicionadas ao editar a tarefa.

2. #### Marcar como Concluída
   - Clique na caixa de seleção ao lado da tarefa para marcá-la como concluída.

3. #### Editar uma Tarefa
   - Clique no ícone de edição (lápis) para alterar o título ou adicionar observações.

4. #### Excluir uma Tarefa
   - Clique no ícone de lixeira para remover uma tarefa.

5. #### Filtrar Tarefas
   - Use os botões "Todas", "Pendentes" ou "Concluídas" para filtrar a lista de tarefas.

6. #### Visualizar Detalhes
   - Clique no título de uma tarefa para acessar sua página de detalhes.

---

_Praticado esse exercício em uma das aulas do Devs2Blu [2025]._


