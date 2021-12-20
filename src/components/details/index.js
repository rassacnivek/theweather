import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import './details.scss'

const Details = () => {
  const city = useSelector(state => state.location.currentCity)
  console.log(city);
  const [details, setDetails] = useState([])
  if (city && details.length === 0) {
    setDetails([
      { label: "Cloudy", value: city.clouds, unit: "%" },
      { label: "Humidity", value: city.main.humidity, unit: "%" },
      { label: "Wind", value: city.clouds, unit: "km/h" },
    ])
  }
  return (
    <div className="details__container">
      <div className="details__container-title">Weather Details</div>
      {details.map(detail =>
        <div className="details__container-list" key={detail.label.toLowerCase()}>
          <div className="details__container-list__label">
            {detail.label}
          </div>
          <div className="details__container-list__value">
            {detail.value.all ?? detail.value} {detail.unit}
          </div>
        </div>
      )}
    </div>
  )
}

export default Details