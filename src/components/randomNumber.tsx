import { FC, useEffect, useState } from 'react'

const getRandomNumber = () => Math.round(Math.random() * 256)

export const RandomNumber: FC = () => {
  const [number, setNumber] = useState(getRandomNumber())

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(getRandomNumber())
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return <div>{number}</div>
}
