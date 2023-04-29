import React from 'react'
import Under from '@/src/components/under'
import Layout from "@/src/components/Layout";
import Protected from '@/src/components/Protected';

function Incidents() {
  return (
    <Protected>
      <Under/>
    </Protected>
  )
}

export default Incidents

Incidents.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };
  