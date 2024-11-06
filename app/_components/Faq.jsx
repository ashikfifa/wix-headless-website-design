import React from 'react'
import { faqs } from '../helpers/mock-data'
import Accordion from './Accordion'

const Faq=()=> {
  return (
    <div className='py-14 px-10'>
      <p className='  text-5xl font-normal mb-8'>FAQ</p>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  )
}

export default Faq
