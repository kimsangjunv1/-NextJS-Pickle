import React from 'react'

const Pagination = ({ data, func }) => {
  return (
    <section className="pagination">
        {data.map((i, e) => 
            <div onClick={() => func(e)} key={e}>{e+1}</div>
        )}
    </section>
  )
}

export default Pagination