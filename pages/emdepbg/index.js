import React from 'react'
import Under from '@/src/utils/under'
import Layout from "@/src/Layout";

function Emd() {
  return (
      <Under/>
  )
}

export default Emd

Emd.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };
  