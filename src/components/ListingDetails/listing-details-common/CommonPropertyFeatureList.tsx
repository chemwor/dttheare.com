"use client";
import property_feature_sections, { Section } from "@/data/inner-data/PropertyFeatureSections";

const CommonPropertyFeatureList = () => {
   const sections: Section[] = property_feature_sections;

   return (
       <div className="accordion" id="accordionTwo">
          {sections.map((sec, idx) => {
             const isFirst = idx === 0;
             const collapseId = `collapse-${sec.id}`;
             return (
                 <div key={sec.id} className="accordion-item">
                    <h2 className="accordion-header">
                       <button
                           className={`accordion-button ${isFirst ? "" : "collapsed"}`}
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target={`#${collapseId}`}
                           aria-expanded={isFirst}
                           aria-controls={collapseId}
                       >
                          {sec.title}
                       </button>
                    </h2>
                    <div
                        id={collapseId}
                        className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                        data-bs-parent="#accordionTwo"
                    >
                       <div className="accordion-body">
                          <p className="fs-18 lh-lg m-0">{sec.text}</p>
                       </div>
                    </div>
                 </div>
             );
          })}
       </div>
   );
};

export default CommonPropertyFeatureList;

