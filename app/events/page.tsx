"use client"

import { Button } from "@/components/ui/button"
import EventCard from "./_components/event-card"
import FilterDialog from "./_components/filter-dialog"
import SearchIcon from './_components/icons/search-icon'
import { Pagination } from "@/components/ui/pagination"
import { PaginationComponent } from "./_components/pagination"
// import { useSearchParams } from 'react'

export default function App() {
  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page)
  // }
  // const [searchParams, setSearchParams] = useSearchParams({search: ""})
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full" />
            <span className="text-xl font-medium">MyCareCredit</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-900 font-medium">Events</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
          </nav>
          <Button variant="secondary" className="bg-zinc-900 text-white hover:bg-zinc-800">
            Dashboard
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-4 lg:gap-0">
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-5xl font-bold text-[#1E1E1E]">Our Events*</h1>
              <p className="text-gray-600">4 results of Enviromental, Weekends</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-sm">
                <input
                  type="search"
                  placeholder="Nature"
                  className="w-full pl-4 pr-10 py-2 border-2 border-[#1E1E1E] placeholder:text-[#1E1E1E] rounded-full outline-none"
                />
                <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1E1E1E] w-5 h-5" />
              </div>
              <FilterDialog />
            </div>
          </div>

          <div className="grid gap-4">
            {
            // [
            //   {
            //     date: { day: "12", month: "Jan" },
            //     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MyCareCredit-kbwwe2oWPeMns2MGOpBrW5SUtuuPcR.png",
            //     title: "Giving Back with Care: Support Shelters Together",
            //     location: "Taman Pelangi, 80400 Johor Bahru",
            //     time: { day: "Sunday", time: "10:00 AM"},
            //     volunteer: 100,
            //     isParticipated: false
            //   },
            //   {
            //     date: { day: "08", month: "Feb" },
            //     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MyCareCredit-kbwwe2oWPeMns2MGOpBrW5SUtuuPcR.png",
            //     title: "Giving Back with Care: Support Shelters Together",
            //     location: "Taman Pelangi, 80400 Johor Bahru",
            //     time: { day: "Sunday", time: "10:00 AM"},
            //     volunteer: 100,
            //     isParticipated: false
            //   },
            //   {
            //     date: { day: "27", month: "Feb" },
            //     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MyCareCredit-kbwwe2oWPeMns2MGOpBrW5SUtuuPcR.png",
            //     title: "Giving Back with Care: Support Shelters Together",
            //     location: "Taman Pelangi, 80400 Johor Bahru",
            //     time: { day: "Sunday", time: "10:00 AM"},
            //     volunteer: 100,
            //     isParticipated: true
            //   },
            // ] 
            [
              {
                  id: 7,
                  title: "Non ipsum sed rerum ",
                  about: "<p>Labore aperiam venia.</p>",
                  image: null,
                  numberOfCredit: 81,
                  duration: "Ratione qui rerum ex",
                  location_url: "Maxime corrupti vol",
                  course_delivery: "Nisi ea odit volupta",
                  course_descriptions: "<p>Labore ullamco omnis.</p>",
                  start_date: "1988-09-26T11:43:00.000Z",
                  end_date: "1989-06-17T06:37:00.000Z",
                  agenda: "<p>Ipsa, necessitatibus.</p>",
                  organizationId: 1,
                  createdAt: "2025-01-20T05:28:02.867Z",
                  updatedAt: "2025-01-20T05:28:02.867Z",
                  isArchieved: false,
                  certificate: {
                      id: 2,
                      name: "New Cerr"
                  }
              },
              // {
              //     "id": 6,
              //     "title": "title",
              //     "about": "<p>about</p>",
              //     "image": "/event/1737350699311-elegant.jpg",
              //     "numberOfCredit": 5,
              //     "duration": "10 mins",
              //     "location_url": "location",
              //     "course_delivery": "event",
              //     "course_descriptions": "<p>asf</p>",
              //     "start_date": "2025-01-20T05:24:00.000Z",
              //     "end_date": "2025-01-22T05:24:00.000Z",
              //     "agenda": "<p>adfs</p>",
              //     "organizationId": 1,
              //     "createdAt": "2025-01-20T05:24:59.287Z",
              //     "updatedAt": "2025-01-20T05:24:59.316Z",
              //     "isArchieved": false,
              //     "certificate": null
              // },
              {
                  id: 1,
                  title: "Hello World Event",
                  about: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  image: null,
                  numberOfCredit: 12,
                  duration: "1 week",
                  location_url: "hello",
                  course_delivery: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  course_descriptions: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  start_date: "2025-01-19T07:53:42.459Z",
                  end_date: "2025-01-26T07:53:42.459Z",
                  agenda: {
                      time: "2025-01-19T07:53:42.459Z",
                      color: "#111111",
                      title: "Hello World"
                  },
                  organizationId: 1,
                  createdAt: "2025-01-19T07:53:42.460Z",
                  updatedAt: "2025-01-19T07:53:42.460Z",
                  isArchieved: false,
                  certificate: {
                      id: 1,
                      name: "Hello World Certificate"
                  }
              }
          ].map((event, i) => (
              <EventCard key={i} event={event} />
            ))}
            {/* <PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} /> */}
          </div>
        </div>
      </main>

      <footer className="w-full mx-auto px-4 py-8 bg-[#1E1E1E]">
          <PaginationComponent currentPage={1} totalPages={10} onPageChange={() => {}} />
      </footer>
    </div>
  )
}

