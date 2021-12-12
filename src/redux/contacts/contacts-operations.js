import {
  deleteContactsApi,
  getContactsApi,
  setContactsApi,
} from "services/api-services";
import { addContacts, deleteContacts, getContacts } from "./contacts-action";

export const addContactOperation = (contact) => async (dispatch, getState) => {
  try {
    const data = await setContactsApi(contact);
    dispatch(addContacts(data));
  } catch (error) {
    console.log(error);
  }
};
export const getContactsOperation = () => async (dispatch, getState) => {
  try {
    const contacts = await getContactsApi();
    dispatch(getContacts(contacts));
    console.log(contacts);
  } catch (error) {
    console.log(error);
  }
};

export const deleteContactsOperation = (id) => async (dispatch, getState) => {
  try {
    await deleteContactsApi(id);
    dispatch(deleteContacts(id));
  } catch (error) {
    console.log(error);
  }
};
