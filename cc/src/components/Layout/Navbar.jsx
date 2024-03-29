/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import useAuth from "../../hooks/useAuth";
import React, { useState } from "react";
import ResponsiveDrawer from "../Navigation/ResponsiveDrawer";
import bringIt from '../../assets/images/brngit logo.png';
import userIcon from '../../assets/icons/user.png'
import { Cookies } from 'react-cookie';
import {GoogleLogout} from 'react-google-login';
import { axiosPrivate } from "../../api/axios";

const navigation = [
  { name: "About", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [userMenuDisplay, setUserMenuDisplay] = useState("none");
  const { auth, setAuth } = useAuth();

  React.useEffect(() => {
    // user is logged in
    if (auth.hasOwnProperty("user")) {
      setUserMenuDisplay("block");
    }
  }, [auth]);
  const logoutSuccess = () => {
    console.log("Success!");
  }
  const logoutFail = (e) => {
    console.log(e);
  }

  const signOut = async () => {
    await axiosPrivate.post('/auth/logout', {
      refreshToken: auth.tokens.refresh.token
    })

    // every time user has to sign in with google for wisestamp to work
    await axiosPrivate.patch(`/users/${auth.user.id}`, {
      isGoogleVerifiedAtWisestamp: false
    })

    window.location.replace('/app/login')
  }
  return (
    <>
      {auth.user && <ResponsiveDrawer />}
      <Disclosure
        as="nav"
        className="shadow-xl"
        style={{
          backgroundColor: `var(--index)`,
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "#211522",
        }}
      >
        {({ open }) => (
          <>
            <div
              className="max-w-full mx-auto px-2 sm:px-6 lg:px-8"
              id="navbar"
            >
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={bringIt}
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-10 w-auto"
                      src={bringIt}
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-indigo-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu
                    as="div"
                    className="ml-3 relative"
                    style={{ display: userMenuDisplay }}
                  >
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8" src={userIcon} alt="" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        style={{ zIndex: 10 }}
                      >
                        <div onClick={signOut} className="grid">
                        <GoogleLogout
                        clientId="222485917665-4ma4th0jf3188rs0kr590va1a0395qtb.apps.googleusercontent.com"
                        buttonText="Logout"
                        
                        render={renderProps => (
                          <button className="grid place-content-center w-full" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            Signout
                          </button>
                        )}
                        onLogoutSuccess={logoutSuccess}
                        onFailure={logoutFail}
                        />
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
