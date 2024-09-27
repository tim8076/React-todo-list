import { useEffect, useMemo, useState } from "react";
import "./assets/scss/all.scss";
import TheHaeder from "./components/TheHeader";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
function App() {
  const todoDefaultItem = {
    isCompleted: false,
    title: "",
    isImportant: false,
    deadlineMonth: "",
    deadlineTime: "",
    file: "",
    comment: "",
  };
  const [activePage, setActivePage] = useState("all");
  const [isAdding, setIsAdding] = useState(false);
  const [addTodoItem, setAddTodoItem] = useState({ ...todoDefaultItem });
  const [todolist, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todo-list")) || []
  );

  function addTodo() {
    setIsAdding(true);
    setAddTodoItem({ ...todoDefaultItem });
  }

  function setTodo(obj) {
    setAddTodoItem((pre) => ({
      ...pre,
      ...obj,
    }));
  }

  function closeAddTodo() {
    setIsAdding(false);
    setAddTodoItem({ ...todoDefaultItem });
  }

  function saveTodoList(todoItem) {
    setTodoList((pre) => {
      const id = new Date().getTime();
      const todos = [
        ...pre,
        {
          id,
          ...todoItem,
        },
      ];
      return todos;
    });
    setAddTodoItem({ ...todoDefaultItem });
    setIsAdding(false);
  }

  const [editTodoItem, setEditTodoItem] = useState({});

  function editTodo(item) {
    setEditTodoItem((pre) => ({
      ...pre,
      ...item,
    }));
  }

  function closeEditTodo() {
    setEditTodoItem({});
  }

  function saveEditTodo() {
    const id = editTodoItem.id;
    const index = todolist.findIndex((item) => item.id === id);
    const list = [...todolist];
    list[index] = editTodoItem;
    setTodoList(list);
    setEditTodoItem({});
  }

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todolist));
  }, [todolist]);

  const filterTodos = useMemo(() => {
    let list;
    if (activePage === "all") {
      list = todolist;
    } else if (activePage === "progress") {
      list = todolist.filter((todo) => todo.isCompleted === false);
    } else if (activePage === "completed") {
      list = todolist.filter((todo) => todo.isCompleted === true);
    }
    return list.sort((a, b) => {
      if (a.isImportant && !b.isImportant) {
        return -1;
      } else if (!a.isImportant && b.isImportant) {
        return 1;
      }
      return 0;
    });
  }, [todolist, activePage]);

  return (
    <div className="App">
      <TheHaeder activePage={activePage} setActivePage={setActivePage} />
      <div className="bg-gray-200 pt-6 pb-12 min-vh-body">
        <div className="container">
          <button
            type="button"
            className={`btn btn-light p-4 px-md-8 bg-white text-gray-300 fs-md-1 w-100 mb-6 ${
              isAdding ? "d-none" : "d-flex"
            }`}
            onClick={() => addTodo()}
          >
            <i className="bi bi-plus-lg me-3"></i>
            Add Task
          </button>
          <AddTodo
            isAdding={isAdding}
            addTodoItem={addTodoItem}
            setTodo={setTodo}
            closeAddTod={closeAddTodo}
            saveTodoList={saveTodoList}
          />
          <ul className="list-unstyled m-0">
            {filterTodos.map((item) => {
              return (
                <li className="mb-3" key={item.id}>
                  <TodoItem
                    editTodoItem={editTodoItem}
                    setEditTodoItem={setEditTodoItem}
                    editTodo={editTodo}
                    todoItem={item}
                    closeEditTodo={closeEditTodo}
                    saveEditTodo={saveEditTodo}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
