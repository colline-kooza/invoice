"use client"
import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "How can I pay my invoice?",
            a: "You can easily pay your invoice through our secure online payment portal. We accept various payment methods, including credit cards and bank transfers. Just log in to your account and follow the payment instructions."
        },
        {
            q: "When is the due date for my invoice?",
            a: "The due date for your invoice is clearly mentioned on the invoice itself. Please check the document for the specific date. If you have trouble finding it, feel free to reach out to our customer support, and they'll be happy to assist you."
        },
        {
            q: "Can I request an extension for my payment?",
            a: "Certainly! We understand that unforeseen circumstances may arise. If you need an extension for your payment, please contact our billing department as soon as possible. We'll do our best to work out a solution that suits your needs."
        },
        {
            q: "What should I do if I have a question about my invoice?",
            a: "If you have any questions or concerns regarding your invoice, don't hesitate to reach out to our customer support team. You can contact us via email or phone, and our representatives will provide you with the assistance and information you need."
        },
        {
            q: "Is there a late fee for overdue invoices?",
            a: "Yes, to encourage timely payments, we may apply a late fee to overdue invoices. It's important to pay your invoice by the due date to avoid any additional charges. If you foresee any issues with payment, please contact us in advance to discuss your situation."
        }
    ];
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}