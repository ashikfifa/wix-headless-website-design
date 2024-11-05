'use client'
import React from "react";
import {useState}  from "react";
import { FaPlus } from "react-icons/fa6";


const Accordion = (props) => {
    const { question, answer }= props
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <div className="border border-b-gray-200 rounded-lg">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium hover:text-indigo-600 transition-colors"
        >
          <span>{question}</span>
          <FaPlus />

        </button>
        {isOpen && (
          <div className="p-4 pt-5 text-gray-600 border-t border-gray-200">
            {answer}
          </div>
        )}
      </div>
    );
  };

  export default Accordion