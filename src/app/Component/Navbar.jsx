// import { Disclosure, DisclosureButton } from '@headlessui/react'
// import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Home', href: '#', current: true },
//   { name: 'Properties', href: '#', current: false },
//   { name: 'About Us', href: '#', current: false },
//   { name: 'Services', href: '#', current: false },
//   { name: 'Contact', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50  bg-white">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center ">
//             <div className="hidden  sm:block">
//               <div className="flex space-x-4 justify-center">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current ? ' text-black' : 'text-black hover:bg-white/5 ',
//                       'rounded-md px-3 py-2 text-sm font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Disclosure>
//   )
// }


// "use client";
// import { Disclosure, DisclosureButton } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import Image from 'next/image';

// const navigation = [
//   { name: 'Home', href: '/', current: true },
//    { name: 'About Us', href: '/about', current: false },
//   { name: 'Properties', href: '#', current: false },
//   { name: 'Services', href: '#', current: false },
//   { name: 'Contact', href: '#', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           {/* Logo - left side */}
//           <div className="flex-shrink-0">
//             <a href="/" className="flex items-center">
//               <Image
//                 src="/realstate1.png"
//                 alt="Real Estate Logo"
//                 width={250}
//                 height={50}
//                 className="h-14 w-auto md:h-16"
//                 priority
//               />
//             </a>
//           </div>

//           {/* Centered navigation for desktop */}
//           <div className="hidden sm:flex sm:flex-1 sm:justify-center">
//             <div className="flex space-x-4">
//               {navigation.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   aria-current={item.current ? 'page' : undefined}
//                   className={classNames(
//                     item.current
//                       ? 'text-blue-600 border-b-2 border-blue-600' // active: blue color + underline
//                       : 'text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-400',
//                     'rounded-none px-3 py-2 text-sm font-medium transition-all duration-200'
//                   )}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button - right side */}
//           <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
//             </DisclosureButton>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu panel (when open) */}
//       <Disclosure.Panel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current
//                   ? 'text-blue-600 border-l-4 border-blue-600 bg-blue-50' // active: blue color + left border
//                   : 'text-gray-700 hover:bg-gray-50 hover:text-blue-500 hover:border-l-4 hover:border-blue-400',
//                 'block rounded-md px-3 py-2 text-base font-medium transition-all duration-200'
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </Disclosure.Panel>
//     </Disclosure>
//   );
// }


"use client";
import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Properties', href: '#' },
  { name: 'Services', href: '/service' },
  { name: 'Contact', href: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const pathname = usePathname();

  // Determine if the current link is active
  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href !== '#') return pathname.startsWith(href);
    return false;
  };

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo - left side */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Image
                src="/realstate1.png"
                alt="Real Estate Logo"
                width={250}
                height={50}
                className="h-14 w-auto md:h-16"
                priority
              />
            </a>
          </div>

          {/* Centered navigation for desktop */}
          <div className="hidden sm:flex sm:flex-1 sm:justify-center">
            <div className="flex space-x-4">
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={classNames(
                      active
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-400',
                      'rounded-none px-3 py-2 text-sm font-medium transition-all duration-200'
                    )}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button - right side */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile menu panel (when open) */}
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={classNames(
                  active
                    ? 'text-blue-600 border-l-4 border-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-500 hover:border-l-4 hover:border-blue-400',
                  'block rounded-md px-3 py-2 text-base font-medium transition-all duration-200'
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}