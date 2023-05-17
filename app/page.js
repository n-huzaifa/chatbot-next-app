'use client'
import React, { useState } from 'react'

const responses = {
  'What is a software architecture?':
    "Software architecture is the process of designing and defining the structure of a software system to meet the system's requirements and ensure it can be maintained and evolved over time.",
  'What is a system architecture?':
    "System architecture refers to the overall design of a system, including its structure, components, and their interactions, to meet the system's functional and non-functional requirements.",
  'What is the difference between a monolithic and a microservices architecture?':
    'A monolithic architecture is a single, self-contained application with all its functionality tightly coupled, while a microservices architecture is a collection of independent services that communicate with each other through APIs.',
  'What is a design pattern?':
    'A design pattern is a reusable solution to a commonly occurring problem in software design, providing a way to solve problems more efficiently and effectively.',
  'What is a layered architecture?':
    'A layered architecture divides a system into distinct layers, each responsible for a specific set of functionality, facilitating modularization and separation of concerns.',
  'What is an event-driven architecture?':
    'An event-driven architecture is a design approach where software components communicate with each other by producing and consuming events, providing loose coupling and scalability.',
  'What is an API?':
    'An API (Application Programming Interface) is a set of rules and protocols for accessing a software application or web-based system, enabling different software systems to communicate with each other.',
  'What is a RESTful API?':
    'A RESTful API is an API that follows the principles of Representational State Transfer (REST), providing a standardized way to interact with web-based systems using HTTP protocols.',
  'What is a service-oriented architecture?':
    'A service-oriented architecture (SOA) is a design approach where software components are designed as loosely coupled, interoperable services that can be reused across different applications and platforms.',
  'What is a domain-driven design?':
    'Domain-driven design (DDD) is an approach to software development that emphasizes understanding and modeling the problem domain to create a more effective software solution.',
  'What is a component-based architecture?':
    'A component-based architecture is a design approach where software components are designed as independent, reusable modules that can be assembled to form larger systems.',
  'What is a container?':
    'A container is a lightweight, standalone executable package that contains all the dependencies and configuration needed to run an application, providing a consistent and portable environment.',
  'What is a message queue?':
    'A message queue is a mechanism for asynchronous communication between software components, allowing messages to be sent and received without direct coupling or dependency.',
  'What is an architecture style?':
    'An architecture style is a set of principles, patterns, and practices that define a particular approach to designing software architecture, such as client-server, peer-to-peer, or event-driven.',
  'What is a data flow diagram?':
    "A data flow diagram is a graphical representation of a system's processes, inputs, outputs, and data flows, used to model and understand the system's functionality.",
  'What is a sequence diagram?':
    'A sequence diagram is a visual representation of the interactions between software components in a system, illustrating the sequence of messages exchanged between them.',
  'What is an architectural pattern?':
    'An architectural pattern is a general, reusable solution to a commonly occurring problem in software architecture, providing a way to address common design challenges more effectively and efficiently.',
  'What is a deployment diagram?':
    'A deployment diagram is a visual representation of the physical architecture of a system, illustrating how software components and hardware devices are deployed and connected.',
  'What is an architectural style?':
    'An architectural style is a specific way of organizing and structuring the components, modules, and relationships in a software system, such as layered, client-server, or event-driven.',
  'What is a scalability?':
    'Scalability is the ability of a system to handle increasing workloads and accommodate growth, either by scaling up (vertical scaling) or scaling out (horizontal scaling).',
}

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

  return (
    <div className='flex flex-col justify-center p-5 text-black dark:text-white'>
      <h1 className='text-3xl font-bold mb-4'>System Design and Architecture Chatbot</h1>
      <div className='chat-history space-y-4'>
        {chatHistory.map((entry, index) => (
          <div key={index} className='bg-gray-500 p-4 rounded-lg'>
            <strong className='text-blue-600'>User:</strong> {entry.userQuery}
            <br />
            <strong className='text-blue-600'>Chatbot:</strong> {entry.chatResponse}
          </div>
        ))}
      </div>
      <div className='response-buttons mt-4 w-full overflow-x-auto whitespace-nowrap'>
        {Object.keys(responses).map((question, index) => (
          <button
            key={index}
            onClick={() => handleResponse(question)}
            className='inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2 w-72 truncate'
          >
            {question}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className='mt-4'>
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
  )
}
