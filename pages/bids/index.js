import React, { Suspense } from "react";
import BidTable from "@/src/components/bidTable";
import Layout from "@/src/components/Layout";
import Protected from "@/src/components/Protected";
export default function Bids() {
  return (
    <Protected>
      <Suspense fallback={<p>Loading Bid Data...</p>}>
        <BidTable />
      </Suspense>
    </Protected>
  );
}

Bids.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
