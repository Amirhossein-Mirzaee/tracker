const Modal = ({ open, setOpen }) => {
  return (
    <>
      <div>
        <div
          onClick={() => setOpen(false)}
          className={`transition-all inset-0 z-40  fixed ${open ? "backdrop-blur-sm visible" : "backdrop-blur-0 invisible"}`}
        ></div>
        <div>children</div>
      </div>
    </>
  );
};

export default Modal;
