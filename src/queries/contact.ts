"use server";

import { connect } from "@/db/database-config";
import Contact from "@/models/contact.model";
import { ContactData } from "@/types/contact-data";

export const getContactList = async () => {
  await connect();

  try {
    const contactList = await Contact.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(contactList));
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch contact list");
  }
};

export const getContactById = async (contactId: string) => {
  try {
    await connect();

    if (!contactId) {
      throw new Error("Id was not provided");
    }

    const contactById = await Contact.findById(contactId);
    if (!contactById) {
      throw new Error("Contact not found");
    }
    return JSON.parse(JSON.stringify(contactById));
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch get contact details");
  }
};

export const createContact = async (contactData: ContactData) => {
  try {
    await connect();

    const contactDetails = await Contact.create({
      fullName: contactData.fullName,
      email: contactData.email,
      phoneNumber: contactData.phoneNumber,
      letterTitle: contactData.letterTitle,
      letterSubject: contactData.letterSubject,
    });

    return JSON.stringify(contactDetails);
  } catch (error: any) {
    throw new Error(error.message || "Failed to create contact");
  }
};

export const deleteContact = async (contactId: string) => {
  try {
    await connect();

    if (!contactId) {
      throw new Error("Id was not provided");
    }
    return await Contact.findByIdAndDelete(contactId);
  } catch (error: any) {
    throw new Error(error.message || "Failed to delete contact");
  }
};

export const deleteContactList = async () => {
  try {
    await connect();
    
    return await Contact.deleteMany({});
  } catch (error: any) {
    throw new Error(error.message || "Failed to delete contact");
  }
};
