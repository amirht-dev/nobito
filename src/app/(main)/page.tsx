import Header from "@/components/molcules/Header";
import AvailableConsultants from "@/components/organisms/AvailableConsultants";
import Banners from "@/components/organisms/Banners";
import Comments from "@/components/organisms/Comments";
import LandingBanner from "@/components/organisms/LandingBanner";
import Newsletter from "@/components/organisms/Newsletter";
import PopularClinics from "@/components/organisms/PopularClinics";
import PopularDoctorsOfMonth from "@/components/organisms/PopularDoctorsOfMonth";
import Report from "@/components/organisms/Report";

const Home = () => {
  return (
    <main className="mb-10 space-y-10 bg-[#f5f5f5] lg:mb-36 lg:space-y-36">
      <Header />
      <Report />
      <PopularDoctorsOfMonth />
      <AvailableConsultants />
      <Banners />
      <PopularClinics />
      <Newsletter />
      <LandingBanner />
      <Comments />
    </main>
  );
};

export default Home;
