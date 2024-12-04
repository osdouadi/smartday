import React from "react";
import ContactForm from "@/components/forms/contact-form";

const ContactContainer: React.FC = () => {
  return (
    <section className="w-full bg-gray-100 flex flex-col gap-5 md:px-0">
      <ContactForm />
    </section>
  );
};

export default ContactContainer;
