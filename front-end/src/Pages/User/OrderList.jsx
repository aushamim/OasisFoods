import ProfileNav from "../../Components/Nav/ProfileNav";
import useGlobalState from "../../Hooks/useGlobalState";

const OrderList = () => {
  const { userData } = useGlobalState();
  return (
    <div className="mt-10 mb-28 grid grid-cols-4 gap-10">
      <div>
        <ProfileNav />
      </div>
      <div className="col-span-3">
        <div className="border-b">
          <h1 className="text-2xl font-bold">
            {userData?.user?.first_name} {userData?.user?.last_name}&apos;s All
            Orders
          </h1>
          <span className="w-20 h-1 bg-lime-500 block mt-2"></span>
        </div>
        <div className="mt-5">Order List</div>
      </div>
    </div>
  );
};

export default OrderList;
