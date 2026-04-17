"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Blogs", href: "/blog" },
  { name: "Services", href: "/service" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

       
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/realstate1.png"
                alt="Real Estate Logo"
                width={200}
                height={60}
                className="h-14 w-auto md:h-16"
                priority
              />
            </Link>
          </div>

          
          <div className="hidden sm:flex sm:flex-1 sm:justify-center">
            <div className="flex space-x-6">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={classNames(
                      active
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-400",
                      "px-3 py-2 text-sm font-medium transition-all duration-200"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

         
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>

              <Bars3Icon
                className="h-6 w-6 data-[open]:hidden"
                aria-hidden="true"
              />
              <XMarkIcon
                className="hidden h-6 w-6 data-[open]:block"
                aria-hidden="true"
              />
            </Disclosure.Button>
          </div>
        </div>
      </div>

      
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Disclosure.Button
                key={item.name}
                as={Link}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={classNames(
                  active
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-500 hover:border-l-4 hover:border-blue-400",
                  "block rounded-md px-3 py-2 text-base font-medium transition-all duration-200"
                )}
              >
                {item.name}
              </Disclosure.Button>
            );
          })}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}