import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaSquareXTwitter,
  FaSquareFacebook,
} from "react-icons/fa6";

function Share() {
  return (
    <div className="hidden rotate-[270deg] items-center justify-center gap-4 xl:flex">
      <div className="flex gap-4 text-white">
        <Link to="/" className="transition-colors duration-300 hover:text-yellow-500">
          <FaLinkedin className="h-auto w-7 rotate-90" />
        </Link>
        <Link to="/" className="transition-colors duration-300 hover:text-yellow-500">
          <FaSquareXTwitter className="h-auto w-7 rotate-90" />
        </Link>
        <Link to="/" className="transition-colors duration-300 hover:text-yellow-500">
          <FaSquareFacebook className="h-auto w-7 rotate-90" />
        </Link>
      </div>
      <div className="h-0.5 w-12 bg-yellow-500"></div>
      <p className="inline-block text-lg font-bold uppercase text-white">
        Share
      </p>
    </div>
  );
}

export default Share;
