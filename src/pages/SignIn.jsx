import third_rose_img from '@/assets/png/third-rose.png'

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-36 lg:px-8">
      <div className="sm:mx-auto sm:w-72 sm:max-w-sm">
        <img
          className="mx-auto h-44 w-auto"
          src={third_rose_img}
          alt="Twin Rose"
        />
        <h1 className="company-name mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-primary">
          Twin Rose
        </h1>
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-7 sm:mx-auto sm:w-72 sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-creamson sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-[#333] hover:text-primary"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-creamson sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex">
            <Link to="/" className="w-full">
              <button
                type="submit"
                className="flex w-full justify-center bg-crimsom-color px-3 py-1.5 text-sm font-semibold leading-6 text-dim-red shadow-sm hover:bg-secondary hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-creamson"
              >
                Back
              </button>
            </Link>
            <button
              type="submit"
              className="flex w-full justify-center bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-dim-white shadow-sm hover:bg-secondary hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-creamson"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="#"
            className="font-semibold leading-6 text-[#333] hover:text-primary"
          >
            &nbsp;Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignIn
