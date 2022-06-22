import Layout from "../components/Layout";
import Image from "next/image";
import MainTitle from "../components/MainTitle";
import { HiOutlineExternalLink } from "react-icons/hi";

const Works = () => {
  return (
    <Layout>
      <MainTitle mainTitle="Works" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        <div>
          <div className="shadow-sm rounded-lg">
            <a
              href="https://danielreyesdeveloper.github.io/anime-phrase-app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-lg work"
            >
              <Image
                priority
                layout="responsive"
                objectFit="cover"
                width={100}
                height={75}
                className="rounded-xl"
                src="/work1.png"
                alt="Anime Clone App"
              />
              <div className="overlay">
                <span className="span">
                  <HiOutlineExternalLink
                    className="text-rose-500"
                    size="45px"
                  />
                </span>
              </div>
            </a>
          </div>
          <h3 className="work-title text-center sm:text-left">Anime Quotes</h3>
        </div>

        <div>
          <div className="shadow-sm rounded-lg">
            <a
              href="https://instagram-clone-app-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-lg work"
            >
              <Image
                priority
                layout="responsive"
                objectFit="cover"
                width={100}
                height={75}
                className="rounded-xl"
                src="/work2.png"
                alt="Anime Clone App"
              />
              <div className="overlay">
                <span className="span">
                  <HiOutlineExternalLink
                    className="text-rose-500"
                    size="45px"
                  />
                </span>
              </div>
            </a>
          </div>
          <h3 className="work-title text-center sm:text-left">
            Instagram Clone App
          </h3>
        </div>

        <div>
          <div className="shadow-sm rounded-lg">
            <a
              href="https://emoji-app-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-lg work"
            >
              <Image
                priority
                layout="responsive"
                objectFit="cover"
                width={100}
                height={75}
                className="rounded-xl"
                src="/work3.png"
                alt="Anime Clone App"
              />
              <div className="overlay">
                <span className="span">
                  <HiOutlineExternalLink
                    className="text-rose-500"
                    size="45px"
                  />
                </span>
              </div>
            </a>
          </div>
          <h3 className="work-title text-center sm:text-left">Emoji Info</h3>
        </div>

        <div>
          <div className="shadow-sm rounded-lg">
            <a
              href="https://netflix-clone-app-bay.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-lg work"
            >
              <Image
                priority
                layout="responsive"
                objectFit="cover"
                width={100}
                height={75}
                className="rounded-lg"
                src="/work4.png"
                alt="Anime Clone App"
              />
              <div className="overlay">
                <span className="span">
                  <HiOutlineExternalLink
                    className="text-rose-500"
                    size="45px"
                  />
                </span>
              </div>
            </a>
          </div>
          <h3 className="work-title text-center sm:text-left">
            Netflix Clone App
          </h3>
        </div>
      </div>
    </Layout>
  );
};
export default Works;
