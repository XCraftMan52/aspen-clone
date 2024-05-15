import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SecurityBox from "@/components/SecurityBox";

export default function page() {
  return (
    <div className='bg-no-repeat bg-aspen bg-cover h-screen'>
      <Header />
      <SecurityBox securityQuestion='Test' securityQuestionAnswer='Test' />
      <Footer />
    </div>
  );
}
