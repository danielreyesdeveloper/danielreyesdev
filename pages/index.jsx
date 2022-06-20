import Layout from "../components/Layout";
import MainTitle from "../components/MainTitle";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="Home" description="Home page" home>
      <MainTitle mainTitle="Home" />
      <section className="border-b-2 border-slate-200 pb-8 mb-14">
        <h4 className="text-gray-600 font-bold text-2xl mb-4">About</h4>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p>
              I am a Software developer living in Jalisco Mexico. My training is
              in web development, my primary interest is create functional
              software for the real world. I think that one of the essential
              goals of our generation is to understand how works technology.
            </p>
            <button className="bg-rose-600 hover:bg-rose-700 transition-all ease-in duration-200 text-white font-semibold py-2 px-6 rounded-md mt-4">
              Download CV
            </button>
          </div>
          <div className="bg-fixed">
            <Image
              priority
              layout="responsive"
              objectFit="cover"
              width={100}
              height={40}
              src="/../public/img/code.jpg"
              alt="demo"
              className="rounded-md"
            />
          </div>
        </div>
      </section>
      <section className="">
        <h4 className="text-gray-600 font-bold text-2xl mb-7">Skills</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6">
          <div className="tech-item">HTML</div>
          <div className="tech-item">CSS</div>
          <div className="tech-item">Tailwind</div>
          <div className="tech-item">JavaScript</div>
          <div className="tech-item">TypeScript</div>
          <div className="tech-item">React</div>
          <div className="tech-item">Next JS</div>
          <div className="tech-item">MongoDB</div>
          <div className="tech-item">Sanity</div>
        </div>
      </section>
    </Layout>
  );
}
