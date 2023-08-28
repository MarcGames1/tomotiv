import React, {useState} from 'react'

const SingleUser = ({user, idx}) => {

    const [isModifying, setIsModifying] =useState(false)
    
    
    const handleModify = () =>{
        setIsModifying(!isModifying);
    }



                 return (
                  <>
                   
                    <tr className="hover">
                      <th>{idx}</th>
                      <th>{user.nume}</th>
                      <th>{user.prenume}</th>
                      <th>{user.email}</th>
                      <th>{user.role.join(' ')}</th>
                      <th>
                        <button
                          onClick={() =>handleModify()}
                          className="btn btn-secondary"
                        >
                          Modifica
                        </button>
                      </th>
                      <th>
                        <button
                          onClick={(e) => {
                            deleteUser(user._id);
                          }}
                          className="btn btn-error"
                        >
                          Sterge
                        </button>
                      </th>
                    </tr>
                    {isModifying &&  <>
                   <form>
                    {/* changeUser From Todo */}
                   </form>
                    </> }
                  </>
                 )
}

export default SingleUser