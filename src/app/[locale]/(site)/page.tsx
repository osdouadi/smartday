import HeroContainer from "../../../containers/home-page/hero-container";
import CategoryContainer from "../../../containers/home-page/categories-container";
import ContactContainer from "@/containers/home-page/contact-container";
import PartnersContainer from "@/containers/home-page/partners-container";
import Companyfeature from "@/containers/home-page/company-features";
import AboutUsContainer from "@/containers/home-page/about-us-container";
import ValuesContainer from "@/containers/home-page/values-container";
import OurVisionContainer from "@/containers/home-page/our-vision-container";
import OurTeamContainer from "@/containers/home-page/our-team-container";

export default function Home() {
  return (
    <>
      <HeroContainer />
      <CategoryContainer />
      <Companyfeature />
      <AboutUsContainer />
      <OurVisionContainer />
      <OurTeamContainer />
      <ValuesContainer />
      <PartnersContainer />
      <ContactContainer />
    </>
  );
}
