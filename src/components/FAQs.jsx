import React from 'react'
import Accordion from "./UI/Accordion";
import faqbg from "../assets/Union.svg"

const accordionData = [
    {
        question: "Do you offer freelancers?",
        answer: "Yes, our company offers freelance opportunities for individuals looking to work independently on various projects and assignments."
    },
    {
        question: "What's the guarantee that I will be satisfied with the hired talent?",
        answer: "We strive to ensure satisfaction by carefully matching talents to your needs and offering support throughout the project."
    },
    {
        question: "Can I hire multiple talents at once?",
        answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
    },
    {
        question: "Why should I not go to an agency directly?",
        answer: "Choosing us ensures personalized attention, competitive rates, and direct communication with talents, enhancing flexibility and project customization."
    },
    {
        question: "Who can help me pick a right skillset and duration for me?",
        answer: "Our experienced team can assist in selecting the ideal skillset and duration tailored to your project requirements and goals."
    }
]

function FAQs() {
  return (
    <div className="bg-[#E8EEE7] px-6 mx-8 overflow-hidden py-10 rounded-3xl mt-20 flex sm:flex-row flex-col">
      <div className="sm:w-1/2 relative">
        <h2 className="font-coveredByYourGrace font-medium text-2xl text-[#9E9D9D]">
          What's on your mind
        </h2>
        <h2 className="font-bold text-4xl">Ask Questions</h2>
        <img src={faqbg} alt='union' className='absolute -left-2 top-20 hidden sm:block' draggable='false'/>
      </div>
      <div className="sm:w-1/2 space-y-4">
        {
            accordionData.map((data, index) => (
                <Accordion key={index} question={data.question} answer={data.answer} />
            ))
        }
      </div>
    </div>
  )
}

export default FAQs
