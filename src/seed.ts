import { prisma } from "./lib/prisma.js";

async function main() {
  const patient1 = await prisma.patient.create({
    data: {
      name: "Rahul Kumar",
      phone: "9876543210",
      dateOfBirth: new Date("1998-05-15"),
    },
  });

  const patient2 = await prisma.patient.create({
    data: {
      name: "Priya Sharma",
      phone: "9876543211",
      dateOfBirth: new Date("2000-08-20"),
    },
  });

  const doctor1 = await prisma.doctor.create({
    data: {
      name: "Dr. Anil Kumar",
      specialty: "Cardiology",
    },
  });

  const doctor2 = await prisma.doctor.create({
    data: {
      name: "Dr. Priya Reddy",
      specialty: "Dermatology",
    },
  });

  await prisma.appointment.create({
    data: {
      appointmentDate: new Date("2026-10-10T10:00:00"),
      status: "scheduled",
      Patient: {
        connect: {
          id: patient1.id,
        },
      },
      Doctor: {
        connect: {
          id: doctor1.id,
        },
      },
    },
  });

  await prisma.appointment.create({
    data: {
      appointmentDate: new Date("2026-10-11T11:00:00"),
      status: "scheduled",
      Patient: {
        connect: {
          id: patient2.id,
        },
      },
      Doctor: {
        connect: {
          id: doctor2.id,
        },
      },
    },
  });

  console.log("Patients inserted:", patient1, patient2);
  console.log("Doctors inserted:", doctor1, doctor2);
  console.log("Appointments inserted successfully");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });