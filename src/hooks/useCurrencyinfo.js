import {useEffect, useState} from "react"

function useCurrencyInfo(){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_mFyX0bMUeFbGoIT1U8F5VUiB8VzMEFRysL5V4Mb5`)
        .then((res) => res.json())
        .then((res) => setData(res.data))
        console.log(data);
    }, [])
    console.log(data);
    return data
}

export default useCurrencyInfo;