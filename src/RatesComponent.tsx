import React from 'react'

export const RATES = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
]
type TypeRatesProps = {
  setIsVisibleRate: (input: boolean) => void
  setSelectedRate: (input: number) => void
  selectedRate: number
}
const RatesComponent = (props: TypeRatesProps) => {
  const { setIsVisibleRate, setSelectedRate, selectedRate } = props

  const submit = () => {
    setIsVisibleRate(false)
  }
  return (
    <div
      id="rate-state-container"
      className="w-1/5 rounded-2xl bg-gradient-to-b from-[rgb(34,42,52)] to-[rgb(23,30,40)] p-6"
    >
      <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-rate-hex text-amber-500">
        &#9733;
      </div>
      <h1 className="text-white text-2xl mt-5 mb-5">How did we do ?</h1>
      <div className="text-gray-hex text-sm mb-5">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering.
      </div>
      <div className="flex flex-row justify-between">
        {RATES.map(rate => (
          <button
            className={`flex items-center justify-center w-[40px] h-[40px] rounded-full text-gray-hex ${
              selectedRate !== rate.value ? 'bg-rate-hex' : 'bg-amber-500'
            }`}
            value={rate.value}
            onClick={() => setSelectedRate(rate.value)}
          >
            {rate.label}
          </button>
        ))}
      </div>
      <button
        className="flex justify-center items-center w-full bg-amber-500 rounded-3xl p-2 mt-6 cursor-pointer"
        onClick={submit}
        disabled={!selectedRate}
      >
        SUBMIT
      </button>
    </div>
  )
}
export { RatesComponent }
