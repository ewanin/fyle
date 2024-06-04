import Clients from "./components/Clients";
import Feedback from "./components/Feedback";
import Growth from "./components/Growth";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import Wrapper from "./components/Wrapper";
import Choose from "./components/Choose";

export default function Home() {
  return (
    <main className="">
      <HeroBanner />
      <Services />
      <Choose />
      <Growth />
      <Feedback />
      <Clients />
    </main>
  );
}