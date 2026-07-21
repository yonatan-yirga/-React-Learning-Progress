import { useState } from "react";
import Modal from './Model'
function Portalsshow() {
  

 const [open, setOpen] = useState(false);

    return (
        <div>

            <h1>Laptop</h1>

            <p>$1200</p>

            <button onClick={() => setOpen(true)}>
                Delete Product
            </button>

            {open && (
                <Modal>

                    <div>

                        <h2>Delete Product?</h2>

                        <button onClick={() => setOpen(false)}>
                            Cancel
                        </button>

                        <button>
                            Delete
                        </button>

                    </div>

                </Modal>
            )}


    </div>
  )
}

export default Portalsshow