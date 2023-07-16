import axios from "axios";

const LifeHackApi = axios.create({
  baseURL: "http://localhost:8888",
});

const addToken = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export const register = (input) => {
  console.log(input);
  return LifeHackApi.post("/auth/register", input);
};

export const login = (input) => {
  return LifeHackApi.post("/auth/login", input);
};
export const getMe = (token) => {
  return LifeHackApi.get("/auth/getme", addToken(token));
};

export const getColumn = (token) => {
  return LifeHackApi.get("/column/getAllColumn", addToken(token));
};
export const getColumnById = (id, token) => {
  return LifeHackApi.get(`/column/${id}`, addToken(token));
};
export const addColumn = (input, token) => {
  return LifeHackApi.post("/column/create", input, addToken(token));
};
export const deleteColumn = (id, token) => {
  return LifeHackApi.delete(`/column/${id}`, addToken(token));
};
export const updateColumn = (id, input, token) => {
  return LifeHackApi.patch(`/column/${id}`, input, addToken(token));
};
