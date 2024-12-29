import API from "@/lib/api";

type Product = {
  success: boolean;
  data: {
    price: string;
    image: string;
    id: number;
    title: string;
    description: string;
    user_id: number;
  };
};

export const fetchProduct = async () => {
  const { data } = await API.get("/product");
  return data.data;
};

export const fetchProductById = async (
  id: number
): Promise<Product["data"]> => {
  const { data } = await API.get<Product>(`/product/${id}`);
  return data.data;
};

export const purchaseProduct = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 2500);
  });
};
