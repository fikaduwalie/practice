import React, { ReactNode } from 'react'
import ProductSidebar from './_components/ProductSidebar'

interface ProductLayoutProps {
    children?: ReactNode
}


function ProductLayout({children}: ProductLayoutProps) {
  return (
   <div className="flex flex-row gap-1">
    <ProductSidebar/>
    {children}
   </div>
  )
}

export default ProductLayout