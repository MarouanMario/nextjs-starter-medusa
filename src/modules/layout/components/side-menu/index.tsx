"use client"

import { Fragment } from "react"
import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { User, ShoppingCart, XMark } from "@medusajs/icons"
import { useParams } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SideMenu = () => {
  const { countryCode } = useParams() as { countryCode: string }

  const menuItems = [
    { label: "HOME", href: `/${countryCode}` },
    { label: "ABOUT", href: `/${countryCode}/about` },
    { label: "COMMITMENT", href: `/${countryCode}/commitment` },
    { label: "JOURNAL", href: `/${countryCode}/journal` },
    { label: "CONTACT", href: `/${countryCode}/contact` },
  ]

  return (
    <div className="h-full">
      <div className="flex items-start h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base">
                  {open ? null : "Menu"}
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition-opacity duration-0"
                enterFrom="opacity-100"
                enterTo="opacity-100"
                leave="transition-opacity duration-500 ease-in-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <PopoverPanel className="fixed inset-0 z-30 flex h-screen w-screen overflow-hidden">

                  {/* LEFT */}
                  <div className="w-1/2 relative h-screen overflow-hidden">
                    <div className={`absolute inset-0 bg-black z-0 ${open ? 'animate-leftFill' : 'animate-rightClose'}`}></div>
                    <div className="relative z-10 grid grid-rows-6 h-full text-white">
                      <div className="row-span-5 flex flex-col justify-start p-10 space-y-8">
                        {menuItems.map((item, index) => (
                          <div key={index} className="opacity-0 animate-fadeInBlur" style={{ animationDelay: `${700 + index * 150}ms` }}>
                            <LocalizedClientLink href={item.href} onClick={close} className="text-5xl font-light tracking-wide">
                              {item.label}
                            </LocalizedClientLink>
                            <div className="w-full h-px bg-white mt-4"></div>
                          </div>
                        ))}
                      </div>

                      <div className="row-span-1 grid grid-cols-2 text-center">
                        <div className="flex justify-center items-center">
                          <LocalizedClientLink href={`/${countryCode}/account`} onClick={close} className="flex items-center gap-2">
                            <User className="h-100 w-100" />
                            <span className="text-lg">Account</span>
                          </LocalizedClientLink>
                        </div>
                        <div className="flex justify-center items-center">
                          <LocalizedClientLink href={`/${countryCode}/cart`} onClick={close} className="flex items-center gap-2">
                            <ShoppingCart className="h-100 w-100" />
                            <span className="text-lg">Cart</span>
                          </LocalizedClientLink>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="w-1/2 relative h-screen overflow-hidden flex flex-col p-10">
                    <div className={`absolute inset-0 bg-[#F5F5F0] z-0 ${open ? 'animate-rightFill' : 'animate-leftClose'}`}></div>

                    {/* Close Button in top right */}
                    <button 
                      onClick={close} 
                      className={`absolute top-10 right-10 z-10 transform transition-all duration-500 ease-out ${open ? 'scale-100 opacity-100 blur-0' : 'scale-0 opacity-0 blur-sm'}`} 
                      style={{ transitionDelay: open ? '1000ms' : '0ms' }}
                    >
                      <XMark className="h-8 w-8" />
                    </button>

                    {/* Logo Section */}
{open && (
<div className="flex justify-center items-start pt-10">
    <div className="relative">
      {/* SVG Circular border animation */}
      <svg className="w-32 h-32" viewBox="0 0 120 120">
        <circle
          className="animate-drawCircle"
          cx="60"
          cy="60"
          r="54"
          stroke="black"
          strokeWidth="4"
          fill="none"
          strokeDasharray="339.29"
          strokeDashoffset="339.29"
        />
      </svg>

      {/* Logo */}
      <img 
        src="/images/marabblogo.png" 
        alt="MAR & B" 
        className="absolute inset-0 m-auto h-20 w-auto opacity-0 animate-fadeInBlur"
        style={{ animationDelay: '1200ms' }}
      />
    </div>
  </div>
)}


{open && (

<div className="mt-10 grid grid-cols-2 gap-8 text-black text-sm">

    <div className="space-y-6">

                      <div className="opacity-0 animate-fadeInBlur" style={{ animationDelay: '1400ms' }}>
                        <p><strong>Email</strong> </p>
                        <p>contact@saisei.jp</p>
                                              </div>

                      <div className="opacity-0 animate-fadeInBlur" style={{ animationDelay: '1400ms' }}>

                        <p><strong>Phone</strong> </p>
                              <p>+81 3-1234-5678</p>

                      </div>
                      <div className="opacity-0 animate-fadeInBlur" style={{ animationDelay: '1400ms' }}>
                        <p><strong>Social</strong>  </p>
                             <p>X</p>
                             <p>Facebook</p>
                              <p>Instagram</p>
                      </div>
    </div>
  <div className="space-y-6">


                      <div className="opacity-0 animate-fadeInBlur" style={{ animationDelay: '1400ms' }}>
                              <p className="font-semibold">Office</p>

      <p>1-1-2 Oshiage, Sumida City, 131-0045, Tokyo, Japan</p>
                      </div>
                                            <div className="opacity-0 animate-fadeInBlur" style={{ animationDelay: '1400ms' }}>
                              <p className="font-semibold">Work Hours</p>

      <p>Mon - Fri: 9am - 6pm</p>
                      </div>
                                            <div className="opacity-0 animate-fadeInBlur" style={{ animationDelay: '1400ms' }}>
      <p className="font-semibold">Legal</p>
      <p>Mentions Legals</p>
      <p>Terms of Service</p>
                            </div>

  
                    </div>
                                        <div className="opacity-0 animate-fadeInBlur" style={{ animationDelay: '2000ms' }}>
<div className="mt-10 text-black text-sm">
  <p className="font-semibold">DISCLAIMER</p>
</div>
                      </div>
  </div>
)}
                  </div>

                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>

      {/* Custom animations */}
      <style jsx>{`
      @keyframes drawCircle {
  from {
    stroke-dashoffset: 339.29;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.animate-drawCircle {
  animation: drawCircle 1.2s ease forwards;
  animation-delay: 900ms;
}

        @keyframes leftFill {
          0% { transform: scaleX(0); transform-origin: left; }
          100% { transform: scaleX(1); transform-origin: left; }
        }
        @keyframes rightFill {
          0% { transform: scaleX(0); transform-origin: right; }
          100% { transform: scaleX(1); transform-origin: right; }
        }
        @keyframes leftClose {
          0% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
        @keyframes rightClose {
          0% { transform: scaleX(1); transform-origin: left; }
          100% { transform: scaleX(0); transform-origin: left; }
        }
        @keyframes fadeInBlur {
          0% { opacity: 0; filter: blur(8px); }
          100% { opacity: 1; filter: blur(0); }
        }
        .animate-leftFill { animation: leftFill 0.6s ease forwards; }
        .animate-rightFill { animation: rightFill 0.6s ease forwards; }
        .animate-leftClose { animation: leftClose 0.4s ease forwards; }
        .animate-rightClose { animation: rightClose 0.4s ease forwards; }
        .animate-fadeInBlur { animation: fadeInBlur 0.5s ease forwards; }
      `}</style>
    </div>
  )




}

export default SideMenu
