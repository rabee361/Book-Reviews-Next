import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import HeroBg from "@/components/HeroBg";


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroBg/>
      <Featured/>
      <Footer/>
    </div>
  );
}
