import React, { Suspense } from "react";
import BidTable from "@/src/utils/bidTable";
import Layout from "@/src/Layout";
export default function Bids() {
  return (
      <Suspense fallback={<p>Loading Bid Data...</p>}>
        <BidTable />
      </Suspense>
  );
}

Bids.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
