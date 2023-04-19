import React from 'react'
import Under from '@/src/utils/under'
import Layout from "@/src/Layout";

function Incidents() {
  return (
      <Under/>
  )
}

export default Incidents

Incidents.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };
  