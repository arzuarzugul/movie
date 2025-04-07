import Link from 'next/link'
import React from 'react'

const MenÜItem = ({mn}) => {
  return (
    <Link href={mn.url}>
     {mn.name}
    </Link>
  )
}

export default MenÜItem;
