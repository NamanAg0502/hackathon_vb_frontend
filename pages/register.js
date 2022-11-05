import axios from 'axios';
import { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'FAMILY', label: 'Family' },
  { value: 'CRIMINAL', label: 'Criminal' },
  { value: 'FINANCES', label: 'Finances' },
  { value: 'GOVERNMENT', label: 'Government' },
  { value: 'IMMIGRATION', label: 'Immigration' },
];

const Login = () => {
  const [client, setClient] = useState(true);
  const [clientFormInput, setClientFormInput] = useState({
    username: '',
    password: '',
  });
  const [lawyerFormInput, setLawyerFormInput] = useState({
    username: '',
    password: '',
  });

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    console.log(clientFormInput);
    console.log(e);
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/client/login`,
      {
        headers: {
          email: clientFormInput.username,
          password: clientFormInput.password,
        },
      }
    );
    console.log(response);
  };

  const handleLawyerSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/client/login`,
      headers: {
        email: lawyerFormInput.username,
        password: lawyerFormInput.password,
      },
    });
    console.log(response);
  };

  return (
    <div className=" bg-gray-50 w-full my-12">
      <div className="flex flex-col items-center justify-center w-full md:w-3/4 mx-auto">
        <div className="tabs text-black flex flex-row justify-between space-x-6  py-3 px-6 rounded-lg mb-5">
          {/* {client === false ? ( */}
          <button
            onClick={() => setClient(true)}
            className={`tab px-3 text-2xl font-semibold ${
              client ? 'tab-active border-b-2 text-indigo-600' : 'text-gray-400'
            }`}
          >
            Client
          </button>
          {/* ) : ( */}
          <button
            onClick={() => setClient(false)}
            className={`tab px-3 text-2xl font-semibold ${
              !client
                ? 'tab-active border-b-2 text-indigo-600'
                : 'text-gray-400'
            }`}
          >
            Lawyer
          </button>
          {/* )} */}
        </div>
        <div className="w-full mx-2 md:w-2/3 ">
          {client === true ? (
            <div className="bg-white p-6 flex flex-col items-center border border-primary m-2 rounded-md">
              <h1 className="text-black font-semibold text-3xl">
                Register Client
              </h1>
              <form
                className="m-8 space-y-6 w-3/4"
                action="#"
                method="POST"
                onSubmit={handleClientSubmit}
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm space-y-3">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      onChange={(e) =>
                        setClientFormInput({
                          ...clientFormInput,
                          username: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="sr-only">
                      Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      autoComplete="location"
                      required
                      onChange={(e) =>
                        setClientFormInput({
                          ...clientFormInput,
                          username: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Location"
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="sr-only">
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="text"
                      autoComplete="mobile"
                      required
                      onChange={(e) =>
                        setClientFormInput({
                          ...clientFormInput,
                          username: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Mobile No."
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      onChange={(e) =>
                        setClientFormInput({
                          ...clientFormInput,
                          username: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      onChange={(e) =>
                        setClientFormInput({
                          ...clientFormInput,
                          password: e.target.value,
                        })
                      }
                      className="relative block w-full bg-inherit appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Existing User? Login.
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </span>
                    Register
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white p-6 flex flex-col items-center border border-primary m-2 rounded-md">
              <h1 className="text-black font-semibold text-3xl">
                Register Lawyer
              </h1>
              <form
                className="m-8 space-y-6 w-3/4"
                action="#"
                method="POST"
                onSubmit={handleClientSubmit}
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md space-y-3">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      onChange={(e) =>
                        setClientFormInput({
                          ...clientFormInput,
                          username: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="sr-only">
                      Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      autoComplete="location"
                      required
                      onChange={(e) =>
                        setClientFormInput({
                          ...clientFormInput,
                          username: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Location"
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="sr-only">
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="text"
                      autoComplete="mobile"
                      required
                      onChange={(e) =>
                        setClientFormInput({
                          ...clientFormInput,
                          username: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Mobile No."
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      onChange={(e) =>
                        setClientFormInput({
                          ...clientFormInput,
                          username: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      onChange={(e) =>
                        setClientFormInput({
                          ...clientFormInput,
                          password: e.target.value,
                        })
                      }
                      className="relative block w-full bg-inherit appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label htmlFor="bio" className="sr-only">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      type="text"
                      rows={3}
                      autoComplete="current-bio"
                      required
                      onChange={(e) =>
                        setClientFormInput({
                          ...clientFormInput,
                          password: e.target.value,
                        })
                      }
                      className="relative block w-full bg-inherit appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Your Bio"
                    />
                  </div>
                  <div className="text-black">
                    <Select
                      options={options}
                      isMulti
                      className="basic-multi-select"
                      classNamePrefix="select"
                      placeholder="Your Expertise"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Existing User? Login.
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </span>
                    Register
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
