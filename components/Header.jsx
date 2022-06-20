import Image from "next/image";
import Link from "next/link";

const name = "Daniel Reyes";

const Header = ({ home }) => {
  return (
    <header className="bg-gray-800 h-80 flex justify-center items-center">
      {home ? (
        <div className="flex flex-col text-center text-white">
          <Image
            priority
            src="/img/1.jpg"
            objectFit="cover"
            className="rounded-full"
            height={144}
            width={144}
            alt={name}
          />
          <h1 className="text-2xl font-semibold mt-3">Daniel Reyes</h1>
          <h2 className="text-base font-medium">Web Developer</h2>
        </div>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/img/1.jpg"
                objectFit="cover"
                className="rounded-full border-8 border-white cursor-pointer hover:animate-pulse"
                height={144}
                width={144}
                alt={name}
              />
            </a>
          </Link>
        </>
      )}
    </header>
  );
};
export default Header;
