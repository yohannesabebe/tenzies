import React from 'react'

import Confetti from 'react-confetti'

export default () => {
  const [wind, setWind] = React.useState({width: Window.width, height: Window.height})
  return (
    <Confetti
      width={wind.width}
      height={wind.height}
    />
  )
}
