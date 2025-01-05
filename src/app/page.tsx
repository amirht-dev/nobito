import Header from "@/components/molcules/Header";
import Navbar from "@/components/molcules/Navbar";
import AvailableConsultants from "@/components/organisms/AvailableConsultants";
import Banners from "@/components/organisms/Banners";
import Comments from "@/components/organisms/Comments";
import Footer from "@/components/organisms/Footer";
import LandingBanner from "@/components/organisms/LandingBanner";
import Newsletter from "@/components/organisms/Newsletter";
import PopularClinics from "@/components/organisms/PopularClinics";
import PopularDoctorsOfMonth from "@/components/organisms/PopularDoctorsOfMonth";
import Report from "@/components/organisms/Report";

const Home = () => {
  return (
    <main className="space-y-10 bg-[#f5f5f5] lg:space-y-36">
      <div>
        <Navbar />
        <Header />
      </div>
      <Report />
      <PopularDoctorsOfMonth />
      <AvailableConsultants />
      <Banners />
      <PopularClinics />
      <Newsletter />
      <LandingBanner />
      <Comments />
      <Footer />
    </main>
  );
};

export default Home;
