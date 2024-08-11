/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

const data: any = {
  vietnam: {
    name: 'Vietnam',
    province: ['Hanoi', 'HCM', 'Da Nang']
  },

  usa: {
    name: 'America',
    province: ['New York', 'California', 'Texas']
  },

  france: {
    name: 'France',
    province: ['Paris', 'Lyon', 'Marseille']
  }
}
const Test = () => {
  const [province, setProvince] = useState('vietnam')

  return (
    <div>
      <select
        name='nation'
        id=''
        onChange={(e) => {
          setProvince(e.target.value)
        }}
      >
        {Object.keys(data).map((item: any, index) => (
          <option key={index} value={item}>
            {data[item].name}
          </option>
        ))}
      </select>
      <select name='province' id=''>
        {data[province].province.map((item: any, index: number) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Test
