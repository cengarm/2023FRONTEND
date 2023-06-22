import { forwardRef, useEffect, useRef, useState } from "react";
import Deneme from "./components/Deneme";
import Mustafa from "./components/Mustafa";


function App() {
 
  // başlangıç durumu 0 olan count tanımladım.
  // set ile güncelledim.
const [count,setCount] = useState() 
const [text,setText] = useState()
const firstRef = useRef();
const func = (num) => {
  console.log("hesaplanıyor.....")
  for (let i = 0; i < 10000000; i++) {
    num += 1 
  }
  return num
}

const memo = func(count)

useEffect(() => {
   setCount("deneme2")// sayfa yüklendiği anda çalışmasını istediğin tüm fonksiyonları içerisine yazarsın.
},[]) //[] -> arrayın içi boş olduğu için tek 1 kere çalışıcak. 

  const arr = [
    {name :"array1", id:0},
    {name :"array2", id:1},
    {name :"array3", id:2},
  ]
  console.log(arr, "arr")

  const deneme = "props mantığı"

  console.log("first", firstRef)
  return (
    <>
    {memo}
    <div className="App">
      {/* Component mantığı */}
      <Mustafa element ={deneme}/> 
      <Deneme/>

      {/* Yukarıda değişken olarak tanımladım arrayı map yardımı ile ekrana bastım. */}
      {/*map kavramı fonksiyon ile çalışır. */}
      { 
        arr.map((adı,i) => (
          <div key={i}>{adı.name}</div>
      ))
      }
      
    </div>
    <input value={text} onChange={e => setText(e.target.value)} placeholder="ara" />
    </>
  );
}

export default App;
