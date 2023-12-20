import Categories from "../components/Categories";
import Header from "../components/Header";
import Profile from "../components/Profile";
import SideBar from "../components/SideBar";

const Layout = () => {
  return (
    <div className={`max-w-[1600px] mx-auto flex flex-col mt-5 transition-all `}>
      <div className="flex items-stretch h-full max-h-[100px] gap-10">
        <Header />
        <Profile />
      </div>
      <div className="flex">
        <SideBar />
        <Categories />
      </div>
    </div>
  );
};

export default Layout;
