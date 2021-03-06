import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Link from 'next/link'
import { LockClosedIcon } from "@heroicons/react/solid";

function Login() {
  return (
    <>
      <Head>
        <title>Contact | Andeyo</title>
      </Head>{" "}
      <Navigation />
      <main>
      <div className="min-h-screen flex justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 border-gray-500 shadow-md p-2">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600"></p>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className=" shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="text-gray-700" >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:gray-indigo-500 focus:border-gray-500 focus:z-10 sm:text-sm "
                placeholder="Email address"
              />
            </div>
            <div style={{marginTop:"1.5rem"}}>
              <label htmlFor="password" className="text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-400"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-gray-600 hover:text-gray-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="link font-small text-sm text-gray-600 hover:text-gray-500">
            <Link href="/register" >Don't have an account? Sign up.</Link>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
        </div>
        </div>
      </main>
    </>
  );
}

export default Login;
