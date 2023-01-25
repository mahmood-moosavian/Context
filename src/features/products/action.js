import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const products = await get();
    return products;
  }
);

export const showProducts = createAsyncThunk(
  "products/showProducts",
  async () => {
    let data = [];
    return data;
  }
);

async function get() {
  try {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => data.splice(0, 30));
    return response;
  } catch (error) {
    console.log(error);
  }
}
