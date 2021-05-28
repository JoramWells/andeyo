import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Link from 'next/link'
import { LockClosedIcon } from "@heroicons/react/solid";

function Register() {
  return (
    <>
      <Head>
        <title>Sign Up | Andeyo</title>
      </Head>{" "}
      <Navigation />
      <main>
      <div className="min-h-screen flex justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 border-gray-500 shadow-md p-2">
      <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up to your account</h2>
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
          Or{' '}

          <div className="flex items-center justify-between">
                <button className="bg-red-500 p-1 rounded-md text-white hover:shadow-md" > <b> G+ google</b> </button>
                <button className="text-white bg-gray-800 p-1 rounded-md hover:shadow-md"> <b> Github</b> </button>
          </div>
          <div className="link font-small text-sm text-gray-600 hover:text-gray-500">
            <Link href="/login" >Already have an account? Sign In.</Link>
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
              Sign up
            </button>
          </div>
        </form>
        </div>
        </div>
      </main>
    </>
  );
}

export default Register;
