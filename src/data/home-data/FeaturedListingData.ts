interface DataType {
   id: number;
   page: string;
   tag: string;
   title: string;
   address: string;
   data_delay_time?: string;
   item_bg_img:string;
   property_info: {
      feature: string;
      total_feature: number;
   }[];
}[];

const feature_listing_data:DataType[]=[
   {
      id: 1,
      page: "home_5",
      tag: "Rent",
      item_bg_img:"item-bg-1",
      title: "The Revolution",
      address: "548 South Marietta Pkwy SE, Marietta, GA 30060",
      property_info: [{feature: "Cost", total_feature: 22 }, {feature: "bed", total_feature: 0o3 }, {feature: "kitchen", total_feature: 0o1 }, {feature: "bath", total_feature: 0o2 },],
   },
   {
      id: 2,
      page: "home_5",
      tag: "Sell",
      item_bg_img:"item-bg-2",
      title: "SCity Cypher: Poetry x Music",
      address: "127 green road, California, USA",
      data_delay_time:"0.1s",
      property_info: [{feature: "Cost", total_feature: 22}, {feature: "bed", total_feature: 0o3 }, {feature: "kitchen", total_feature: 0o1 }, {feature: "bath", total_feature: 0o2 },],
   },
   {
      id: 3,
      page: "home_5",
      tag: "Rent",
      item_bg_img:"item-bg-3",
      title: "Modern Duplex",
      address: "Twin tower, 32 street, Florida",
      data_delay_time:"0.2s",
      property_info: [{feature: "sqft", total_feature: 2137 }, {feature: "bed", total_feature: 0o3 }, {feature: "kitchen", total_feature: 0o1 }, {feature: "bath", total_feature: 0o2 },],
   },


   // home_8
   {
      id: 1,
      page: "home_8",
      tag: "PWYW",
      item_bg_img: "item-bg-3",
      title: "Kinfolk: A New Play Reading",
      address: "123 Auburn Ave NE, Atlanta, GA 30303",
      // start_at: "2025-09-12T19:00:00-04:00",
      // end_at:   "2025-09-12T20:15:00-04:00",
      // display_date: "Sep 12, 2025",
      // display_time: "7:00 PM",
      data_delay_time: "0.2s",
      property_info: [
         { feature: "Cost", total_feature: 0 },          // 0 = PWYW
         { feature: "Runtime (min)", total_feature: 75 },
         { feature: "Seats", total_feature: 80 },
         { feature: "Age+", total_feature: 13 }
      ],
   },
   {
      id: 2,
      page: "home_8",
      tag: "Flat Price",
      item_bg_img: "item-bg-4",
      title: "First Fridays: New Voices",
      address: "455 Moreland Ave NE, Atlanta, GA 30307",
      // start_at: "2025-10-03T19:30:00-04:00",
      // end_at:   "2025-10-03T21:00:00-04:00",
      // display_date: "Oct 3, 2025",
      // display_time: "7:30 PM",
      data_delay_time: "0.3s",
      property_info: [
         { feature: "Cost", total_feature: 18 },
         { feature: "Runtime (min)", total_feature: 90 },
         { feature: "Seats", total_feature: 120 },
         { feature: "Age+", total_feature: 10 }
      ],
   },
   {
      id: 3,
      page: "home_8",
      tag: "Flat Price",
      item_bg_img: "item-bg-5",
      title: "Spotlight Series",
      address: "700 Hank Aaron Dr SE, Atlanta, GA 30315",
      // start_at: "2025-10-17T20:00:00-04:00",
      // end_at:   "2025-10-17T21:25:00-04:00",
      // display_date: "Oct 17, 2025",
      // display_time: "8:00 PM",
      data_delay_time: "0.4s",
      property_info: [
         { feature: "Cost", total_feature: 25 },
         { feature: "Runtime (min)", total_feature: 85 },
         { feature: "Seats", total_feature: 150 },
         { feature: "Age+", total_feature: 0 }          // 0 = All Ages
      ],
   },
]

export default feature_listing_data;