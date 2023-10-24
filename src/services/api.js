// src/services/api.js

import axios from "axios";

const BASE_URL = "https://api."; // Replace with your API base URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to retrieve JWT token from local storage
const getAuthToken = () => {
  return localStorage.getItem("token");
};

export default async function apiRequest({
  endpoint,
  method = "GET",
  data = null,
  sendConfig = false,
}) {
  try {
    const authToken = getAuthToken();
    const headers = {
      "Content-Type": "application/json",
    };
    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`;
    }
    const response = await api.request({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      headers,
    });
    if (sendConfig) return response;
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
