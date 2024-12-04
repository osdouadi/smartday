import Header from "@/components/dashboard/ui/header";
import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "لوحة التحكم | الإعدادات",
};

const SettingsLayout = ({ children }: Props) => {
  return (
    <main>
      <Header />
      <div className="flex pt-[110px] px-4 py-10">
        {children}
      </div>
    </main>
  );
};

export default SettingsLayout;
