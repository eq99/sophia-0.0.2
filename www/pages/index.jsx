import HomeSlide from "../components/home-slide";
import HomeComputer from "../components/home-computer";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout title="Home">
      <HomeSlide></HomeSlide>
      <HomeComputer></HomeComputer>
    </Layout>
  );
}
