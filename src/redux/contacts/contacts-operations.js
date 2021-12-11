import { getContactsApi, setContactsApi } from "services/api-services";
import { addContacts, getContacts } from "./contacts-action";

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
