"use client";

import React from "react";
const CustomMap = () => {


  return (
    <div className="h-full w-full border-2 border-primary dark:border-white overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.0183500905923!2d46.735649099999996!3d24.657496699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f050023948ddd%3A0x3751c521344eee67!2sSmart%20Day%20Trading!5e0!3m2!1sen!2sdz!4v1725708921869!5m2!1sen!2sdz"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default CustomMap;
