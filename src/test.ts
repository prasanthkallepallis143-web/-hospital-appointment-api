import {
  createPatient,
  getPatient,
  searchPatients,
  updatePatientPhone,
  deletePatient,
} from "./patients.js";

import {
  createDoctor,
  getDoctor,
  listDoctorsBySpecialty,
  deleteDoctor,
} from "./doctors.js";

import {
  bookAppointment,
  getAppointmentFull,
  getDoctorUpcomingAppointments,
  setAppointmentStatus,
  cancelAllPatientAppointments,
  deleteAppointment,
} from "./appointments.js";

async function main() {
  const patient = await createPatient(
    "Test Patient",
    "9999999999",
    new Date("1999-01-01")
  );
  console.log("1. createPatient:", patient);

  const foundPatient = await getPatient(patient.id);
  console.log("2. getPatient:", foundPatient);

  const searchedPatients = await searchPatients("Test");
  console.log("3. searchPatients:", searchedPatients);

  const updatedPatient = await updatePatientPhone(
    patient.id,
    "8888888888"
  );
  console.log("4. updatePatientPhone:", updatedPatient);

  const doctor = await createDoctor(
    "Dr. Test Doctor",
    "Cardiology"
  );
  console.log("5. createDoctor:", doctor);

  const foundDoctor = await getDoctor(doctor.id);
  console.log("6. getDoctor:", foundDoctor);

  const doctors = await listDoctorsBySpecialty("Cardiology");
  console.log("7. listDoctorsBySpecialty:", doctors);

  const appointment = await bookAppointment(
    patient.id,
    doctor.id,
    new Date("2026-10-20T10:00:00")
  );
  console.log("8. bookAppointment:", appointment);

  const fullAppointment = await getAppointmentFull(
    appointment.id
  );
  console.log("9. getAppointmentFull:", fullAppointment);

  const upcomingAppointments =
    await getDoctorUpcomingAppointments(doctor.id);
  console.log(
    "10. getDoctorUpcomingAppointments:",
    upcomingAppointments
  );

  const updatedAppointment = await setAppointmentStatus(
    appointment.id,
    "confirmed"
  );
  console.log(
    "11. setAppointmentStatus:",
    updatedAppointment
  );

  const cancelledAppointments =
    await cancelAllPatientAppointments(patient.id);
  console.log(
    "12. cancelAllPatientAppointments:",
    cancelledAppointments
  );

  const deletedAppointment = await deleteAppointment(
    appointment.id
  );
  console.log(
    "13. deleteAppointment:",
    deletedAppointment
  );

  const deletedDoctor = await deleteDoctor(doctor.id);
  console.log("14. deleteDoctor:", deletedDoctor);

  const deletedPatient = await deletePatient(patient.id);
  console.log("15. deletePatient:", deletedPatient);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});