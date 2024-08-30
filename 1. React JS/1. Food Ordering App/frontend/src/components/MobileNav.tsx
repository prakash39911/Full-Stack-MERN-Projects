import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { hamburgerIcon, userIcon } from "@/assets";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <img src={hamburgerIcon} alt="" className="w-7 cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center">
        <SheetTitle className="mb-1">
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-3">
              <img src={userIcon} />
              {user?.email}
            </span>
          ) : (
            <span>Welcome to GoEats.com !</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              className="flex-1 font-bold bg-orange-500 mt-2"
              onClick={async () => await loginWithRedirect()}
            >
              {" "}
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
