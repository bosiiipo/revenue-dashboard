import { 
  useQuery,
} from "@tanstack/react-query";
import {
  api,
} from "../../services/api.service";

export const useBalance = () => {
  return useQuery({
    queryKey: ["wallet"],
    queryFn: async () => {
      const response = await api.get(`/wallet`); 
      
      return  response.data;
    },
  });
};



