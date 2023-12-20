const Modal = ({ open, setOpen }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <div
          onClick={() => setOpen(false)}
          className={`transition-all inset-0 z-40  fixed duration-700 ${
            open ? "backdrop-blur-sm bg-black/80 visible" : "backdrop-blur-0 invisible"
          }`}
        ></div>
        <div
          className={` transition-all z-[50] relative duration-700 text-white bg-white/10 w-[50rem] h-[20rem] max-w-full ${
            open ? "translate-y-0 visible" : "-translate-y-[200rem] invisible"
          }`}
        >
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col gap-3 max-w-[50%] mx-auto py-5">
              {" "}
              <label className="text-xl">What Actvity :</label>
              <input
                type="text"
                name="activity"
                className="outline-none rounded-md py-1.5 px-2 text-secTextColor"
                placeholder="Enter your Activity"
              />
            </div>
            <div className="flex flex-col gap-3 max-w-[50%] mx-auto py-5">
              {" "}
              <label className="text-xl">How much :</label>
              <input
                type="number"
                name="amount"
                className="outline-none rounded-md py-1.5 px-2 text-secTextColor"
                placeholder="Enter your Amount"
              />
            </div>{" "}
            <button className="text-center bg-[#70c1ffce] max-w-[100px] mx-auto py-3 rounded-md text-xl px-20 flex justify-center font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
