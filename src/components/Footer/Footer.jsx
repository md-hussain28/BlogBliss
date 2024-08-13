import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-2">MyBlog</h1>
          <p className="text-sm font-light">© 2024 MyBlog. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414-1.414M12 7.5V4.25M6.05 6.05l-1.414 1.414M4.25 12H7.5M6.05 17.95l-1.414 1.414M12 16.5v3.25M17.95 17.95l1.414-1.414M19.75 12H16.5M17.95 6.05l1.414-1.414M12 12l5-5-5 5-5-5 5 5z" />
            </svg>
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.333 3H3.667C2.746 3 2 3.746 2 4.667v14.666C2 20.254 2.746 21 3.667 21h14.666C21.254 21 22 20.254 22 19.333V4.667C22 3.746 21.254 3 20.333 3zM16.667 8h-4.334L9 13.333h2.667L10 18h4.333L15 13.333h-2.667L16.667 8z" />
            </svg>
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v2h-5v2h7v-2h-5v-2h5v-2h-7v2zm-2-2v2h5v-2h-5zM7 8H2V6h5V4h2v2h5v2H9v12H7V8zM4 4V2h2v2H4zm5 16H7v-2h2v2zm5-4h5v2h-5v-2z" />
            </svg>
          </a>
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-lg font-semibold">Stay Connected</h2>
          <p className="text-sm font-light">Subscribe to our newsletter for the latest updates.</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs">
        <p>Created with ❤️ by [Md Saquib Hussain]</p>
      </div>
    </footer>
  );
};

export default Footer;
