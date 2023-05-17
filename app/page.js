'use client'
import React, { useState } from 'react'
import responses from './responses'

export default function Chatbot() {
  const [userInput, setUserInput] = useState('')
  const [chatHistory, setChatHistory] = useState([])

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  const handleResponse = (response) => {
    setChatHistory([...chatHistory, { userQuery: response, chatResponse: responses[response] }])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userQuery = userInput.trim()
    const chatResponse = responses[userQuery] || "I'm sorry, I couldn't understand your question. Please try again."

    setChatHistory([...chatHistory, { userQuery, chatResponse }])
    setUserInput('')
  }

  const responseButtons = Object.keys(responses).map((response, index) => <p key={index}>{response}</p>)

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col h-screen justify-between p-5 max-w-5xl text-black dark:text-white '>
        <div className='flex flex-col items-center w-full'>
          <h1 className='text-4xl text-center font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-slate-500 py-2'>
            System Design and Architecture Chatbot
          </h1>
          <div className='chat-history space-y-4 max-h-[500px] overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-700 p-5'>
            {chatHistory.length === 0 ? (
              <div className='text-gray-900 space-y-2'>
                <p className='font-semibold text-lg'>Possible Questions</p>
                {responseButtons}
              </div>
            ) : (
              chatHistory.reverse().map((entry, index) => (
                <div key={index} className='bg-gray-100 bg-opacity-20 p-4 rounded-lg max-w-lg'>
                  <strong className='text-gray-800'>User:</strong>
                  <p> {entry.userQuery}</p>
                  <strong className='text-gray-800'>Chatbot:</strong> <p>{entry.chatResponse}</p>
                </div>
              ))
            )}
          </div>
        </div>
        <div className='flex flex-col items-center backdrop-blur-xl'>
          <div className='response-buttons mt-4 w-full flex justify-center '>
            <button
              onClick={() => handleResponse('What is a scalability?')}
              className='inline-block bg-gray-700 bg-opacity-40 hover:bg-opacity-60 text-gray-900 font-semibold py-4 px-4 rounded-lg mr-2 w-72 truncate'
            >
              What is a scalability?
            </button>
            <button
              onClick={() => handleResponse('What is a domain-driven design?')}
              className='inline-block bg-gray-700 bg-opacity-40 hover:bg-opacity-60 text-gray-900 font-semibold py-4 px-4 rounded-lg mr-2 w-72 truncate'
            >
              What is a domain-driven design?
            </button>
            <button
              onClick={() => handleResponse('What is a data flow diagram?')}
              className='inline-block bg-gray-700 bg-opacity-40 hover:bg-opacity-60 text-gray-900 font-semibold py-4 px-4 rounded-lg mr-2 w-72 truncate'
            >
              What is a data flow diagram?
            </button>
          </div>
          <form onSubmit={handleSubmit} className='flex justify-center mt-4'>
            <input
              type='text'
              value={userInput}
              onChange={handleChange}
              className='border border-gray-300 rounded py-2 px-4 text-gray-800'
            />
            <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 ml-2 rounded'>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
