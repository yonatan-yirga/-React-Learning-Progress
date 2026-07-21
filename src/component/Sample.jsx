import Button from './Button';
import './Sample.css';

function Sample() {
  return (
    <div className="sample-container">
      <span>Sample</span>
      <Button text="Save" onClick={() => alert("Save clicked")} />
    </div>
  )
}

export default Sample