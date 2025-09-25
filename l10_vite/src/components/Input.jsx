import React from "react"

function Input(label,amount,onAmountChange,onCurrencyChange,currencyOption=[],className="",selectCurrency="usd",amountDisable=false,currencyDisable=false

    return(
        <div className={`bg-white p-3 rounded-lg text-center ${className}`}>
            <div className="w-1/2">
            <label className="text-black/40 mb-2 inline-block" >{label}
            </label>
            <input className="outline-none w-full bg-transparent" type="number" placeholder="amount"disabled={amountDisable} value={amount} onChange={}
            />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">curreny type</p>
            <select className="rounded-lg px-1 py-1 bg-gray-50 cursor-pointer outline-none">
                <option value="usd">
                    usd
                </option>
            </select>
            </div>

        </div>
    )
}
export default Input;