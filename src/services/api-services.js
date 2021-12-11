import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const getContactsApi = async () => {
  const { data } = await axios.get("/contacts");
  return data;
};
export const setContactsApi = async (contact) => {
  const response = await axios.post("/contacts", contact);
  console.log(response.data);
  return response.data;
};
export const deleteContactsApi = async (id) => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
