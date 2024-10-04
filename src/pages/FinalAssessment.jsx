import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LearningButton from '../components/LearningButton'; // Assuming LearningButton is your custom button component

// Updated quiz data with 10 policy, 10 security, and 10 true/false questions
const policyQuestions = [
  {
    question: "What is the primary goal of the outlined security measures?",
    options: ["A) To enforce disciplinary actions", "B) To ensure the confidentiality, integrity, and availability of information", "C) To manage employee access to company systems", "D) To protect company resources from personal use"],
    answer: "B",
  },
  {
    question: "Which requirement is necessary for controlling access to systems?",
    options: ["A) Single-factor authentication", "B) Strong password policies with a minimum of 8 characters", "C) Multi-factor authentication (MFA)", "D) Unlimited access for all employees"],
    answer: "C",
  },
  {
    question: "Company resources are intended for:",
    options: ["A) Personal use at any time", "B) Business purposes only", "C) Downloading unauthorized software", "D) Engaging in peer-to-peer file sharing"],
    answer: "B",
  },
  {
    question: "Which of the following actions is prohibited?",
    options: ["A) Using company resources for work-related tasks", "B) Downloading or installing unauthorized software", "C) Accessing company systems during lunch breaks", "D) Checking personal emails"],
    answer: "B",
  },
  {
    question: "Personal data should be collected only for:",
    options: ["A) Any reason", "B) Legitimate business purposes only", "C) Marketing without restrictions", "D) Sharing with third parties"],
    answer: "B",
  },
  {
    question: "Sharing data with third parties is permissible only when:",
    options: ["A) It is convenient", "B) There is explicit consent from the data subject or required by law", "C) The employee believes it is necessary", "D) It benefits the organization"],
    answer: "B",
  },
  {
    question: "Employees are expected to conduct themselves in a manner that upholds:",
    options: ["A) Personal interests", "B) The company's values of integrity, respect, and ethical conduct", "C) Strict hierarchy", "D) Profit maximization"],
    answer: "B",
  },
  {
    question: "Which of the following is a requirement?",
    options: ["A) Accepting gifts from clients", "B) Disregarding conflicts of interest", "C) Reporting all accidents", "D) Avoiding situations where personal interests conflict with company interests"],
    answer: "D",
  },
  {
    question: "What is the primary goal of ensuring a safe working environment?",
    options: ["A) To enforce punctuality", "B) To provide a safe working environment", "C) To ensure compliance with health and safety regulations", "D) To monitor employee productivity"],
    answer: "B",
  },
  {
    question: "Employees must report unsafe conditions to:",
    options: ["A) Their coworkers", "B) The HR department only", "C) The safety officer or HR department", "D) The IT team"],
    answer: "C",
  },
  // ... (other policy questions)
];

const securityQuestions = [
  {
    question: "Which of the following is the strongest password?",
    options: ["a) Password123", "b) Qwerty2024!", "c) $8G7wq!3n9#1", "d) JohnDoe2020"],
    answer: "c",
  },
  {
    question: "What is phishing?",
    options: ["a) A type of malware that steals your data", "b) An email or message that tries to trick you into revealing sensitive information", "c) A firewall setting that blocks external attacks", "d) A security policy enforced by antivirus software"],
    answer: "b",
  },
  {
    question: "Which of the following should you avoid doing while using public Wi-Fi?",
    options: ["a) Checking social media", "b) Logging into your online banking account", "c) Downloading files", "d) Watching videos"],
    answer: "b",
  },
  {
    question: "What should you do if you receive an unexpected email with an attachment from someone you don't know?",
    options: ["a) Open the attachment to see what it is", "b) Delete the email immediately", "c) Reply to the email asking for more details", "d) Forward the email to your IT department"],
    answer: "b",
  },
  {
    question: "Which of the following is an example of multi-factor authentication (MFA)?",
    options: ["a) Logging in with a password and a fingerprint", "b) Logging in with a username and password", "c) Logging in using a password and security question", "d) Using a password reset feature"],
    answer: "a",
  },
  {
    question: "What is the best practice when creating a password?",
    options: ["a) Use a short and easy-to-remember word", "b) Use a combination of letters, numbers, and special characters", "c) Use the same password across all accounts for convenience", "d) Include personal information like your name and birthdate for easy recall"],
    answer: "b",
  },
  {
    question: "What is a common indicator of a potential malware infection?",
    options: ["a) Your computer runs faster than usual", "b) You are unable to log into your email", "c) You notice unexpected pop-ups or changes to your system", "d) You receive an email from your IT department"],
    answer: "c",
  },
  {
    question: "What should you do if you suspect your computer has been infected by malware?",
    options: ["a) Ignore it, the problem will go away", "b) Turn off your computer and restart it later", "c) Disconnect from the network and report it to IT immediately", "d) Run a scan and then continue using the computer as normal"],
    answer: "c",
  },
  {
    question: "Which of the following actions will help protect your data on a personal device?",
    options: ["a) Use the same password for all your accounts", "b) Regularly update your software and applications", "c) Share your passwords with close friends for safekeeping", "d) Disable security features to make your device faster"],
    answer: "b",
  },
  {
    question: "What should you do if you receive an email from someone you know, but the content seems suspicious or asks for personal information?",
    options: ["a) Respond to the email to confirm it's legitimate", "b) Provide the requested information", "c) Contact the sender through a different method to confirm the email's authenticity", "d) Click on the link in the email to see what it's about"],
    answer: "c",
  },
  // ... (other security questions)
];

