import React from 'react'
import { CourseDataProvider } from '../../context/CourseDataContext'
const CourseDataProviderComponent = ({children, slug}) => {
  return (
    <CourseDataProvider slug={slug}>
        {children}
    </CourseDataProvider>
  )
}

export default CourseDataProviderComponent