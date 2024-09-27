export default function AddTodo({
  isAdding,
  addTodoItem,
  setTodo,
  closeAddTodo,
  saveTodoList,
}) {
  return (
    <div
      className={`accordion ${isAdding ? "d-block" : "d-none"} mb-3`}
      id="accordionExample"
    >
      <div className="accordion-item overflow-hidden">
        <h2 className="accordion-header">
          <button
            className="accordion-button py-md-6 px-md-8 bg-gray-100 justify-content-between"
            type="button"
          >
            <div className="d-flex align-items-center">
              <input
                className="form-check-input me-2 me-md-4"
                type="checkbox"
                checked={addTodoItem.isCompleted}
                onChange={() =>
                  setTodo({
                    isCompleted: !addTodoItem.isCompleted,
                  })
                }
              />
              <input
                className="form-control bg-transparent border-0 fs-md-1 text-dark"
                type="text"
                placeholder="Type Something Here..."
                value={addTodoItem.title}
                onChange={(e) =>
                  setTodo({
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div className="fs-1">
              <i
                className={`bi ${
                  addTodoItem.isImportant ? "bi-star-fill" : "bi-star"
                } me-4 me-md-8`}
                onClick={() =>
                  setTodo({
                    isImportant: !addTodoItem.isImportant, // 切換狀態
                  })
                }
              ></i>
              <i className="bi bi-pencil-fill text-primary"></i>
            </div>
          </button>
        </h2>
        <div
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body bg-gray-100 p-4 px-md-18 py-md-6">
            <div className="mb-3 mb-md-6">
              <label htmlFor="addDeadline" className="form-label fs-2">
                <i className="bi bi-calendar3 fs-3 me-2"></i>
                Deadline
              </label>
              <div className="ps-md-6">
                <div className="row gx-2 z-1">
                  <div className="col-6 col-md-5">
                    <input
                      type="date"
                      className="form-control"
                      id="addDeadline"
                      value={addTodoItem.deadlineMonth}
                      onChange={(e) =>
                        setTodo({
                          deadlineMonth: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-6 col-md-5">
                    <input
                      type="time"
                      className="form-control"
                      value={addTodoItem.deadlineTime}
                      onChange={(e) =>
                        setTodo({
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
              <div className="ps-md-6">
                <input
                  type="file"
                  className="position-absolute start-0 top-0 w-0 h-0 opacity-0"
                  id="addFile"
                  value={addTodoItem.file}
                  onChange={(e) =>
                    setTodo({
                      file: e.target.value,
                    })
                  }
                />
                <label
                  htmlFor="addFile"
                  className="w-32px h-32px bg-gray-300 d-block rounded cursor-pointer
                            d-flex justify-content-center align-items-center"
                >
                  <i className="bi bi-plus-lg text-light"></i>
                </label>
              </div>
            </div>
            <div className="mb-3 mb-md-6">
              <label htmlFor="addComment" className="form-label fs-2">
                <i className="bi bi-chat-dots fs-3 me-2"></i>
                Comment
              </label>
              <div className="ps-md-6">
                <textarea
                  className="form-control"
                  id="addComment"
                  rows="4"
                  value={addTodoItem.comment}
                  onChange={(e) =>
                    setTodo({
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
                onClick={() => closeAddTodo()}
              >
                Cancel
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="btn btn-primary text-light py-4 w-100 fs-md-1 rounded-0"
                onClick={() => saveTodoList(addTodoItem)}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
