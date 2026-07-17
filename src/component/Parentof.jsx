import Button from "./Button";

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
    <div>
      <Button text="Save" onClick={handleSave} />
      <Button text="Delete" onClick={handleDelete} />
      <Button text="Update" onClick={handleUpdate} />
    </div>
  );
}

export default Parentof;