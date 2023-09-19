// JavaScript code
class Hospital {
    constructor() {
        this.appointments = [];
    }

    scheduleAppointment(patientName, doctor, appointmentDate) {
        try {
            if (!patientName || !doctor || !appointmentDate) {
                throw new Error("Please fill in all fields.");
            }

            const appointment = {
                patientName,
                doctor,
                appointmentDate
            };

            this.appointments.push(appointment);

            return `Appointment scheduled for ${patientName} with ${doctor} on ${appointmentDate}`;
        } catch (error) {
            return error.message;
        }
    }

    getAppointments() {
        return this.appointments;
    }
}

const hospital = new Hospital();

function scheduleAppointment() {
    const patientName = document.getElementById("patient-name").value;
    const doctor = document.getElementById("doctor").value;
    const appointmentDate = document.getElementById("appointment-date").value;

    const result = hospital.scheduleAppointment(patientName, doctor, appointmentDate);

    document.getElementById("result").innerText = result;

    // Clear form fields after scheduling
    document.getElementById("patient-name").value = "";
    document.getElementById("appointment-date").value = "";
}
