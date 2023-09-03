import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context'
import { Input } from './Input'

export const AddTodo = () => {
  const [input, setInput] = useState<string>('')
  // const [todos, setTodos] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const {addTodo} = useTodo()

  useEffect(() => {
    if(inputRef.current){
      inputRef.current.focus()
    }
  },[])

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("form submitted",input)
    if(input.trim() !==''){
      addTodo(input)
      setInput('')
      toast.success('Added successfully')
    }else{
      toast.error('please enter data')
    }
  }

  return (
    <form onSubmit={handleSubmission}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
          <Input 
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            type='text'
            className='w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white'
            placeholder='start typing'
          />
          <button 
          // disabled={input.trim() !==''? false:true}
          type='submit'
          className="px-5 py-2 text-sm font-normal text-blue-100 bg-green-700 border-2 border-white-900 active:scale-95 rounded-xl">
            Submit
          </button>
      </div>
    </form>
  )
}
