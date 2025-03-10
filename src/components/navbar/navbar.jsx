import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skils" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  // Track active menu item

  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 border-b-2">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <h1 className="text-white text-lg font-bold">
                  <a href="/">Portfolio</a>
                </h1>
              </div>

              {/* Desktop Menu */}
              <div className="hidden sm:flex space-x-4">
                {navigation.map((item) => (
                  <a href={item.href}>
                    <button
                      key={item.name}
                      onClick={() => setActive(item.name)} // Update active state
                      className={`rounded-md px-3 py-2 text-sm font-medium ${
                        active === item.name
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </button>
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="sm:hidden">
                <Disclosure.Button className="p-2 text-gray-400 hover:text-white">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-2 px-2 pb-3">
              {navigation.map((item) => (
                <a href={item.href}>
                  <button
                    key={item.name}
                    onClick={() => {
                      setActive(item.name);
                      close();
                    }} // Update active state
                    className={`block w-full text-left px-3 py-2 rounded-md ${
                      active === item.name
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
