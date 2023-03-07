import React from "react"

const NowPage = () => {
  return (
    <main className="mx-auto w-full flex  max-w-3xl flex-1">
      <div className="py-24 sm:py-28">
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent text-white md:pb-4 md:text-6xl">
          Now.
        </h1>
        <div className="grid max-w-6xl grid-cols-1 items-center justify-center text-white">
          <h1 className="text-2xl font-bold text-white">I am working on... </h1>
          <ul className="ml-4 mt-4 list-disc">
            <li>Building my full stack development portfolio.</li>
            <li>Developing web development content on YouTube.</li>
            <li>
              Creating an inclusive environment for women in tech through my
              organization{" "}
              <a
                href="https://www.meetup.com/la-women-in-tech-alliance/"
                className="underline hover:text-gray-300"
                target="_blank"
              >
                LA Women in Tech Alliance
              </a>
              .
            </li>
            <li>Growing as an individual and reading lots of books.</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default NowPage
