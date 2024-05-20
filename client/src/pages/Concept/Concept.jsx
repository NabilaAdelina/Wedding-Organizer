import React from 'react'
import Header from '../../components/Header'
import WeddingDress from './ConceptLayout/WeddingDress'
import InteriorDecoration from './ConceptLayout/InteriorDecoration'
import Vendor from './ConceptLayout/Vendor'
import DetailAcara from './ConceptLayout/DetailAcara'
import Footer from '../../components/Footer'

function Concept() {
  return (
    <>
    <div className='position: relative'>
        <Header />
        <WeddingDress />
        <InteriorDecoration />
        <Vendor />
        <h1>Konsep Acara</h1>
        <DetailAcara />
        <Footer />
    </div>
    </>
  )
}

export default Concept
