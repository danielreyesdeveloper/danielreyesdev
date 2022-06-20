import { HiHeart } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white h-24 flex justify-center items-center shadow-sm mt-14">
      <div className="responsive-width text-center">
        <p className="flex justify-center items-center">
          Made with <HiHeart size="20px" className="text-rose-500 mx-1" /> by
          Daniel Reyes
        </p>
      </div>
    </footer>
  );
};
export default Footer;
