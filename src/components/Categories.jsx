import { useState } from "react";
import Modal from "../utils/Modal";
// import Modal from "../utils/Modal";

const Categories = () => {
  const [open, setOpen] = useState(false);

  const hanldeAddNew = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div>
      <div className="flex flex-col  items-start gap-10 ">
        <p className="text-2xl">Categories</p>
        <div className="bg-[#70C0FF] p-4 rounded-md text-white font-semibold text-xl">
          <button onClick={hanldeAddNew}>Add new +</button>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Categories;
