import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <div className="bg-gray-800 sticky -top-1 border-t-[1px] border-gray-600">
      <nav className="responsive-width mb-14 text-white py-5 font-bold text-lg flex justify-center items-center gap-8">
        <ActiveLink text="Home" href="/" />
        <ActiveLink text="Works" href="/works" />
        <ActiveLink text="Contact" href="/contact" />
      </nav>
    </div>
  );
};
export default Navbar;
