import SupportList from "@/containers/dashboard/contact-list";
import { getContactList } from "@/queries/contact";

const page = async () => {
  const data = await getContactList();
  return (
    <>
      <SupportList data={data} />
    </>
  );
};

export default page;
