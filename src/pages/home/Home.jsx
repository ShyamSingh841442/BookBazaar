import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import TopSeller from './TopSeller'
import Recomended from './Recomended'
import News from './News'
function Home() {
  
  return (
    <>
      <Banner/>
      <TopSeller/>
      <Recomended />
      <News />
    </>
  )
}

export default Home