import { fetchProduct, fetchProductById } from "@/api/product";
import { useQuery } from "@tanstack/react-query";

export const useProductHook = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProduct(),
  });
  return { data, isLoading, isError, error, refetch };
};

export const useProductByIdHook = (productId: number) => {
  const { isLoading, isError, error, data, refetch, isRefetching } = useQuery({
    queryKey: [productId],
    queryFn: () => fetchProductById(productId),
    staleTime: 0, // for product with data change frequently
  });
  return { data, isLoading, isError, error, refetch };
};
