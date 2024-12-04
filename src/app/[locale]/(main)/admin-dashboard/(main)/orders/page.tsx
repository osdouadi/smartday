import OrderList from "@/containers/dashboard/order-list";
import { getOrdersList } from "@/queries/order";

const page = async () => {
  const data = await getOrdersList();
  return (
    <>
      <OrderList data={data} />
    </>
  );
};

export default page;
