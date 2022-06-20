import Layout from "../components/Layout";
import MainTitle from "../components/MainTitle";
import {
  AiOutlineWhatsApp,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/Ai";
import { MdEmail } from "react-icons/Md";

const contact = () => {
  return (
    <Layout title="Contact" description="Contact page">
      <MainTitle mainTitle="Contact" />
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=523324309826"
              target="_blank"
              className="contact-item text-green-400 hover:bg-green-500 hover:text-white"
            >
              <AiOutlineWhatsApp size="3em" />
            </a>
            <div className="contact-item-text">Call - Whatsapp</div>
          </div>
          <div>
            <a
              href="https://mail.google.com/"
              target="_blank"
              className="contact-item text-rose-400 hover:bg-rose-500 hover:text-white"
            >
              <MdEmail size="3em" />
            </a>
            <div className="contact-item-text">Email</div>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/daniel-reyes-developer/"
              target="_blank"
              className="contact-item text-cyan-400 hover:bg-cyan-500 hover:text-white"
            >
              <AiFillLinkedin size="3em" />
            </a>
            <div className="contact-item-text">Linkedin</div>
          </div>
          <div>
            <a
              href="https://github.com/danielreyesdeveloper"
              target="_blank"
              className="contact-item text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white"
            >
              <AiFillGithub size="3em" />
            </a>
            <div className="contact-item-text">Github</div>
          </div>
        </div>
        <p className="font-semibold mt-8 text-center">
          Email: danielreyesdev@gmail.com
        </p>
      </section>
    </Layout>
  );
};
export default contact;
