import { useState } from 'react'
import './App.css'

function App() {
  const [cashiers, setCashiers] = useState([[1, 3], [2, 4], [55, 28, 3], [], [23]])
  const divCash = cashiers.map((cashier, index) => {
    const divCustomers = cashier.map((customer, i) => 
      <li key={i} className='rounded-full flex items-center justify-center w-16 h-16 border-2 bg-slate-200'>{customer}</li>
    )
    return <ul key={index} id={index} className="rounded p-1 border-2 flex flex-col items-center gap-2">
          <h2 className="rounded bg-slate-400 text-lg p-2 m-2">Cashier</h2>
          {divCustomers}
        </ul> }
    )

  return (
    <>
      <h1 className='pb-6'>Potato, Most delicious baked</h1>
      <section className='flex justify-center gap-10'>
        {divCash}
      </section>
    </>
  )
}

export default App