const trueFalseQuestions = [
  {
    question: "Employees must use a VPN when accessing company resources from public Wi-Fi.",
    answer: true,
  },
  {
    question: "It is acceptable to share passwords with coworkers in emergency situations.",
    answer: false,
  },
  {
    question: "All phishing emails can be easily identified by poor grammar and spelling.",
    answer: false,
  },
  {
    question: "Data breaches can only occur from external attacks.",
    answer: false,
  },
  {
    question: "Two-factor authentication adds an extra layer of security.",
    answer: true,
  },
  {
    question: "Employees are allowed to download personal software on company devices.",
    answer: false,
  },
  {
    question: "It is necessary to report lost or stolen devices to IT immediately.",
    answer: true,
  },
  {
    question: "Social engineering attacks often rely on manipulation and deception.",
    answer: true,
  },
  {
    question: "All sensitive data must be encrypted before being transmitted over the internet.",
    answer: true,
  },
  {
    question: "Once data is deleted, it is permanently gone and cannot be recovered.",
    answer: false,
  },
  // ... (other true/false questions)
];

// Function to shuffle questions and get random 10
const getRandomQuestions = () => {
  let selectedPolicyQuestions = policyQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
  let selectedSecurityQuestions = securityQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
  let selectedTrueFalseQuestions = trueFalseQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
  
  return [
    ...selectedPolicyQuestions.map(q => ({ ...q, type: 'multiple-choice' })),
    ...selectedSecurityQuestions.map(q => ({ ...q, type: 'multiple-choice' })),
    ...selectedTrueFalseQuestions.map(q => ({ ...q, type: 'true-false' })),
  ].sort(() => 0.5 - Math.random());
};

const tips = [
  "Read each question carefully before selecting an answer.",
  "Consider all options available for each question.",
  "Don't rush; you have time to think through your answers.",
  "Review the material related to the quiz if needed.",
  "Good luck! Stay calm and do your best!",
];

export default function FinalAssessment() {
  const [quizQuestions, setQuizQuestions] = useState(getRandomQuestions()); // Load random questions initially
  const [selectedOptions, setSelectedOptions] = useState(Array(quizQuestions.length).fill(''));
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [currentTip, setCurrentTip] = useState(tips[0]);
  const [tipIndex, setTipIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          setShowResults(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    const tipTimer = setInterval(() => {
      setTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
      setCurrentTip(tips[tipIndex]);
    }, 10000); // Change tip every 10 seconds

    return () => {
      clearInterval(timer);
      clearInterval(tipTimer);
    };
  }, [tipIndex]);

  const handleOptionChange = (index, option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = option;
    setSelectedOptions(updatedOptions);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRetry = () => {
    setQuizQuestions(getRandomQuestions()); // Get new random questions
    setSelectedOptions(Array(quizQuestions.length).fill(''));
    setShowResults(false);
    setTimeLeft(1800); // Reset timer to 30 minutes
  };

  return (
    <div className='w-[90%] mx-auto mt-20 relative'>
      {/* Fixed container for timer, progress, and tips */}
      <div className='fixed top-16 right-4 p-4 bg-white shadow-md rounded-md z-20'>
        <div className='text-lg font-semibold'>
          Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </div>
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
        </div>
      ) : (
        <div>
          <h2 className='text-2xl font-bold mb-4'>Final Assessment</h2>
          <div className='flex flex-col'>
            {quizQuestions.map((question, index) => (
              <div key={index} className='border rounded-lg p-4 bg-slate-100 mb-4'>
                <h3 className='font-semibold text-xl'>{question.question}</h3>
                <div className='flex flex-col mt-2'>
                  {question.type === 'multiple-choice' ? (
                    question.options.map((option, optionIndex) => (
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
                    ))
                  ) : (
                    <div className='flex flex-col'>
                      <label className='flex items-center mb-2'>
                        <input
                          type='radio'
                          name={`question-${index}`}
                          value="true"
                          checked={selectedOptions[index] === 'true'}
                          onChange={() => handleOptionChange(index, 'true')}
                          className='mr-2'
                        />
                        <span className='text-lg'>True</span>
                      </label>
                      <label className='flex items-center mb-2'>
                        <input
                          type='radio'
                          name={`question-${index}`}
                          value="false"
                          checked={selectedOptions[index] === 'false'}
                          onChange={() => handleOptionChange(index, 'false')}
                          className='mr-2'
                        />
                        <span className='text-lg'>False</span>
                      </label>
                    </div>
                  )}
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
