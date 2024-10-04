import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Page1 from '../pages/Read/Page1';
import Page2 from '../pages/Read/Page2';
import Page3 from '../pages/Read/Page3';
import Page4 from '../pages/Read/Page4';
import Page5 from '../pages/Read/Page5';
import Page6 from '../pages/Read/Page6';
import Page7 from '../pages/Read/Page7';
import Page8 from '../pages/Read/Page8';
import Page9 from '../pages/Read/Page9';
import Page10 from '../pages/Read/Page10';
import Page11 from '../pages/Read/Page11';
import Page12 from '../pages/Read/Page12';
import Page13 from '../pages/Read/Page13';
import Page14 from '../pages/Read/Page14';
import Page15 from '../pages/Read/Page15';
import Page16 from '../pages/Read/Page16';
import Page17 from '../pages/Read/Page17';

export default function Content() {
  const [page, setPage] = useState(0);

  return (
    <div className="flex">
      {/* Sidebar */}
      <nav className=" h-screen bg-gray-100 p-4 overflow-y-auto w-[18%]">
        <h2 className="text-2xl font-bold mb-4">Contents</h2>
        <ul className="list-disc list-inside space-y-3">
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 1 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`} onClick={()=> setPage(1)}>Information Security Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 1 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`} onClick={()=> setPage(1)}>Acceptable Use Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 1 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`} onClick={()=> setPage(1)}>Privacy and Data Protection Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 2 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`} onClick={()=> setPage(2)}>Code of Conduct</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 2 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`} onClick={()=> setPage(2)}>Health and Safety Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 2 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`} onClick={()=> setPage(2)}>Remote Work Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 3 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(3)}>Anti-Fraud and Whistleblower Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 3 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(3)}>Conflict of Interest Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 3 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(3)}>Non-Disclosure Agreement (NDA) Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 4 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(4)}>Refund Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 4 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(4)}>Security Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 4 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(4)}>Accessibility Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 5 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(5)}>User-Generated Content Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 5 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(5)}>Data Retention Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 5 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(5)}>User Consent Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 6 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(6)}>Payment Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 6 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(6)}>Disclaimers Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 6 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(6)}>Social Media Use Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 7 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(7)}>Client Communication Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 7 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(7)}>Account Creation and Management Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 7 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(7)}>Affiliate Disclosure Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 8 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(8)}>Service Modification Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 8 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(8)}>Anti-Spam Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 8 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(8)}>Payment Processing Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 9 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(9)}>Code of Conduct Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 9 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(9)}>Feedback and Complaints Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 9 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(9)}>Sustainability Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 10 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(10)}>Anti-Discrimination and Harassment Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 10 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(10)}>Employee Training and Development Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 10 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(10)}> Drug and Alcohol Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 11 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(11)}>Employee Leave Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 11 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(11)}>Technology Use Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 11 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(11)}>Workplace Etiquette Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 12 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(12)}>Privacy Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 12 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(12)}>Crisis Management Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 12 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(12)}>Remote Work Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 13 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(13)}>Employee Recognition and Reward Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 13 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(13)}> Diversity and Inclusion Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 13 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(13)}>Work-Life Balance Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 13 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(14)}>Incident Reporting Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 14 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(14)}>Service Level Agreement (SLA) Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 14 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(14)}> Security Incident Response Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 14 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(15)}>Data Breach Response Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 15 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(15)}>Business Continuity Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 15 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(15)}>Vendor Management Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 15 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(16)}>Client Confidentiality Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 15 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(16)}> Accessibility Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 16 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(16)}>Technology Support Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 16 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(17)}>Client Engagement Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 16 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(17)}>Employee Onboarding Policy</li>
          <li className={`text-left text-sm hover:bg-blue-100 hover:text-blue-600 py-2 px-2 rounded-lg transition-colors cursor-pointer focus:bg-blue-100 focus:text-blue-600 ${
                page === 16 ? 'font-bold bg-blue-50 text-blue-600' : ''
              }`}onClick={()=> setPage(17)}>Review and Amendments</li>
        </ul>
      </nav>

      <div className="flex-1 p-10">
        {/* Main Content */}
        {page == 0 && (<div>
          <h1 className="text-5xl font-bold text-blue-500 mb-8">Australian Migration Services (Pvt) Ltd</h1>
          
          <h2 className="text-3xl font-bold mt-8">Course Introduction: Understanding Organizational Policies</h2>
          <p className="text-lg py-2">Welcome to Australian Migration Services (Pvt) Ltd's Organizational Policy Course! This course is designed to help you become familiar with the key policies that shape the way we operate. Whether you're a new employee, a team leader, or someone interested in understanding corporate governance, this course provides essential insights into the policies that guide our actions and decisions.</p>
          

          <h3 className="text-2xl font-bold mt-2">Why This Course?</h3>
          <p className="text-lg py-2">Organizational policies are the backbone of a structured and efficient workplace. By clearly defining what is expected, what is acceptable, and how certain situations should be handled, policies ensure that:</p>
         
         <div className=' pl-10 mt-2'>
         <ul className='list-disc pl-5'>
            <li className=' text-lg'>We maintain compliance with legal and ethical standards.</li>
            <li className=' text-lg'>We protect the company, its employees, and clients.</li>
            <li className=' text-lg'>We foster a safe, inclusive, and productive work environment.</li>
          </ul>
         </div>

         <h3 className="text-2xl font-bold mt-8">What You'll Learn</h3>
          <p className="text-lg py-2">Throughout this course, you will explore various policies, including:</p>
         
         <div className=' pl-10 mt-2'>
         <ul className='list-disc pl-5'>
            <li className=' text-lg'><span className=' font-bold'>Information Security Policy:</span> Understanding how to safeguard sensitive data.</li>
            <li className=' text-lg'><span className=' font-bold'>Health and Safety Policy:</span>Health and Safety Policy: Keeping the workplace safe for everyone.</li>
            <li className=' text-lg'><span className=' font-bold'>Anti-Discrimination and Harassment Policy:</span> Promoting equality and respect.</li>
            <li className=' text-lg'><span className=' font-bold'>Remote Work Policy:</span> Balancing flexibility with accountability.</li>
            <li className=' text-lg'><span className=' font-bold'>Sustainability Policy:</span> Our commitment to environmental responsibility.</li>
          </ul>
         </div>

         <h3 className="text-2xl font-bold mt-8">How to Navigate the Course</h3>
         <div className=' pl-10 mt-2'>
         <ul className='list-disc pl-5'>
            <li className=' text-lg'><span className=' font-bold'>Reading Materials:</span> The course is divided into several reading sections. Simply select a topic from the sidebar to begin reading.</li>
            <li className=' text-lg'><span className=' font-bold'>Interactive Content:</span> Engage with the material by using the "Next" and "Previous" buttons to move between sections.</li>
            <li className=' text-lg'><span className=' font-bold'>Completion:</span> Once you've read through all the sections, you'll be guided back to the dashboard to continue your learning journey.</li>
          </ul>
         </div>

          
        </div>)}

        {page == 1 && (<Page1 />)}
        {page == 2 && (<Page2 />)}
        {page == 3 && (<Page3 />)}
        {page == 4 && (<Page4 />)}
        {page == 5 && (<Page5 />)}
        {page == 6 && (<Page6 />)}
        {page == 7 && (<Page7 />)}
        {page == 8 && (<Page8 />)}
        {page == 9 && (<Page9 />)}
        {page == 10 && (<Page10 />)}
        {page == 11 && (<Page11 />)}
        {page == 12 && (<Page12 />)}
        {page == 13 && (<Page13 />)}
        {page == 14 && (<Page14 />)}
        {page == 15 && (<Page15 />)}
        {page == 16 && (<Page16 />)}
        {page == 17 && (<Page17 />)}

        

        {page != 17 && (<div className=' my-7 float-right py-3 px-8 text-center text-white font-semibold text-lg mr-9 bg-blue-600 rounded-xl cursor-pointer hover:bg-opacity-80' onClick={() => setPage(page+1)}>Next</div>)}
        {page == 17 && (<Link to='/dashboard' className=' my-7 float-right py-3 px-8 text-center text-white font-semibold text-lg mr-9 bg-green-600 rounded-xl cursor-pointer hover:bg-opacity-80'>Finish</Link>)}
        {page != 0 && (<div className=' my-7 float-left py-3 px-8 text-center text-white font-semibold text-lg ml-9 bg-blue-600 rounded-xl cursor-pointer hover:bg-opacity-80' onClick={() => setPage(page-1)}>Previous</div>)}
      </div>

    </div>
  );
}
