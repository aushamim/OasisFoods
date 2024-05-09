import useGlobalState from "../../Hooks/useGlobalState";
import ProfileNav from "../../Components/Nav/ProfileNav";

const Profile = () => {
  const { userData } = useGlobalState();

  return (
    <div className="mt-10 mb-28 grid grid-cols-4 gap-10">
      <div>
        <ProfileNav />
      </div>
      <div className="col-span-3">
        <div className="flex items-center">
          <div className="flex-grow border-b">
            <h1 className="text-2xl font-bold">
              {userData?.user?.first_name} {userData?.user?.last_name}&apos;s
              Profile
            </h1>
            <span className="w-20 h-1 bg-lime-500 block mt-2"></span>
          </div>
          <button className="btn">Edit Profile</button>
        </div>
        <table className="mt-5 text-lg border-separate border-spacing-y-2">
          <tr>
            <td className="font-semibold">Username: </td>
            <td className="pl-2">{userData?.user?.username}</td>
          </tr>
          <tr>
            <td className="font-semibold">Name: </td>
            <td className="pl-2">
              {userData?.user?.first_name} {userData?.user?.last_name}
            </td>
          </tr>
          <tr>
            <td className="font-semibold">Phone No. : </td>
            <td className="pl-2">{userData?.phone_no}</td>
          </tr>
          <tr>
            <td className="font-semibold">Address: </td>
            <td className="pl-2">{userData?.address}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Profile;
