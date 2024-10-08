import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
  <>
    <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/prashant-kumar-461911237/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/prashanttheone" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/prashant_the_one/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
    <div>
    <aside
      className="p-4 my-8 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h3 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">
        Get more updates...
      </h3>
      <p className="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300">
        Do you want to get notified when a new component is added to Deciefer?
        Sign up for our newsletter and you'll be among the first to find out
        about new features, components, versions, and tools.
      </p>

      <form
        className=" "
        min-width="400 500 600 700"
      >
        <div data-style="clean" className="flex items-end mb-3">
          <div
            data-element="fields"
            data-stacked="false"
            className="flex items-center w-full max-w-md mb-3"
          >
            <div className="relative w-full mr-3 ">
              <label
                htmlFor="member_email"
                className="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                </svg>
              </div>
              <input
                id="member_email"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="email_address"
                aria-label="Email Address"
                placeholder="Your email address..."
                required
                type="email"
              />
            </div>
            <button data-element="submit" className="formkit-submit">
              <span className="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Subscribe
              </span>
            </button>
          </div>
        </div>
      </form>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        By subscribing, you agree with ConvertKit's{' '}
        <a
          rel="nofollow"
        //   href="https://convertkit.com/terms"
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          Terms of Service
        </a>{' '}
        and{' '}
        <a
          rel="nofollow"
          className="text-blue-600 hover:underline dark:text-blue-500"
        //   href="https://convertkit.com/privacy"
        >
          Privacy Policy
        </a>
        .
      </div>
    </aside>
    </div>
    </>
 
  )
}
export default Footer