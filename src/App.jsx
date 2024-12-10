import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState('USD')
  const [to,setTo] = useState('INR')
  const [convertedAmount,setAmountConverted] = useState(0)
  const currencyInfo1 = useCurrencyInfo()

  const options = ["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","USD","ZAR"]

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setAmountConverted(amount)
  }
  const convert= () => {
    if (from==="USD"){
      setAmountConverted(amount*currencyInfo1[to])
    }else{
      const value = amount/Number(currencyInfo1[from])
      setAmountConverted(value*currencyInfo1[to])
    }
  }

  return (
    <>
    <div
    className="w-full h-screen flex flex-wrap bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAdEAEBAQEBAQEBAQEAAAAAAAAAERIBAmETUSED/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwcG/8QAGhEBAQEBAQEBAAAAAAAAAAAAABESARMDAv/aAAwDAQACEQMRAD8A8UHBHor4YgqCBUhUEKVIVBClSFQQpUhUOFKg1QQpUiKEKlTBziocSlTBFQQpUwRUEKVPOHDBSkFAqVMPnDEQpQRUECpgioIJUwKggVIMQUgcEAhDggFBFQQKUEOCCUoIcEClBFQQEhUEBIVAlC4IYKUoIZhUwRUEEqYfOHBApA4fOAkSqhxCp5wRUEEqYIqCBUQHBFUgcEAgcEAgcOAkKgiBBUEEqQqCBUwRUEClzghw4FTBFASphwxApQRQQqYIoBSghgQoIYgFBFQQKQOCBUQKAtTBFAKmCKAVMOGApQQwJQAJ0ABOiAAcEAgqDnEKkRcEEqIcVBClTDioIlKmCKg5wqVMOKghSpgioIUqYIqHEqVEOKhFKyhxUONVqpgioIUqYIqBKlKCGcKVMEVBClTBFQQpSgioIlSpgioIUqYOcVBClKBUEKVMEVBEqUoIqDnClTBzi4IlSpgi+cGUoiHF88nzyUZwRrgZKs6yyI1yfPCaOc65oF5GWqqYTTPSyUTBF56M9KlRBF56eSiIGmRlKMw0yeSkZwRpzyeSk6y5w4154PCVc9YwRtg+eDRjrHJ88tueFYTS4658nlvg8JprzYYPnh0c8HhO/pfNhj4MOjB4TS+bn5/zPDo54GDS8+bDng8N8jKaaxxjg8fGuT55TRnjH8/h4a5Pnk0uXBgYdGDw3pnzc+B+bo54PBo83NgYdOBg0ebDA/N0c8HlNHm5+eDw6MjKaXzc+Dw3yeTRjjn54PDfPBlNLhjzwfPDXnk8mjLLJ88tYOeU0uWfPJ5aQ4lXLLJ5ac8nlKsZc8nzy1yOeSkZwRrk+eU0sZQ41wMJoyyyfPLXnhXPHxNGWGT55bY+HhNGWGTy2weDSxxZPLXIy3VjLPBlrk8mljLIy1yMmiMsjLXJz4mkjLIy1yeTRGPPJxrg8GkjGCNsDCaIx5w4154PBojHKueW2BmJpYxyeW3PJ88/E0RjzyfPDbPw+eU0sY88HhtzweE0Rjk+eW3PB4TSxjzgzW+D54TSxhzyfPLbJ88pojHngYb5GTSxjgYb88jKaI8/J88t/wAz54dNLlhg8ujAwmly58Hh04GE0Zc+Bh04GTRlz4PDoz8GPiaMsMfBj46MDBtMufAw6cDCaXLn54GHTg8Gky5ueDw6MjCaMufng8Ojng8Jojn/ADVhvzz8PCaIw55+Hzz8bYPKaWMcDnlvzz8GfhojHB4a5PKaIxweGuTyaIxyeW2BlNDHIy2yMpocfOcOcAdXQ+c4c4AinOCcIAqcOc/hBEOc/gnP4ABzgnDDIU4JwwIIIAA5z/Vc5wwiDnOHOEAODnAAOCAIp84JwBkOcPnOGAE4fOcAAc5w5wBATgnAAf/Z')`,
    }}
>   <h1 className='text-6xl text-white mt-36 mb-0 m-auto'>Currency Exchange</h1>
    <div className="w-full mt-0">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setFrom(currency)}
                        selectCurrency={from}
                        onAmountChange={(amount) => setAmount(amount)}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setTo(currency)}
                        selectCurrency={to}
                        amountDisable
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from} to {to}
                </button>
            </form>
        </div>
    </div>
</div>
</>
);
}

export default App
