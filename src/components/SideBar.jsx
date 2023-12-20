const SideBar = () => {
  return (
    <div className="w-full max-w-[400px]">
      <div className="flex flex-col gap-4 text-secTextColor ">
        <a
          className="hover:text-textColor w-fit px-3 hover:bg-gray-300 py-1 rounded-full cursor-pointer transition-all"
          href=""
        >
          Home
        </a>
        <a
          className="hover:text-textColor w-fit px-3 hover:bg-gray-300 py-1 rounded-full cursor-pointer transition-all"
          href=""
        >
          Categories
        </a>
        <a
          className="hover:text-textColor w-fit px-3 hover:bg-gray-300 py-1 rounded-full cursor-pointer transition-all"
          href=""
        >
          Tanasactions
        </a>
        <a
          className="hover:text-textColor w-fit px-3 hover:bg-gray-300 py-1 rounded-full cursor-pointer transition-all"
          href=""
        >
          Calender
        </a>
        <a
          className="hover:text-textColor w-fit px-3 hover:bg-gray-300 py-1 rounded-full cursor-pointer transition-all"
          href=""
        >
          Events
        </a>
        <a
          className="hover:text-textColor w-fit px-3 hover:bg-gray-300 py-1 rounded-full cursor-pointer transition-all"
          href=""
        >
          Setting
        </a>
      </div>
    </div>
  );
};

export default SideBar;
