import { SearchIcon } from "../../public/icons";

const Header = () => {
  return (
    <div className="w-full ">
      <div className=" flex items-center justify-between">
        <p className="text-3xl">Tracker</p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none border-b-[.14rem] px-7"
          />
          <SearchIcon className={"absolute text-secTextColor max-w-5 top-0 left-0"} />
        </div>
        <div className="space-x-12 text-secTextColor">
          <button>Calender</button>
          <button>Notification</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
