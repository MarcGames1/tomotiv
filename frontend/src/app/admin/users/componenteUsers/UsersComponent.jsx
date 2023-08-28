'use client';
import React, { useEffect, useState, useContext, useRef } from 'react';
import ApiClient from '@/Classes/ApiClient';
import toast from 'react-hot-toast';
import { Context } from '@/context';
import SingleUser from './singleUser';
const api = new ApiClient(process.env.NEXT_PUBLIC_API);

export const revalidate = 3600;

const getData = async () => {
     try{
  const data = await api.get('/admin/users');
  console.log('in get data method =>', data);
  return await data;
     }catch(err) {
        console.error(err)
     }
};

const UsersComponent =  () => {
    const [usersData, setUsersData] = useState([]);


     const {
       state: { user },
     } = useContext(Context);

 
     const deleteUser = async ( id) =>{
        if (user._id === id) return 
        else {
            try{
             const deletedUser =  await api.delete(`/admin/users/${id}`);
             toast.success('user deleted successfully')
             setUsersData(await getData());
             return deletedUser
            } 
            catch(err) {console.log(err)}
        }
     }


useEffect(() => {
  if (usersData.length === 0) {
    const updateData = async () => {
      setUsersData(await getData());
    };
    updateData();
  }
}, []);

  return (
    <>
      <pre>{JSON.stringify(usersData, '', 3)}</pre>
      
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Nume</th>
              <th>Prenume</th>
              <th>email</th>

              <th>roles</th>
              <th>Modifica</th>
              <th>Sterge</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              usersData.map((user, idx) => {
                return<SingleUser key={idx} user={user} idx={idx} />
            })}
                
           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersComponent;
