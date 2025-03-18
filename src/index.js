const submitButton = document.getElementById("submitTodo");
const containerTodos = document.getElementById("containerTodos");
let todos = [];
let index = 0;


submitButton.addEventListener("click", () => {
  const inputan = document.getElementById("inputTodo");

  if (inputan.value.trim() === "") return; 

  todos.push(inputan.value);

  
  containerTodos.innerHTML += `
    <div class="todo">
      <h1>${index + 1}</h1>
      <p class="todo-text">${inputan.value}</p>
      <button class="Edit-Button">Edit</button>
      <button class="Delete-Button">Delete</button>
    </div>
  `;

  index += 1;
  inputan.value = ""; 
});

//fungsi edit & hapus 
containerTodos.addEventListener("click", (event) => {
  if (event.target.classList.contains("Delete-Button")) {
    const todoElement = event.target.parentElement; 
    const todoIndex = Array.from(containerTodos.children).indexOf(todoElement); 

    todos.splice(todoIndex, 1); // Hapus dari array
    todoElement.remove(); // Hapus dari tampilan
    index -= 1;
  }

  if (event.target.classList.contains("Edit-Button")) {
    const todoElement = event.target.parentElement;
    const todoTextElement = todoElement.querySelector(".todo-text");
    const newText = prompt("Edit your todo:", todoTextElement.textContent);
    
    if (newText !== null && newText.trim() !== "") {
      todoTextElement.textContent = newText;
      const todoIndex = Array.from(containerTodos.children).indexOf(todoElement);
      todos[todoIndex] = newText; // Perbarui array
    }
  }
});
