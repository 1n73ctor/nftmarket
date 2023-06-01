import React from "react";
import NftDetail from "@/app/pages/NftDetail";

 export default function page({params}) {
// console.log("params ",params);
  return <NftDetail index={params.id} />;
}

