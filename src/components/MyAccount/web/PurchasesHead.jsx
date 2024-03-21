import React from 'react'
import Purchase from './Purchases'
export default function PurchasesHead() {
  return (
    <>
        <div className='w-full h-full'>
            <h1 className='font-sans text-3xl flex justify-center font-semibold'>My purchases</h1>
            <Purchase/>
        </div>
    </>
  )
}
