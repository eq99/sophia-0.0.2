import Head from "next/head";
import AppBar from "../components/home-nav";
import HomeSlide from "../components/home-slide";
import HomeComputer from "../components/home-computer";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="row justify-content-center">
        <div className="row col-10">
          <AppBar></AppBar>
        </div>
      </div>
      <main className="row justify-content-center">
        <div className="col-10">
          <HomeSlide></HomeSlide>
          <HomeComputer></HomeComputer>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
