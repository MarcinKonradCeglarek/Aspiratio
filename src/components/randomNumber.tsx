import { FC, useEffect, useState } from 'react'

const getRandomNumber = () => Math.random() * 256

export const RandomNumber: FC = () => {
  const [number, setNumber] = useState(getRandomNumber())

  useEffect(() => {
    const timer = setTimeout(() => setNumber(getRandomNumber()), 10000)
    return clearTimeout(timer)
  }, [])

  return <div>{number}</div>
}
