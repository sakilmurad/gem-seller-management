import React from 'react'
import Under from '@/src/utils/under'
import Layout from '@/src/Layout'

function Orders() {
  return (
    <Under/>
  )
}

export default Orders

Orders.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };
  