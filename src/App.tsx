import React, { useState } from 'react'
import { RatesComponent } from './RatesComponent'
import { ThankyouComponent } from './ThankyouComponent'

const App = () => {
  const [isVisibleRate, setIsVisibleRate] = useState(true)
  const [selectedRate, setSelectedRate] = useState(0)

  return (
    <div className="flex h-screen items-center justify-center bg-black-rgb">
      {isVisibleRate ? (
        <RatesComponent
          setIsVisibleRate={setIsVisibleRate}
          setSelectedRate={setSelectedRate}
          selectedRate={selectedRate}
        />
      ) : (
        <ThankyouComponent selectedRate={selectedRate} />
      )}
    </div>
  )
}
export default App
