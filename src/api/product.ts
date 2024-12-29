import API from "@/lib/api";

export const fetchProduct = async () => {
  const { data } = await API.get("/product");
  return data.data;
};
