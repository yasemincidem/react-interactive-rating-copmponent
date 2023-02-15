import { RATES } from './RatesComponent'
import React from 'react'

type TypeThankyouProps = {
  selectedRate: number
}
const ThankyouComponent = ({ selectedRate }: TypeThankyouProps) => {
  return (
    <div
      id="rate-state-container"
      className="w-1/5 rounded-2xl bg-gradient-to-b from-[rgb(34,42,52)] to-[rgb(23,30,40)] p-6"
    >
      <div className="flex justify-center items-center">
        <img src="image.svg" className="w-1/2"></img>
      </div>
      <div className="w-full flex justify-center items-center text-amber-500 rounded-lg bg-rate-hex p-2 text-sm">
        You selected&nbsp;
        <span id="selected-rate">{selectedRate}&nbsp;</span> out of&nbsp;
        <span id="top-rate">{RATES.length}</span>
      </div>
      <h1 className="text-white text-2xl mt-5 mb-5">Thank you!</h1>
      <div className="text-gray-hex text-sm mb-5">
        We appreciate you are taking the time to give a rating. If you ever need
        to more support, don't hesitate to get in touch.
      </div>
    </div>
  )
}
export { ThankyouComponent }
