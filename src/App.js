import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function App() {
  const [item, setItem] = useState("");
  const [updated, setUpdated] = useState([]);

  const input = (e) => {
    setItem(e.target.value);
  };

  const handleClick = () => {
    setUpdated([...updated, item]);
    console.log(updated);
  };

  // Filter a new list and display all indexes apart from one which matches the id
  function handleRemove(listKeyId) {
    const newList = updated.filter((item, index) => index !== listKeyId);
    setUpdated(newList);
  }

  const listItems = updated.map((data, key) => {
    return (
      <li
        key={key}
        className="d-flex ms-3 me-3 justify-content-between list-group-item"
      >
        {data}
        <Button className="btn btn-danger" onClick={() => handleRemove(key)}>
          Delete
        </Button>
      </li>
    );
  });

  return (
    <div className="App container-fluid">
      <h1>To Do List</h1>
      <form className="container-fluid">
        <input
          className="form-control"
          id="item"
          name="item"
          type="text"
          placeholder="Add Item"
          onChange={input}
          value={item}
        />
        <Button className="addBtn" onClick={() => handleClick()}>
          Add
        </Button>
      </form>
      <ul className="list-group">{listItems}</ul>
    </div>
  );
}

// ANOTHER WAY OF DOIND IT BUT ISNT CORRECT AS YOU HAVE EMPTY UPDATED AND SETLISTARRAY
// const [item, setItem] = useState("");
// const [updated, setUpdated] = useState(item);
// const [listArr, setListArry] = useState([])

// const input = (e) => {
//   setItem(e.target.value);
// };

// const handleClick = () => {
//   setUpdated(item)
//   listArr.push(item)
//   console.log(listArr);
// };

// const listItems = listArr.map((data) => {
//   return (
//     <li>
//       {data}
//       <button>Delete</button>
//     </li>
//   );
// });
