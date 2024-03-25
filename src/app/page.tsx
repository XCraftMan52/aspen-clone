import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginBox from "@/components/LoginBox";
import Image from "next/image";

export default function Home() {
  return (
    <div className='bg-no-repeat	bg-aspen bg-cover h-screen'>
      <Header />
      <LoginBox />
      <Footer />
    </div>
  );
}
