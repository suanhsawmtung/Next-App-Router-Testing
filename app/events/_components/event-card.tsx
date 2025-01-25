import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useMemo } from "react";
import {format } from "date-fns"

export interface Event {
  id:                  number;
  title:               string;
  about:               string;
  image:               string;
  numberOfCredit:      number;
  duration:            string;
  location_url:        string;
  course_delivery:     string;
  course_descriptions: string;
  start_date:          Date;
  end_date:            Date;
  agenda:              string;
  organizationId:      number;
  createdAt:           Date;
  updatedAt:           Date;
  isArchieved:         boolean;
  certificate:         Certificate;
}

export interface Certificate {
  id?:  number;
  name: string;
}

const UPLOAD_FILE_URI = ''
const isParticipated = false;

export default function EventCard({ event }: { event: Event }) {
  const eventImg = useMemo(
      () => UPLOAD_FILE_URI + event?.image,
      [event?.image]
  );

  const month = useMemo(
      () => format(event?.start_date, "MMM"),
      [event?.start_date]
  );

  const day = useMemo(
      () => format(event?.start_date, "d"),
      [event?.start_date]
  );

  const Day = useMemo(
    () => format(event?.start_date, "EEEE"),
    [event?.start_date]
);

  const time = useMemo(
      () => format(event?.start_date, "hh:mm a"),
      [event?.start_date]
  );

  return (
    <Card className="overflow-hidden border-x-2 border-t-2 border-b-[6px] border-[#1E1E1E]">
      <div className="flex min-h-[192px]">
        <div className="bg-[#FFD752] w-[15%] xl:w-[10%] flex justify-center items-center px-6">
          <div className="flex flex-col items-start justify-center gap-3">
            <span className="text-5xl font-bold text-[#1E1E1E]">{day}</span>
            <span className="text-4xl font-bold text-[#1E1E1E]">{month}</span>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="relative w-[35%] xl:w-[25%] h-full">
            <img
              src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MyCareCredit-kbwwe2oWPeMns2MGOpBrW5SUtuuPcR.png"}
              alt={event?.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full flex flex-col justify-between items-start gap-4 xl:gap-0 p-8">
            <h3 className="text-2xl text-[#1E1E1E] font-bold">{event?.title}</h3>
            <a href={event?.location_url} target="_blank" className="text-xl text-[#1E1E1E] font-medium xl:mt-4">Check Location In Google Map</a>
            <div className="w-full flex flex-col xl:flex-row xl:justify-between xl:items-end gap-4 xl:gap-0">
                <div className="flex justify-start items-center gap-5">
                    <p className="text-xl text-[#1E1E1E] font-medium">{Day}</p>
                    <p className="w-1.5 h-1.5 rounded bg-[#1E1E1E]"></p>
                    <p className="text-xl text-[#1E1E1E] font-medium">{time}</p>
                    <p className="w-1.5 h-1.5 rounded bg-[#1E1E1E]"></p>
                    {/* <p className="text-xl text-[#1E1E1E] font-medium">{volunteer} Volunteers</p> */}
                </div>
                <div className="flex justify-start items-end gap-8">
                    <Button variant="link" className="p-0 h-auto text-[#1E1E1E] font-medium text-base underline">
                        See Details →
                    </Button>
                    <button className={`px-5 py-3 rounded-full bg-[${isParticipated ? '#1E1E1E' : '#FFD752'}] ${isParticipated ? 'text-white' : 'text-[#1E1E1E]'} text-base font-semibold border border-[#1E1E1E]`}>
                        { isParticipated ? 'Joined' : 'Participate Now'}
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

