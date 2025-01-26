"use server"

import { prisma } from "@/lib/prisma.lib";
import { Prisma } from "@prisma/client";

type EventFilterType = Prisma.EventWhereInput;

export const getEvents = async () => {

    let page = 1;
    let date = new Date();
    let period = 'thisWeek';
    let day = 'weekends'; 
    let searchKey = '1';
    let user_id = 1;

    let eventFilters: EventFilterType = {};

    const ITEMS_PER_PAGE = 3; // Number of items per page
    const offset = (Number(page) - 1) * ITEMS_PER_PAGE;

    if (date) {
        eventFilters.start_date = {
            gte: new Date(date),
            lte: new Date(date),
        };
    }

    if (period) {
        const now = new Date();
        switch (period) {
            case "today":
                eventFilters.start_date = {
                    gte: new Date(now.setHours(0, 0, 0, 0)),
                    lte: new Date(now.setHours(23, 59, 59, 999)),
                };
                break;
            case "tomorrow":
                const tomorrow = new Date(now.setDate(now.getDate() + 1));
                eventFilters.start_date = {
                    gte: new Date(tomorrow.setHours(0, 0, 0, 0)),
                    lte: new Date(tomorrow.setHours(23, 59, 59, 999)),
                };
                break;
            case "thisWeek":
                const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
                const endOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 6));
                eventFilters.start_date = {
                    gte: new Date(startOfWeek.setHours(0, 0, 0, 0)),
                    lte: new Date(endOfWeek.setHours(23, 59, 59, 999)),
                };
                break;
            case "thisMonth":
                const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
                const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
                eventFilters.start_date = {
                    gte: startOfMonth,
                    lte: endOfMonth,
                };
                break;
        }

        if (day) {
            const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
            const weekends = ["saturday", "sunday"];
            const dayMapping: { [key: string]: string } = {
                sunday: '0',
                monday: '1',
                tuesday: '2',
                wednesday: '3',
                thursday: '4',
                friday: '5',
                saturday: '6',
            };

            const filterDay = day.toLowerCase();

            if (filterDay === "weekdays") {
                eventFilters.AND = [
                    {
                        start_date: {
                            in: weekdays.map((w) => dayMapping[w]),
                        },
                    },
                ];
            } else if (filterDay === "weekends") {
                eventFilters.AND = [
                    {
                        start_date: {
                            in: weekends.map((w) => dayMapping[w]),
                        },
                    },
                ];
            } else if (dayMapping[filterDay] !== undefined) {
                eventFilters.start_date = {
                    equals: dayMapping[filterDay],
                };
            }
        }
    }

    let events = await prisma.event.findMany({
        where: {
            ...eventFilters,
            participations: {
                some: {
                    userId: user_id,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
        skip: offset,
        take: ITEMS_PER_PAGE,
    });

    return ({ events });
}