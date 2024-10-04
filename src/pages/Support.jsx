import React, { useState } from 'react';

export default function Support() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null); // Image upload state
  const [submitted, setSubmitted] = useState(false);

  const sanitizeInput = (input) => {
    // Simple sanitation to remove any harmful scripts (XSS prevention)
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML.trim();
  };

  const validateEmail = (email) => {
    // Basic email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sanitize and validate inputs
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedName = sanitizeInput(name);
    const sanitizedMessage = sanitizeInput(message);

    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      alert('All fields except image are required.');
      return;
    }

    if (!validateEmail(sanitizedEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Simulate form submission
    console.log('Support request submitted:', { name: sanitizedName, email: sanitizedEmail, message: sanitizedMessage, image });

    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
    setImage(null);
    setSubmitted(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    
    // Validate file type (allow only jpeg, jpg, png)
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (file && !allowedTypes.includes(file.type)) {
      alert('Only JPEG, JPG, and PNG files are allowed.');
      return;
    }

    // Validate file size (example: 2MB max)
    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file && file.size > maxSize) {
      alert('File size exceeds 2MB. Please choose a smaller file.');
      return;
    }

    // Set the valid image file to state
    setImage(file);
  };

  return (
    <div className='w-full min-h-screen bg-gray-100 p-10'>
      <h2 className='text-3xl font-bold text-center mb-8'>Support</h2>

      {/* Contact Form */}
      <div className='w-full md:w-1/2 mx-auto bg-white p-6 rounded-md shadow-md'>
        <h3 className='text-2xl font-semibold mb-4'>Contact Us</h3>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-gray-700 font-semibold mb-2' htmlFor='name'>
                Name
              </label>
              <input
                id='name'
                type='text'
                value={name}
                onChange={(e) => setName(sanitizeInput(e.target.value))}
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Enter your name'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-semibold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(sanitizeInput(e.target.value))}
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Enter your email'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-semibold mb-2' htmlFor='message'>
                Message
              </label>
              <textarea
                id='message'
                value={message}
                onChange={(e) => setMessage(sanitizeInput(e.target.value))}
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Describe your issue or ask a question...'
                rows='4'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-semibold mb-2' htmlFor='image'>
                Upload Image (optional)
              </label>
              <input
                id='image'
                type='file'
                accept='image/jpeg,image/jpg,image/png'
                onChange={handleImageUpload}
                className='w-full px-3 py-2 border rounded-md'
              />
            </div>
            <button
              type='submit'
              className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'
            >
              Submit
            </button>
          </form>
        ) : (
          <div className='text-green-600 font-semibold'>
            Thank you for contacting us! We will get back to you shortly.
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className='mt-16'>
        <h3 className='text-2xl font-semibold text-center mb-8'>Frequently Asked Questions</h3>
        <div className='w-full md:w-2/3 mx-auto bg-white p-6 rounded-md shadow-md'>
          <div className='mb-4'>
            <h4 className='text-lg font-bold mb-2'>How can I reset my password?</h4>
            <p className='text-gray-700'>
              You can reset your password by clicking on the "Forgot Password?" link on the login page. Follow the instructions sent to your registered email to reset your password.
            </p>
          </div>
          <div className='mb-4'>
            <h4 className='text-lg font-bold mb-2'>Where can I find the resources I need?</h4>
            <p className='text-gray-700'>
              After logging in, navigate to the "Resources" section from the menu. You'll find all the materials and tools you need there.
            </p>
          </div>
          <div className='mb-4'>
            <h4 className='text-lg font-bold mb-2'>How do I contact support?</h4>
            <p className='text-gray-700'>
              You can fill out the contact form above or email us directly at support@australiancenter.com. We'll respond within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
