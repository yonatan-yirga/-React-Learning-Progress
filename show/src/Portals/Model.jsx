import { createPortal } from "react-dom";

const modalRoot = typeof document !== "undefined" ? document.getElementById("modal-root") : null;

function Modal({ children }) {
    if (!modalRoot) return null;

    return createPortal(
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
        }}>
            <div style={{
                background: "white",
                padding: "24px",
                borderRadius: "8px",
                minWidth: "300px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}>
                {children}
            </div>
        </div>,
        modalRoot
    );
}

export default Modal