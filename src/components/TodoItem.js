export default function TodoItem({
  todoItem,
  editTodo,
  closeEditTodo,
  saveEditTodo,
  setEditTodoItem,
  editTodoItem,
}) {
  const isEditing = editTodoItem.id === todoItem.id;
  const nowTodo = isEditing ? editTodoItem : todoItem;
  return (
    <div className="accordion-item overflow-hidden">
      <h2 className="accordion-header">
        <button
          className={`accordion-button p-4 py-md-6 px-md-8 justify-content-between ${
            nowTodo.isImportant ? "bg-secondary-100" : "bg-gray-100"
          }`}
          type="button"
        >
          <div className="d-flex align-items-center">
            <input
              className="form-check-input me-2 me-md-4"
              type="checkbox"
              checked={nowTodo.isCompleted}
              onChange={() =>
                editTodo({
                  isCompleted: !nowTodo.isCompleted,
                })
              }
            />
            <input
              className={`form-control bg-transparent border-0 fs-md-1 
                ${
                  nowTodo.isCompleted
                    ? "text-decoration-line-through text-gray-400"
                    : "text-dark"
                }`}
              type="text"
              placeholder="Type Something Here..."
              value={nowTodo.title}
              onChange={(e) =>
                editTodo({
                  title: e.target.value,
                })
              }
            />
          </div>
          <div className="fs-1">
            <i
              className={`bi ${
                nowTodo.isImportant ? "bi-star-fill text-secondary" : "bi-star"
              } me-4 me-md-8`}
              onClick={() =>
                editTodo({
                  isImportant: !nowTodo.isImportant, // 切換狀態
                })
              }
            ></i>
            <i
              className="bi bi-pencil-fill text-primary"
              onClick={() => setEditTodoItem({ ...todoItem })}
            ></i>
          </div>
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${isEditing ? "show" : ""}`}>
        <div className="accordion-body bg-gray-100 p-4 px-md-18 py-md-6">
          <div className="mb-3 mb-md-6">
            <label htmlFor={`date-${nowTodo.id}`} className="form-label fs-2">
              <i className="bi bi-calendar3 fs-3 me-2"></i>
              Deadline
            </label>
            <div className="ps-md-6">
              <div className="row gx-2 z-1">
                <div className="col-6 col-md-5">
                  <input
                    type="date"
                    className="form-control"
                    id={`date-${nowTodo.id}`}
                    value={nowTodo.deadlineMonth}
                    onChange={(e) =>
                      editTodo({
                        deadlineMonth: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-6 col-md-5">
                  <input
                    type="time"
                    className="form-control"
                    value={nowTodo.deadlineTime}
                    onChange={(e) =>
                      editTodo({
                        deadlineTime: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 mb-md-6">
            <p htmlFor="addFile" className="form-label fs-2">
              <i className="bi bi-file-earmark fs-3 me-2"></i>
              File
            </p>
            <div className="ps-md-6 d-flex align-items-center">
              <input
                type="file"
                className="position-absolute start-0 top-0 w-0 h-0 opacity-0"
                id={`file-${nowTodo.id}`}
                onChange={(e) =>
                  editTodo({
                    file: e.target.value,
                  })
                }
              />
              <label
                htmlFor={`file-${nowTodo.id}`}
                className="w-32px h-32px bg-gray-300 d-block rounded cursor-pointer
                  d-flex justify-content-center align-items-center me-3"
              >
                <i className="bi bi-plus-lg text-light"></i>
              </label>
              <a href={nowTodo.file} download>
                {nowTodo.file}
              </a>
            </div>
          </div>
          <div className="mb-3 mb-md-6">
            <label
              htmlFor={`comment-${nowTodo.id}`}
              className="form-label fs-2"
            >
              <i className="bi bi-chat-dots fs-3 me-2"></i>
              Comment
            </label>
            <div className="ps-md-6">
              <textarea
                className="form-control"
                id={`comment-${nowTodo.id}`}
                rows="4"
                value={nowTodo.comment}
                onChange={(e) =>
                  editTodo({
                    comment: e.target.value,
                  })
                }
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          <div className="col-6">
            <button
              type="button"
              className="btn btn-light text-danger py-4 w-100 fs-md-1 rounded-0"
              onClick={closeEditTodo}
            >
              Cancel
            </button>
          </div>
          <div className="col-6">
            <button
              type="button"
              className="btn btn-primary text-light py-4 w-100 fs-md-1 rounded-0"
              onClick={saveEditTodo}
            >
              Edit Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
