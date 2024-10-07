import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import HeroBg from "@/components/HeroBg";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <HeroBg/>
      <Featured/>
      <Footer/>
    </div>
  );
}
