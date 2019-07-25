import React from 'react'

function VisitorLog({ visitor: { ip_address, device, date_time }}) {
  return (
    <div>
      <li key={ip_address}>{ip_address} | {device} | {date_time}</li>
    </div>
  )
}

export default VisitorLog;
