"use client";

import NiceSelect from "@/ui/NiceSelect";
import CommonAmenities from "../listing-details-common/CommonAmenities";
import CommonBanner from "../listing-details-common/CommonBanner";
import CommonLocation from "../listing-details-common/CommonLocation";
import CommonNearbyList from "../listing-details-common/CommonNearbyList";
import CommonProPertyScore from "../listing-details-common/CommonProPertyScore";
import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList";
import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan";
import CommonPropertyOverview from "../listing-details-common/CommonPropertyOverview";
import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour";
import CommonReviewForm from "../listing-details-common/CommonReviewForm";
import CommonSimilarProperty from "../listing-details-common/CommonSimilarProperty";
import Review from "@/components/inner-pages/agency/agency-details/Review";
// import Sidebar from "../listing-details-1/Sidebar";
import NextImage from "next/image";

// If the hero image will come from the DB, pass it via props:
type ListingDetailsTwoAreaProps = {
   heroSrc?: string; // e.g. "/assets/images/listing/kinfolk.jpeg" or "https://bucket/listing/kinfolk.jpeg"
   alt?: string;
};

const isExternalUrl = (s: string) => /^https?:\/\//i.test(s);

function normalizeSrc(src?: string): { src: string; external: boolean } {
   if (!src) return { src: "/assets/images/listing/img_28.jpg", external: false };
   if (src.startsWith("public/")) src = src.replace(/^public\//, "/");
   if (!isExternalUrl(src) && !src.startsWith("/")) src = "/" + src;
   return { src, external: isExternalUrl(src) };
}

const ListingDetailsTwoArea = ({ heroSrc = "/assets/images/listing/kingfolk.jpeg", alt = "Event hero" }: ListingDetailsTwoAreaProps) => {
   const selectHandler = (_e: any) => {};
   const { src, external } = normalizeSrc(heroSrc);

   return (
       <div className="listing-details-one theme-details-one bg-pink pt-120 lg-pt-100 pb-150 xl-pb-120">
          <div className="media-wrapper position-relative overflow-hidden" style={{ minHeight: 300, borderRadius: 20 }}>
             <NextImage
                 src={src}
                 alt={alt}
                 fill
                 sizes="(max-width: 768px) 100vw, 1200px"
                 style={{ objectFit: "cover" }}
                 // remove this once your remote host is allowlisted in next.config.js
                 unoptimized={external}
                 priority={true}
             />
          </div>

          <div className="container">
             <div className="bg-white shadow4 border-20 p-40 mt-70 lg-mt-50 mb-60">
                <CommonBanner />
             </div>
             <div className="row">
                <div className="col-xl-8">
                    <div className="property-video-tour mb-50">
                        <CommonPropertyVideoTour />
                    </div>


                   <div className="property-overview bg-white shadow4 border-20 p-40 mb-50">
                      <h4 className="mb-20">Overview</h4>
                      <p className="fs-20 lh-lg">
                         At a family reunion that stretches from the backyard grill to the church basement, Kinfolk cracks open the stories we inherit—and the ones we choose. Over one evening and a morning after, siblings, cousins, and elders trade jokes, receipts, and truths about love, care, and what we owe each other. This staged reading centers Black kinship—its joy, its mess, its music—inviting the audience into a room that feels like home.
                      </p>
                   </div>

                   <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
                      <h4 className="mb-20">What to expect</h4>
                      <p className="fs-20 lh-lg">
                         A script-in-hand reading with three actors and light sound underscoring, followed by a short audience talkback. Perfect for folks who love new work and want to be part of its first steps.                      </p>
                      <div className="accordion-style-two mt-45">
                         <CommonPropertyFeatureList />
                      </div>
                   </div>

                   {/*<div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">*/}
                   {/*   <CommonAmenities />*/}
                   {/*</div>*/}


                   {/*<CommonPropertyFloorPlan style={false} />*/}

                   {/*<div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">*/}
                   {/*   <CommonNearbyList />*/}
                   {/*</div>*/}

                   {/*<CommonSimilarProperty />*/}

                   {/*<div className="property-score bg-white shadow4 border-20 p-40 mb-50">*/}
                   {/*   <CommonProPertyScore />*/}
                   {/*</div>*/}


            <div className="property-location mb-50">
              <CommonLocation />
            </div>
                   {/*

            <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
              <div className="position-relative z-1">
                <div className="d-sm-flex justify-content-between align-items-center mb-10">
                  <h4 className="m0 xs-pb-30">Reviews</h4>
                  <NiceSelect
                    className="nice-select"
                    options={[
                      { value: "01", text: "Newest" },
                      { value: "02", text: "Best Seller" },
                      { value: "03", text: "Best Match" },
                    ]}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name=""
                    placeholder=""
                  />
                </div>
                <Review style={true} />
              </div>
            </div>

            <div className="review-form bg-white shadow4 border-20 p-40 mb-50">
              <CommonReviewForm />
            </div>
            */}
                </div>

                {/* <Sidebar /> */}
             </div>
          </div>
       </div>
   );
};

export default ListingDetailsTwoArea;
