import React, { useEffect, useState, useRef } from 'react'; // Add useRef to the import

import { Link } from 'react-router-dom';

// Updated quiz data with 10 questions
const allQuizQuestions = [
  {
    question: 'What type of personal data can the website collect from users?',
    options: [
      'Name and physical address', 
      'Name, email address, contact information, and browsing activity', 
      'Age and nationality only', 
      'Employment history'
    ],
    answer: 'Name, email address, contact information, and browsing activity',
  },
  {
    question: 'How can users request the deletion of their personal data?',
    options: [
      'By sending a letter to the company', 
      'By logging into their account and clicking “Delete Data”', 
      'By contacting the website’s support team through the provided privacy contact details', 
      'By deactivating their account'
    ],
    answer: 'By contacting the website’s support team through the provided privacy contact details',
  },
  {
    question: 'What happens if a user violates the Terms of Service?',
    options: [
      'They are given a warning', 
      'Their account may be suspended or terminated, and they could face legal action', 
      'They are charged a penalty fee', 
      'Nothing happens'
    ],
    answer: 'Their account may be suspended or terminated, and they could face legal action',
  },
  {
    question: 'Why does the website use cookies?',
    options: [
      'To collect user passwords', 
      'To enhance user experience, personalize content, and analyze site traffic', 
      'To display pop-up ads', 
      'To share data with third-party websites'
    ],
    answer: 'To enhance user experience, personalize content, and analyze site traffic',
  },
  {
    question: 'What is the typical time frame for processing refunds?',
    options: [
      '1-2 business days', 
      '3-5 business days', 
      '7-14 business days after approval', 
      '30 days'
    ],
    answer: '7-14 business days after approval',
  },
  {
    question: 'What encryption method is used to protect sensitive user data?',
    options: [
      'AES Encryption', 
      'SSL (Secure Socket Layer) encryption', 
      'Blockchain encryption', 
      'HTTP encryption'
    ],
    answer: 'SSL (Secure Socket Layer) encryption',
  },
  {
    question: 'How can users report accessibility issues?',
    options: [
      'Through a live chat', 
      'By using the designated feedback form or contacting the accessibility support team', 
      'By posting on social media', 
      'No reporting system is available'
    ],
    answer: 'By using the designated feedback form or contacting the accessibility support team',
  },
  {
    question: 'What type of content is prohibited under the User-Generated Content Policy?',
    options: [
      'Original content', 
      'Content that is offensive, discriminatory, or violates copyright laws', 
      'Reviews and comments', 
      'Constructive criticism'
    ],
    answer: 'Content that is offensive, discriminatory, or violates copyright laws',
  },
  {
    question: 'How long will the website retain user data after account deletion?',
    options: [
      'Indefinitely', 
      'For as long as legally required, then securely deleted', 
      'For 2 years', 
      'Data is deleted immediately'
    ],
    answer: 'For as long as legally required, then securely deleted',
  },
  {
    question: 'At what point does the website obtain user consent for data collection?',
    options: [
      'When the user visits the website', 
      'During account creation and specific interactions requiring personal data', 
      'After a user has created multiple accounts', 
      'When a user logs out'
    ],
    answer: 'During account creation and specific interactions requiring personal data',
  },
];

const tips = [
  "Read each question carefully before selecting an answer.",
  "Consider all options available for each question.",
  "Don't rush; you have time to think through your answers.",
  "Review the material related to the quiz if needed.",
  "Good luck! Stay calm and do your best!",
];

const getRandomQuestions = () => {
  let shuffledQuestions = [...allQuizQuestions].sort(() => 0.5 - Math.random());
  return shuffledQuestions.slice(0, 10);
};

