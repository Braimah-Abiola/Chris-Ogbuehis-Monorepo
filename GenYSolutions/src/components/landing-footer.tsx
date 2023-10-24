import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const LandingFooter = () => {
  return (
    <footer className="flex flex-col w-full">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h2> Let&apos;s get to work.</h2>
          <p> Quick and easy – under a minute.</p>
        </div>
        <Button>
          Get a quote <ArrowUpRight className="ml-3" color="black" />
        </Button>
      </div>

      <div className="flex flex-row justify-between">
            <div className="flex flex-col">

            </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
