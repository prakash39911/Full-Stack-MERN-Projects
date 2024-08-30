import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <div className="flex flex-col gap-3">
        <Link
          to="/user-profile"
          className="flex text-xl bg-white font-bold hover:text-orange-500"
        >
          User Profile
        </Link>

        <Button
          className="flex flex-1 bg-orange-500 px-3 font-bold hover:bg-red-800"
          onClick={() => logout()}
        >
          Log Out
        </Button>
      </div>
    </>
  );
};

export default MobileNavLinks;
