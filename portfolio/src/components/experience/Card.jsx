import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline_item">
        <i className={props.icon}></i>
        <h5 className="timeline_date">{props.year}</h5>
        <h3 className="timeline_title">{props.title}</h3>
        <h3 className="timeline_company">{props.company}</h3>
        <h4 className="timeline_location">{props.location}</h4>
        <p className="timeline_text">{props.desc1}</p>
        <p className="timeline_text">{props.desc2}</p>
        <p className="timeline_text">{props.desc3}</p>

    </div>
  )
}

export default Card