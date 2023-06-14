'use client'
import React, {useEffect, useState, } from 'react';
import AdminNavbar from './adminComponents/Navbar';
import '../../app/globals.css'
import useUserRole from '@/context/useUserRole';
import { useRouter } from 'next/navigation';



export const metadata = {
  title: 'Admin Panel',
  description: 'Panoul de administrare Tomotiv',
  robots:'noindex, follow'
};

 

export default function Layout({ children }) {

const {ok, data, loading} = useUserRole('Admin')
 const router = useRouter()

   
 
    
 
   if (!ok) {
     
     console.log(ok, data, loading)
     return <>Nu ai rol de administrator</>;
     
   } 
   if( ok) {
    return (
      <>
        <AdminNavbar />
        {children}
      </>
      )
    }

  }

