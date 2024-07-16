import React from 'react'


const ReviewCard = ({r}) => {
  return (
    <div>
        <div className="row">
  <div className="col-sm-6 mb-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{<img src={r.img}></img>}</h5>
      <p className="card-text">{r.desc}</p>
        <p>{r.name}</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{<img src={r.img}></img>}</h5>
        <p className="card-text">{r.desc}</p>
        <p>{r.name}</p>
       
      </div>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default ReviewCard