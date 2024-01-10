import { Component } from "react";
import "./ToDo.css"; 

class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      todo: [],
    };
  }

  render() {
    let { text, todo } = this.state;

    let handleChange = (event) => {
      this.setState({ text: event.target.value });
    };

    let handleClick = () => {
      this.setState({
        todo: [...todo, text],
      });
    };

    let handleUpdate = (index) => {
      let updatedText = prompt("Enter a new To Do");
      let filterTodo = todo.map((el, i) => (i === index ? updatedText : el));
      this.setState({
        todo: filterTodo,
      });
    };

    let handleDelete = (index) => {
      let deletedData = todo.filter((el, i) => i !== index);
      this.setState({
        todo: deletedData,
      });
    };

    return (
      <>
        <div className="todo-input">
          <input
            type="text"
            placeholder="ENTER NEW TEXT"
            onChange={handleChange}
          />
          <button onClick={handleClick}>ADD TO DO</button>
        </div>

        <div className="todo-list">
          {todo.map((el, i) => (
            <div key={i} className="todo-item">
              <p>{el}</p>
              <button onClick={() => handleUpdate(i)}>Update Todo</button>
              <button onClick={() => handleDelete(i)}>Delete Todo</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ToDo;
