import React, { useState } from "react";
import "./style.scss";

interface IProps {
  buttonTitle: string;
  children: any;
  title: string;
  id: string;
  color: string;
  buttonTextColor: string;
}

const Modal = ({
  buttonTitle,
  children,
  title,
  id,
  color,
  buttonTextColor,
}: IProps) => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = (e: any) => {
    console.log(e.target);
    console.log(e.target.id);
    if (!e.target.closest(".modal__paper") || e.target.id === id) {
      setShow(false);
    }
  };

  return (
    <>
      <button
        className="button"
        onClick={handleShow}
        style={{
          background: color,
          borderColor: color,
          color: buttonTextColor,
        }}
      >
        {buttonTitle}
      </button>
      <div
        className={`modal ${show ? "show-modal" : ""}`}
        onClick={handleClose}
        id={id}
      >
        <div className={`modal__paper ${show ? "show-modal" : ""}`}>
          <div className="modal__header">
            <h2>{title}</h2>
            <button className="modal__close-btn" onClick={() => setShow(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
              >
                <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
                <path d="M0 0h48v48h-48z" fill="none" />
              </svg>
            </button>
          </div>
          <div className="modal__body">{show ? children : <></>}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
