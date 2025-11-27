import { 
  useQuery,
} from "@tanstack/react-query";
import {
  api,
} from "../../services/api.service";

export const useTransactions = () => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const response = await api.get(`/transactions`); 
      
      return  response.data;
    },
  });
};



