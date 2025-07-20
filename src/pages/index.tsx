import Hero from "../components/Hero";
import WhatsAppButton from "../components/WhatsappButton";
import CardSocialWork from "../components/CardSocialWork";
import Service from "../components/Service";
import Header from "../components/Header";
import Assistance from "@/components/Assistance";
import Health from "../components/Health";
import Question from "../components/Question";
export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <WhatsAppButton />
        <CardSocialWork />
        <Assistance />
      </div>
      <Service />
      <Health />
      <Question />
    </>
  );
}
