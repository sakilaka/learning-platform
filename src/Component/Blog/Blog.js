import React from 'react';

const Blog = () => {
    return (
        <div className='bg-green-100 w-11/12 mx-auto my-10 p-10'>
            <div className='bg-purple-600 p-8 text-white mx-auto my-10 lg:w-9/12'>
                <p className='text-3xl font-bold my-3'>What is CORS?</p>
                <p className='text-xl'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. </p>
            </div>
            <div className='bg-pink-400 p-8 text-white mx-auto my-10 lg:w-9/12'>
                <p className='text-3xl font-bold my-3'>Why are you using firebase? What other options do you have to implement authentication?</p>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>
            <div className='bg-green-500 p-8 text-white mx-auto my-10 lg:w-9/12'>
                <p className='text-3xl font-bold my-3'>How does the private route work?</p>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div className='bg-indigo-600 p-8 text-white mx-auto my-10 lg:w-9/12'>
                <p className='text-3xl font-bold my-3'>What is Node? How does Node work?</p>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
            </div>
        </div>
    );
};

export default Blog;