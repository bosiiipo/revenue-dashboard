import { useUser } from "../../lib/hooks/api/useUser";

const ProfileCard = () => {
  
  const {data: user} = useUser();
  
  return (
    <div className="flex items-center gap-3 bg-[#F1F3F6] px-2 py-1 rounded-full relative">
      <div className="w-10 h-10 rounded-full flex items-center justify-center 
                      text-white text-sm font-semibold
                      bg-gradient-to-b from-gray-700 to-gray-900">
        {user?.first_name[0]}{user?.last_name[0]}
      </div>

      <div className="relative">
        <div className="flex flex-col boro">
          <div className="w-7 h-[3px] bg-gray-500 rounded-full mb-1"></div>
          <div className="w-7 h-[3px] bg-gray-500 rounded-full mb-1"></div>
          <div className="w-7 h-[3px] bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
