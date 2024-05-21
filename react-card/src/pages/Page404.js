import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Page404(d) {
  const us = useLocation()
  console.log('>>>', us)
  return (
    <div>Page404</div>
  )
}
