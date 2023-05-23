import React from 'react'

const GridColsd10 = ({children, cols=10}) => {

  
  const checknumberOfColumns = (cols) =>{
    if (0 < cols && cols <= 12) {
      return cols.toLocaleString();
    } else {
      
      throw new Error('Invalid number of columns! Columns must be between 1 and 12');
      
    }
  }
  
  
  return (
    <div
      className={`grid grid-flow-row md:grid-flow-col px-10 gap-5`}
    >
      {children}
    </div>
  );
}

export default GridColsd10