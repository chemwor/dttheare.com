"use client";

import Image from "next/image";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import UseShortedProperty from "@/hooks/useShortedProperty";
import DropdownOne from "@/components/search-dropdown/inner-dropdown/DropdownOne";
import icon from "@/assets/images/icon/icon_46.svg";

// Types for items coming from your hook/DB
type EventItem = {
   pricing_type: string;
   id: number;
   title: string;
   address: string;
   tag?: string;
   tag_bg?: string;
   image_url?: string; // absolute URL or local path under /public
   bg_img?: string;    // local/remote URL (we ignore classes now)
   price: number | string;
   price_text?: string;
};


// 2) Helper to compute the display label
function getPriceLabel(item: EventItem, priceNum: number) {
   const pType = ( item.pricing_type ?? "").toString().toLowerCase();
   if (priceNum === 0) {
      return pType.includes("pwyw") || pType.includes("pay")
          ? "Pay what you want"
          : "Free";
   }
   return `$${priceFormatter.format(priceNum)}`;
}

const isExternalUrl = (s: string) => /^https?:\/\//i.test(s);

function normalizeSrc(src?: string): { src: string; external: boolean } {
   if (!src) return { src: "/assets/images/listing/img_28.jpg", external: false };

   // strip accidental "public/" prefix (e.g., "public/assets/...") -> "/assets/..."
   if (src.startsWith("public/")) src = src.replace(/^public\//, "/");

   // ensure local paths start with a leading slash so Next serves from /public
   if (!isExternalUrl(src) && !src.startsWith("/")) src = "/" + src;

   return { src, external: isExternalUrl(src) };
}

const priceFormatter = new Intl.NumberFormat(undefined, {
   minimumFractionDigits: 2,
   maximumFractionDigits: 2,
});

const ListingTwoArea = ({ style }: { style?: boolean }) => {
   const itemsPerPage = 5;
   const page = "listing_3";

   const {
      itemOffset,
      sortedProperties,
      currentItems,
      pageCount,
      handlePageClick,
      handleBathroomChange,
      handleBedroomChange,
      handleSearchChange,
      handlePriceChange,
      maxPrice,
      priceValue,
      resetFilters,
      selectedAmenities,
      handleAmenityChange,
      handleLocationChange,
      handleStatusChange,
      handleTypeChange,
   } = UseShortedProperty({ itemsPerPage, page });

   const handleResetFilter = () => resetFilters();

   return (
       <div
           className={`property-listing-six ${
               style
                   ? "pt-150 xl-pt-100 pb-170 xl-pb-120"
                   : "bg-pink-two pt-110 md-pt-80 pb-150 xl-pb-120 mt-150 xl-mt-120"
           }`}
       >
          <div className="container container-large">
             <div className="row">
                <div className="col-lg-8">
                   <div className="ps-xxl-5">
                      <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
                         <div>
                            Showing{" "}
                            <span className="color-dark fw-500">
                    {itemOffset + 1}–{itemOffset + currentItems.length}
                  </span>{" "}
                            of{" "}
                            <span className="color-dark fw-500">
                    {sortedProperties.length}
                  </span>{" "}
                            results
                         </div>
                         <div className="d-flex align-items-center xs-mt-20">
                            <div className="short-filter d-flex align-items-center">
                               <div className="fs-16 me-2">Sort by:</div>
                               {/* Connect NiceSelect here if you want sorting UI:
                      <NiceSelect ... onChange={handleTypeChange} />
                    */}
                            </div>
                            <Link
                                href="/listing_01"
                                className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
                                data-bs-toggle="tooltip"
                                title="Switch To Grid View"
                            >
                               <i className="fa-regular fa-grid-2" />
                            </Link>
                         </div>
                      </div>

                      {currentItems.map((item: EventItem) => {
                         // Prefer image_url; fall back to bg_img (both must be URLs)
                         const { src, external } = normalizeSrc(item.image_url ?? item.bg_img);
                         // price
                         const priceNum = typeof item.price === "string" ? Number(item.price) : item.price;
                         const label = getPriceLabel(item, priceNum);                 // "Pay what you want" | "Free" | "$12.00"
                         const showSuffix = priceNum > 0 && !!item.price_text;

                         return (
                             <div
                                 key={item.id}
                                 className={`listing-card-seven border-20 p-20 mb-50 wow fadeInUp ${
                                     style ? "grey-bg" : ""
                                 }`}
                             >
                                <div className="d-flex flex-wrap layout-one">
                                   <div
                                       className="img-gallery position-relative z-1 border-20 overflow-hidden"
                                       style={{ minHeight: 220 }}
                                   >
                                      <Image
                                          src={src}
                                          alt={item.title}
                                          fill
                                          sizes="(max-width: 768px) 100vw, 50vw"
                                          className="object-cover"
                                          // For remote URLs, keep this until you allowlist the host in next.config.js
                                          unoptimized={external}
                                      />
                                      <div
                                          className={
                                             style
                                                 ? "tag bg-white rounded-0 text-dark fw-500"
                                                 : `border-20 tag ${item.tag_bg ?? ""}`
                                          }
                                      >
                                         {item.tag}
                                      </div>
                                   </div>

                                   <div className="property-info">
                                      <Link href="/listing_details_02" className="title tran3s mb-15">
                                         {item.title}
                                      </Link>
                                      <div className="address">{item.address}</div>

                                      <div className="pl-footer d-flex flex-wrap align-items-center justify-content-between mt-30">

                                         <strong className="price fw-500 color-dark me-auto">
                                            {label}
                                            {showSuffix && (
                                                <>
                                                   /<sub>{item.price_text}</sub>
                                                </>
                                            )}
                                         </strong>
                                         <ul className="style-none d-flex action-icons me-4">
                                            <li>
                                               <Link href="#">
                                                  <i className="fa-light fa-heart" />
                                               </Link>
                                            </li>
                                            <li>
                                               <Link href="#">
                                                  <i className="fa-light fa-bookmark" />
                                               </Link>
                                            </li>
                                            <li>
                                               <Link href="#">
                                                  <i className="fa-light fa-circle-plus" />
                                               </Link>
                                            </li>
                                         </ul>
                                         <Link href="/listing_details_02" className="btn-four rounded-circle">
                                            <i className="bi bi-arrow-up-right" />
                                         </Link>
                                      </div>
                                   </div>
                                </div>
                             </div>
                         );
                      })}

                      <ReactPaginate
                          breakLabel="..."
                          nextLabel={<Image src={icon} alt="" className="ms-2" />}
                          onPageChange={handlePageClick}
                          pageRangeDisplayed={pageCount}
                          pageCount={pageCount}
                          previousLabel={<Image src={icon} alt="" className="ms-2" />}
                          renderOnZeroPageCount={null}
                          className="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-30"
                      />
                   </div>
                </div>

                <div className="col-lg-4 order-lg-first">
                   <div className="advance-search-panel dot-bg md-mt-80">
                      <div className="main-bg">
                         <DropdownOne
                             handleSearchChange={handleSearchChange}
                             handleBedroomChange={handleBedroomChange}
                             handleBathroomChange={handleBathroomChange}
                             handlePriceChange={handlePriceChange}
                             maxPrice={maxPrice}
                             priceValue={priceValue}
                             handleResetFilter={handleResetFilter}
                             selectedAmenities={selectedAmenities}
                             handleAmenityChange={handleAmenityChange}
                             handleLocationChange={handleLocationChange}
                             handleStatusChange={handleStatusChange}
                         />
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
   );
};

export default ListingTwoArea;


