import Button from "./Button";
import './Parentof.css';

function Parentof() {
  function handleSave() {
    alert("Save clicked");
  }

  function handleDelete() {
    alert("Delete clicked");
  }

  function handleUpdate() {
    alert("Update clicked");
  }

  return (
    <div className="parentof-container">
      <Button text="Save" onClick={handleSave} />
      <Button text="Delete" onClick={handleDelete} />
      <Button text="Update" onClick={handleUpdate} />
    </div>
  );
}

export default Parentof;