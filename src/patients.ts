import { prisma } from "./lib/prisma.js";

export async function createPatient(
  name: string,
  phone: string,
  dateOfBirth: Date
) {
  return prisma.patient.create({
    data: {
      name,
      phone,
      dateOfBirth,
    },
  });
}

export async function getPatient(id: number) {
  return prisma.patient.findUnique({
    where: {
      id,
    },
  });
}

export async function searchPatients(search: string) {
  return prisma.patient.findMany({
    where: {
      OR: [
        {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          phone: {
            contains: search,
          },
        },
      ],
    },
  });
}

export async function updatePatientPhone(
  id: number,
  phone: string
) {
  return prisma.patient.update({
    where: {
      id,
    },
    data: {
      phone,
    },
  });
}

export async function deletePatient(id: number) {
  return prisma.patient.delete({
    where: {
      id,
    },
  });
}