export default function PreAssessment() {
  const initialTime = 30; // Set to 30 seconds
  const [quizQuestions, setQuizQuestions] = useState(getRandomQuestions());
  const [selectedOptions, setSelectedOptions] = useState(Array(quizQuestions.length).fill(''));
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [timeSpent, setTimeSpent] = useState(null); // Time spent on quiz, initially null
  const [currentTip, setCurrentTip] = useState(tips[0]);
  const [tipIndex, setTipIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // Start the timer
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerRef.current);
          // If time runs out, set the time spent to initialTime (full time used)
          setTimeSpent(initialTime);
          setShowResults(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Timer for tips
    const tipTimer = setInterval(() => {
      setTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
      setCurrentTip(tips[tipIndex]);
    }, 10000);

    // Cleanup function
    return () => {
      clearInterval(timerRef.current);
      clearInterval(tipTimer);
    };
  }, [tipIndex]);

  const handleOptionChange = (index, option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = option;
    setSelectedOptions(updatedOptions);
  };

  const handleSubmit = () => {
    // Clear the timer immediately upon submission
    clearInterval(timerRef.current);

    // Calculate time spent based on the time left
    const timeSpentCalculation = initialTime - timeLeft;
    setTimeSpent(timeSpentCalculation); // Update time spent correctly

    // Prevent any further updates to timeLeft after submission
    setTimeLeft(0); 

    // Show results
    setShowResults(true);
  };

  const handleRetry = () => {
    setQuizQuestions(getRandomQuestions());
    setSelectedOptions(Array(10).fill(''));
    setShowResults(false);
    setTimeLeft(initialTime); // Reset timer to 30 seconds
    setTimeSpent(null); // Reset time spent

    // Restart the timer only on retry
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerRef.current);
          setTimeSpent(initialTime); // Set time spent to initial time if time runs out
          setShowResults(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const formatTimeSpent = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes} minutes ${seconds} seconds`;
  };

  return (
    <div className='w-[90%] mx-auto mt-20 relative'>
      <div className='fixed top-16 right-4 p-4 bg-white shadow-md rounded-md'>
        <div className='text-lg font-semibold'>
          Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </div>
        {/* Show time spent only after quiz is done */}
        {showResults && timeSpent !== null && (
          <div className='text-lg font-semibold'>
            Time Spent: {formatTimeSpent(timeSpent)}
          </div>
        )}
        <div className='text-lg font-semibold'>
          Progress: {selectedOptions.filter(option => option !== '').length}/{quizQuestions.length}
        </div>
        <div className='mt-4'>
          <h2 className='text-lg font-bold'>Tip:</h2>
          <p>{currentTip}</p>
        </div>
      </div>

      {showResults ? (
        <div>
          <h2 className='text-2xl font-bold mb-4'>Your Results</h2>
          <p className='text-lg'>
            You answered {selectedOptions.filter((option, index) => option === quizQuestions[index].answer).length} out of {quizQuestions.length} questions correctly.
          </p>
          <button
            onClick={handleRetry}
            className='bg-blue-600 text-white px-4 py-2 rounded-md mt-4'
          >
            Retry
          </button>

          <Link to="/dashboard">
            <button className='bg-green-600 text-white px-4 py-2 rounded-md mt-4 ml-10'>Finish</button>
          </Link>
        </div>
      ) : (
        <div>
          <h2 className='text-2xl font-bold mb-4'>Pre-Assessment Quiz</h2>
          <div className='flex flex-col'>
            {quizQuestions.map((question, index) => (
              <div key={index} className='border rounded-lg p-4 bg-slate-100 mb-4'>
                <h3 className='font-semibold text-xl'>{question.question}</h3>
                <div className='flex flex-col mt-2'>
                  {question.options.map((option, optionIndex) => (
                    <label key={optionIndex} className='flex items-center mb-2'>
                      <input
                        type='radio'
                        name={`question-${index}`}
                        value={option}
                        checked={selectedOptions[index] === option}
                        onChange={() => handleOptionChange(index, option)}
                        className='mr-2'
                      />
                      <span className='text-lg'>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-8'>
            <button
              onClick={handleSubmit}
              className='bg-blue-600 text-white px-4 py-2 rounded-md'
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}