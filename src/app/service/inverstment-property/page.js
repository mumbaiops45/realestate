"use client"
import React from 'react'

const Page = () => {
  return (
    <div>


      <div className="bg-slate-700 min-h-screen py-16">


        <div className="text-center text-white max-w-5xl mx-auto px-6">
          <h1 className="text-5xl mt-[70px] md:text-6xl font-bold">
            Investment Property Advisory
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-4">
            Strategic guidance for maximizing returns on real estate investments.
          </p>
        </div>

        <div className="mt-12 max-w-6xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/Adver.webp"
              alt="property advisory"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
      <section className='bg-gray-100 py-16'>
        <div className='max-w-6xl mx-auto px-6'>
          <p className='text-3xl md:text-4xl leading-snug text-gray-800'>Our experts analyze market trends, assess investment opportunities, and provide actionable insights to help you build a profitable property portfolio. From rental yields to long-term appreciation, we guide you every step of the way.</p>
        </div>
        <div className='max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-2 gap-8'>


          <div className='rounded-3xl overflow-hidden'>
            <img src='/investimg.jpg'
              alt="investment"
              className='w-full h-[400px] object-cover'
            />
          </div>
          <div className='rounded-3xl overflow-hidden'>
            <img src="/investme.webp"
              alt="meeting"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>


      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          <div className="lg:sticky lg:top-20 h-fit">
            <p className="uppercase tracking-widest text-sm border border-gray-400 inline-block px-4 py-2 rounded-full text-gray-600">
              Our Workflow
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-6 leading-snug">
              A Clear, Structured Process for{" "}
              <span className="italic font-normal">
                Consistent Player Development
              </span>
            </h2>

            <div className="mt-10 rounded-3xl overflow-hidden">
              <img
                src="/Workers.avif"
                alt="workflow"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>


          <div className="relative">

            <div className="absolute left-5 top-0 bottom-0 border-l-2 border-dashed border-gray-300"></div>

            <div className="space-y-20">


              <div className="flex gap-6 items-start ">
                <div className="z-10 w-22 h-12 flex items-center justify-center rounded-xl bg-slate-600 text-white text-lg font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Player Assessment
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We begin with a comprehensive evaluation of each player’s skill level, strengths, and areas for improvement. This assessment helps us understand individual needs and set realistic development goals.
                  </p>
                </div>
              </div>


              <div className="flex gap-6 items-start ">
                <div className="z-10 w-22 h-12 flex items-center justify-center rounded-xl bg-slate-600 text-white text-lg font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Personalized Training Plan
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Based on the assessment, we create a tailored training plan aligned with the player’s ability and objectives. Each plan focuses on technique, fitness, and mindset development.
                  </p>
                </div>
              </div>


              <div className="flex gap-6 items-start ">
                <div className="z-10 w-22 h-12 flex items-center justify-center rounded-xl bg-gray-600 text-white text-lg font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Structured Training Sessions
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Training sessions follow a clear structure that emphasizes proper technique, repetition, and progressive challenges. Players build skills step by step while maintaining consistency and confidence.
                  </p>
                </div>
              </div>


              <div className="flex gap-6 items-start ">
                <div className="z-10 w-22 h-12 flex items-center justify-center rounded-xl bg-gray-600 text-white text-lg font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Performance Monitoring
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We track progress through regular feedback and performance reviews. This allows us to identify improvements, adjust training intensity, and keep players motivated.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Page