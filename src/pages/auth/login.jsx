import React, { useState, useEffect } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const logos = [
  "/public/logo1.jpeg",
  "/public/logo2.jpeg",
  "/public/logo3.jpeg"
];

export const Login = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('username is required'),
    password: Yup.string()
      .min(1, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values) => {
    axios.post('http://localhost/project/Requestform/login.php', values)
      .then(response => {
        if (response.data.status === 'success') {
          navigate('/admin/');
        } else {
          setError(response.data.message);
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
        setError('An unexpected error occurred. Please try again later.');
      });
  };

  return (
    <div className='flex flex-row bg-[#ECEDF2] w-full h-screen items-center'>
      <div className='flex flex-col items-center justify-center w-[85%] sm:w-[80%] md:w-[60%] lg:w-[40%] h-[27rem] bg-white shadow-md mx-auto rounded-md gap-2'>
        <div className='relative w-[70%] h-20 overflow-hidden'>
          {logos.map((logo, index) => (
            <img
              key={index}
              className={`absolute w-full h-full object-contain transition-opacity duration-1000 ${
                index === currentLogoIndex ? 'opacity-100' : 'opacity-0'
              }`}
              src={logo}
              alt={`Logo ${index + 1}`}
            />
          ))}
        </div>

        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col items-center w-[85%] md:w-[80%] lg:w-[70%] h-max gap-4 justify-center">
            <div className='flex flex-col w-full gap-2'>
              <label htmlFor="username">Username</label>
              <Field
                name="username"
                type="text"
                placeholder="Username"
                className="w-full text-sm border border-[#8F8F8F] px-2 py-3"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className='flex flex-col w-full gap-2'>
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="w-full text-sm border border-[#8F8F8F] px-2 py-3"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            {error && (
              <div className="text-red-500 text-xs">{error}</div>
            )}
            <div className='flex flex-col w-full'>
              <button
                type="submit"
                className="w-full px-3 py-3 bg-[#080140] text-white rounded-sm"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
        <div className="w-[85%] md:w-[80%] lg:w-[70%]">
          <p className="text-xs text-[#8F8F8F]">
            Forgot your password?
          </p>
        </div>
      </div>
    </div>
  );
};
