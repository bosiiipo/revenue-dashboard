import { 
  useQuery,
} from "@tanstack/react-query";
import {
  api,
} from "../../services/api.service";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await api.get(`/user`); 
      
      console.log({response});

      return  response.data;
    },
  });
};



