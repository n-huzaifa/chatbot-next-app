'use client'
import React, { useState, useEffect } from 'react'
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

  const clearHistory = () => {
    setChatHistory([])
  }

  const setInput = (e) => {
    setUserInput(e.target.outerText)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userQuery = userInput.trim()
    const chatResponse = responses[userQuery] || "I'm sorry, I couldn't understand your question. Please try again."

    setChatHistory([...chatHistory, { userQuery, chatResponse }])
    setUserInput('')
  }

  const responseButtons = Object.keys(responses).map((response, index) => (
    <p key={index} onClick={setInput} className='cursor-pointer'>
      {response}
    </p>
  ))

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col h-screen justify-between p-5 max-w-5xl text-black dark:text-white '>
        <div className='flex flex-col items-center w-full'>
          <h1 className='text-4xl text-center font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-slate-900 py-2'>
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
      <footer className='absolute bottom-10 left-3 flex flex-col text-md space-y-4'>
        <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 ml-2 rounded' onClick={clearHistory}>
          Clear Chat
        </button>
        <span className='font-semibold text-sm cursor-default'>
          developed by <span className='cursor-pointer hover:text-yellow-300 transition duration-300'>Noor </span>
          <span className='cursor-pointer hover:text-red-400 transition duration-300'>ul </span>
          <span className='cursor-pointer hover:text-green-400 transition duration-300'>Islam </span>
          <span className='cursor-pointer hover:text-blue-400 transition duration-300'>Huzaifa</span>
        </span>
        <div className='flex justify-center space-x-4'>
          <a href='https://twitter.com/Diple_me' className='text-2xl hover:text-blue-400 transition duration-300'>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 512 512'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
            </svg>
          </a>
          <a
            href='https://github.com/n-huzaifa/chatbot-next-app'
            className='text-2xl hover:text-gray-400 transition duration-300'
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 496 512'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
            </svg>
          </a>
          <a
            href='https://www.linkedin.com/in/noor-ul-islam-huzaifa-67505a201/'
            className='text-2xl hover:text-blue-400 transition duration-300'
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 448 512'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}
