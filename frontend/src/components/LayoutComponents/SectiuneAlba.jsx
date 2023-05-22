import React from 'react'

const SectiuneAlba = ({children, margin="ml-20 "}) => {
  return (
    <div className={`bg-primary ${margin}`}>{children}</div>
  )
}

export default SectiuneAlba