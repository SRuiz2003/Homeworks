import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"

function FirstApp() {
  const{counter,increment,decrease,reset} = useCounter(1)
  const{data,isLoading,hasError} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)
  return (
    <>
     <h1>Breaking Bad</h1>
     <span>{data}</span>
    </>
  )
}

//Mataron la api de breaking bad profe :(

export default FirstApp
