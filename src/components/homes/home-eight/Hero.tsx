"use client"
import Image from "next/image"

import icon_1 from "@/assets/images/icon/icon_75.svg"

const Hero = () => {
   return (
      <div className="hero-banner-eight z-1 pt-250 xl-pt-200 pb-250 xl-pb-150 lg-pb-100 position-relative">
         <div className="container position-relative">
            <div className="row">
               <div className="col-xl-9 col-lg-10 col-md-10 m-auto">
                  <h1 className="hero-heading text-white text-center wow fadeInUp">Find the Right <br /> Home for Your Family</h1>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
