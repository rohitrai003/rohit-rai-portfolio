import Link from "next/link";

const Navbar = () => {

  return (
    <nav className="bg-gray-50 text-black  top-0  w-full p-4 flex items-center justify-between ">
  <h2 className="text-xl font-semibold">RBR</h2>
  <ul className="flex space-x-6 font-sans text-base">
    <li>
      <Link className="hover:underline hover:text-violet-600" href="#home">
        Home
      </Link>
    </li>
    <li>
      <Link className="hover:underline hover:text-violet-600" href="#about">
        About
      </Link>
    </li>
    <li>
      <Link className="hover:underline hover:text-violet-600" href="#skills">
        Skills
      </Link>
    </li>
    <li>
      <Link className="hover:underline hover:text-violet-600" href="#contact">
        Contact Me
      </Link>
    </li>
  </ul>
  <button className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700">
    Let's Talk
  </button>
</nav>

  );
};

export default Navbar;
