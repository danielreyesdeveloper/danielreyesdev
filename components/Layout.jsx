import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children, title, description, home }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header home={home} />
      <Navbar />
      <div className="responsive-width">
        <main>{children}</main>
        {!home && (
          <div className="mt-8">
            <Link href="/">
              <a className="text-blue-600 font-semibold text-lg">
                Back to Home
              </a>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Layout;
