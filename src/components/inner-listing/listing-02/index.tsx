import FooterFour from "@/layouts/footers/FooterFour"
import FancyBanner from "@/components/common/FancyBanner"
import ListingTwoArea from "./ListingTwoArea"
import HeaderOne from "@/layouts/headers/HeaderOne"
import HeaderFive from "@/layouts/headers/HeaderFive";

const ListingTwo = () => {
   return (
      <>
          <HeaderOne style={true} />
         <ListingTwoArea style={false} />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingTwo;
