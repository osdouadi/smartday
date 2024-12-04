import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full w-[40%] border-l-2 border-card bg-card">
      <ul>
        <li>إعدادات المظهر</li>
        <li>بيانات الشركة</li>
        <li>إعدادات المستخدمين</li>
        <li>إعدادات اللغة</li>
      </ul>
    </div>
  );
};

export default Sidebar;
