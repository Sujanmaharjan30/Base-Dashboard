"use client";
import React, { useState } from 'react'
import Top from './components/Top'
import Detail from './components/Detail'
import Contact from './components/Contact'
import ContactInfo from './components/ContactInfo'
import Performance from './components/Performance'

import ProgressStats from './components/ProgressStats'
import AddCustomer from './components/AddCustomer'

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  img: string;
}

const Page = () => {
  const [isAddCustomerOpen, setIsAddCustomerOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-0'>
      <div className='flex flex-col w-full md:w-auto'>

        <Top onAddClick={() => setIsAddCustomerOpen(true)} />
        <Detail onCustomerClick={setSelectedCustomer} selectedCustomerId={selectedCustomer?.id || null} />
      </div>
      {selectedCustomer && (
        <div className='flex flex-col  md:w-[302px] md:ml-8 bg-white rounded-[10px] mx-4 md:mx-0'>
          <Contact customer={selectedCustomer} />
          <ContactInfo customer={selectedCustomer} />
          <Performance />
          <ProgressStats />
        </div>
      )}
      <AddCustomer isOpen={isAddCustomerOpen}
        onClose={() => setIsAddCustomerOpen(false)}
      />
    </div>
  )
}

export default Page