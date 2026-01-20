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
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>({
    id: 1,
    name: "John Deo",
    email: "johndoe2211@gmail.com",
    phone: "+9847562301",
    gender: "Male",
    img: "/Images/group.png"
  });

  return (
    <div className='flex '>
        <div className='flex flex-col'>

        <Top onAddClick={() => setIsAddCustomerOpen(true)} />
        <Detail onCustomerClick={setSelectedCustomer} selectedCustomerId={selectedCustomer.id}/>
        </div>
        <div className='flex flex-col w-[302px]  ml-8 bg-white rounded-[10px]'>
        <Contact customer={selectedCustomer}/>
        <ContactInfo customer={selectedCustomer}/>
        <Performance/>
        <ProgressStats/>

        </div>
        <AddCustomer isOpen={isAddCustomerOpen} 
          onClose={() => setIsAddCustomerOpen(false)} 
        />
    </div>
  )
}

export default Page