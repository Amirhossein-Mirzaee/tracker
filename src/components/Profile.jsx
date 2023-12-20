import { PenIcon, SettingIcon, WalletIcon } from "../../public/icons";
import userIcon from "/user.jpg";

const Profile = () => {
  return (
    <div className="bg-gray-100 max-w-[300px] w-full px-8 mx-auto py-7 mt-7 rounded-md h-full z-20">
      <div className=" space-y-5">
        <div className="max-w-[68px] rounded-full border-4 border-gray-400 mx-auto cursor-pointer ">
          <img src={userIcon} alt="userIcon" className="w-full rounded-full" />
        </div>
        <p className="max-w-[150px] mx-auto text-center ">Welcome Soheil!</p>
        <div className="flex flex-col justify-center max-w-[150px] mx-auto space-y-4">
          <div className="flex justify-center items-center gap-9 hover:bg-gray-300 py-1 rounded-full cursor-pointer transition-all">
            <p className="flex-1 max-w-16 text-sm text-secTextColor">Profile</p>
            <PenIcon className={"max-w-[20px] text-secTextColor flex-1"} />
          </div>
          <div className="flex justify-center items-center gap-9  hover:bg-gray-300 py-1 rounded-full cursor-pointer transition-all">
            <p className="flex-1 max-w-16 text-sm text-secTextColor">Setting</p>
            <SettingIcon className={"max-w-[20px] text-secTextColor flex-1"} />
          </div>
          <div className="flex justify-center items-center gap-9  hover:bg-gray-300 py-1 rounded-full cursor-pointer transition-all">
            <p className="flex-1 max-w-16 text-sm text-secTextColor">Wallet</p>
            <WalletIcon className={"max-w-[20px] text-secTextColor flex-1"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
