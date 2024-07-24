import React from 'react'
import Link from 'next/link'

const TitleComponents = ({ title, desc, route }) => {
  return (
    <section className="section-title-container">
        { desc && <p>{desc}</p> }
        { title && <h5>{title}</h5> }
        { route && <Link href={`${route}`}>더 보기</Link> }
    </section>
  )
}

export default TitleComponents