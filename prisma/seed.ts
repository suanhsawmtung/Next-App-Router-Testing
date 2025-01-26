import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.$executeRaw`TRUNCATE TABLE "Event" CASCADE;`;
    await prisma.$executeRaw`TRUNCATE TABLE "User" CASCADE;`;
    await prisma.$executeRaw`TRUNCATE TABLE "Participation" CASCADE;`;

    // Reset the ID sequence for each table
    await prisma.$executeRaw`ALTER SEQUENCE "Event_id_seq" RESTART WITH 1;`;
    await prisma.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1;`;
    await prisma.$executeRaw`ALTER SEQUENCE "Participation_id_seq" RESTART WITH 1;`;

    await prisma.event.deleteMany();
    await prisma.user.deleteMany();
    await prisma.participation.deleteMany();

    const event = await prisma.event.createMany({
        data: [
            {
                title: "Hello World Event 1",
                start_date: new Date(),
                end_date: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
            },
            {
                title: "Hello World Event 2",
                start_date: new Date(),
                end_date: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
            },
            {
                title: "Hello World Event 3",
                start_date: new Date(),
                end_date: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
            },
            {
                title: "Hello World Event 4",
                start_date: new Date(),
                end_date: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
            },
            {
                title: "Hello World Event 5",
                start_date: new Date(),
                end_date: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
            },
            {
                title: "Hello World Event 6",
                start_date: new Date(),
                end_date: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
            },
            {
                title: "Hello World Event 7",
                start_date: new Date(),
                end_date: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
            },
            {
                title: "Hello World Event 8",
                start_date: new Date(),
                end_date: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
            },
        ]
    });

    await prisma.user.createMany({
        data: [
            {
                name: "superadmin",
                email:  "superadmin@gmail.com",
            },
            {
                name: "admin",
                email: "admin@gmail.com",
            },
            {
                name: "user",
                email: "user@gmail.com",
            },
        ],
    });

    await prisma.participation.create({
        data: {
            eventId: 1,
            userId: 2,
        },
    });

}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
