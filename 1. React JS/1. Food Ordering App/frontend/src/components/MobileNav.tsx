import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { hamburgerIcon } from "@/assets";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <img src={hamburgerIcon} alt="" className="w-7" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="mb-2">
          <span>Welcome to GoEats.com !</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-orange-500 mt-3">
            {" "}
            Log In
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
