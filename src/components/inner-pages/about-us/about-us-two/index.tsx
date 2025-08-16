import BreadcrumbTwo from "@/components/common/breadcrumb/BreadcrumbTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import BLockFeatureOne from "./BLockFeatureOne";
import BLockFeatureTwo from "./BLockFeatureTwo";
import Feedback from "@/components/homes/home-six/Feedback";
import Brand from "./Brand";
import FancyBanner from "./FancyBanner";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderFive from "@/layouts/headers/HeaderFive";
import HeaderOne from "@/layouts/headers/HeaderOne";

const AboutUsTwo = () => {
   return (
      <>
          <HeaderOne style={true} />
         <BreadcrumbTwo title="About Agency" sub_title="About us" />
         <BLockFeatureOne />
         <BLockFeatureTwo />
         <Feedback />
         <Brand />
         <FancyBanner />
         <FooterTwo />
      </>
   )
}

export default AboutUsTwo;
