import { getAuth, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthUserContext';

const Register = () => {
    const auth = getAuth();
    const { signUpWithEmailPass } = useContext(AuthContext);
    const [success, setSuccess] = useState(false);

    const handleEmailPassRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        signUpWithEmailPass(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true)
                form.reset();
                updateUser(name, photoURL)
            })
            .catch(error => console.log(error));
    }

    const updateUser = (name, photoURL) =>{

        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
        .then(() => {})
        .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="overflow-hidden">

                <div className="overflow-hidden bg-gray-900">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    Sign Up Here.
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-100 md:text-lg">
                                    Thank You
                                </p>
                                <Link
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-purple-400"
                                >
                                    Learn more
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        Sign Up
                                    </h3>
                                    <form onSubmit={handleEmailPassRegister}>
                                        {success && <p className='text-green-400 text-xl my-2'>Register Successfully.</p>}
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="firstName"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Full name
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="name"
                                                name="name"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="lastName"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                photo URL
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="photo"
                                                name="photo"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="email"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                E-mail
                                            </label>
                                            <input
                                                placeholder="kamrul@gmail.com"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="email"
                                                name="email"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="email"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Password
                                            </label>
                                            <input
                                                placeholder=""
                                                required
                                                type="password"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="password"
                                                name="password"
                                            />
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                            >
                                                Register
                                            </button>

                                        </div>


                                        <p className="text-xs text-gray-600 sm:text-sm">
                                            Already Sign Up?please <Link className='font-bold text-purple-400' to='/login'>Login</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;