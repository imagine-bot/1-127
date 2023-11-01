import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-2xl mb-4">Counter: {count}</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors mx-auto"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  )
}