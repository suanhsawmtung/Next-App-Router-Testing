import CalendarIcon from "../_components/icons/calendar-icon"
import ClockIcon from "../_components/icons/clock-icon"
import UsersIcon from "../_components/icons/users-icon"
import MapIcon from "../_components/icons/map-icon"
import { format } from "date-fns"

export default function EventDetails() {

  const event = {
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
}
  const clock = format(event?.start_date, 'h:mm a');

  const calendar = format(event?.start_date, "dd MMM yyyy (EEEE)")

  return (
    <div className="w-full h-full relative py-20 lg:py-6">
      <button  className="absolute top-6 left-6 mb-6 p-2 rounded-full border border-[#1E1E1E]" aria-label="Go back">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="max-w-4xl mx-auto px-6 ">
        <div className="p-6 rounded-2xl border-x-2 border-t-2 border-b-[6px] border-[#1E1E1E]">
          <div className="rounded-2xl overflow-hidden mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MyCareCredit-w1iY0dHgSvUm0t8aKAjYclrhu8kBKN.png"
              alt="Volunteers helping at a food distribution event"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <h1 className="text-3xl text-[#1E1E1E] font-bold mb-8">Together, We Care: Supporting Shelters and Giving Back.</h1>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between sm:justify-start items-start gap-4 font-medium text-xl text-[#1E1E1E]">
              <CalendarIcon  />
              <span className="w-5/6 sm:w-auto">{calendar}</span>
            </div>
            <div className="flex justify-between sm:justify-start items-start gap-4 font-medium text-xl text-[#1E1E1E]">
              <ClockIcon />
              <span className="w-5/6 sm:w-auto">{clock}</span>
            </div>
            <div className="flex justify-between sm:justify-start items-start gap-4 font-medium text-xl text-[#1E1E1E]">
              <UsersIcon />
              <span className="w-5/6 sm:w-auto">128 Participating</span>
            </div>
            <div className="flex justify-between sm:justify-start items-start gap-4 font-medium text-xl text-[#1E1E1E]">
              {/* <MapPin /> */}
              <MapIcon />
              <a href={event?.location_url} target="_blank" className="w-5/6 sm:w-auto">Check Location</a>
            </div>
          </div>

          <button className="w-full py-4 bg-[#FFD752] text-[#1E1E1E] text-xl rounded-full font-semibold transition-colors mb-12">
            Participate Now
          </button>

          <section className="mb-8">
            <h2 className="text-2xl text-[#1E1E1E] font-bold mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFD752] rounded-full" />
              About Event
            </h2>
            <p className="text-[#1E1E1E] text-base font-normal leading-relaxed">
              "Together, We Care: Supporting Shelters and Giving Back" unites volunteers to support local shelters through
              meaningful actions. From organizing donations to engaging with residents, this event fosters care, compassion,
              and positive change for those in need.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#1E1E1E] font-bold mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFD752] rounded-full" />
              Agenda
            </h2>
            <div className="space-y-4 text-[#1E1E1E] text-base font-normal">
              <p>[ 10:00 AM ] – Registration & Welcome</p>
              <p>[ 10:30 AM ] – Opening Remarks & Activity Briefing</p>
              <p>[ 11:00 AM ] – Volunteer Activities - Donation sorting and shelter maintenance</p>
              <p>[ 12:30 PM ] – Lunch Break</p>
              <p>[ 1:30 PM ] – Community Engagement Activities</p>
              <p>[ 2:30 PM ] – Closing & Volunteer Recognition</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

