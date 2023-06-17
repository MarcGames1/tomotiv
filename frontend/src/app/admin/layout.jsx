'use client'
import React, {useEffect, useState, } from 'react';
import AdminNavbar from './adminComponents/Navbar';
import '../../app/globals.css'
import useUserRole from '@/hooks/useUserRole';
import { useRouter } from 'next/navigation';



export const metadata = {
  title: 'Admin Panel',
  description: 'Panoul de administrare Tomotiv',
  robots:'noindex, follow'
};

 

export default function Layout({ children }) {

const {ok, data, loading} = useUserRole('Admin')
 const router = useRouter()

   console.log( "DATAAAA =>",data)
 
   if (loading) {
     return (
       <div>
         <span className="loading loading-dots loading-xs"></span>
       </div>
     );
   }
   if (!ok) {
     return <div>NU ai acces aici</div>;
   }
 
  
   if( ok) {
     console.log(ok, data, loading);
    return (
      <>
        <AdminNavbar />
        {children}
      </>
      )
    }

  }

