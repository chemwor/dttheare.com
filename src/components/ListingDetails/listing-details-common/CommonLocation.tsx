
const CommonLocation = () => {
   return (
      <>
         <h4 className="mb-40">Location</h4>
         <div className="bg-white shadow4 border-20 p-30">
            <div className="map-banner overflow-hidden border-15">
               <div className="gmap_canvas h-100 w-100">
                   <iframe
                       title="Map: Cobb County Civic Center"
                       src="https://www.google.com/maps?q=Cobb+County+Civic+Center,Marietta,GA&z=15&output=embed"
                       style={{ border: 0 }}
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       allowFullScreen
                       className="w-100"
                       height={450}
                   />
               </div>
            </div>
         </div>
      </>
   )
}

export default CommonLocation;
