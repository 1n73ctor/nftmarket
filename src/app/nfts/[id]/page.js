import NftDetail from "@/app/pages/NftDetail";
import React from "react";

function page({ params }) {
  const { id } = params;
  return <NftDetail />;
}

export default page;
