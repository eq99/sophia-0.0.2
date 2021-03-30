import Head from "next/head";
import HomeNav from "./home-nav";
import Footer from "./footer";

export default function Layout({
  children,
  title = "This is the default title",
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="row justify-content-center">
        <div className="row col-10">
          <HomeNav></HomeNav>
        </div>
      </div>
      <main className="row justify-content-center">
        <div className="col-10">{children}</div>
      </main>
      <Footer></Footer>
    </div>
  );
}
