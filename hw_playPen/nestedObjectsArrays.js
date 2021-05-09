const medicalStaff = {
    name: "Carla Stevens",
    occupation: {
        title: "Nurse",
        yearsWorked: 4
    },
    charges: [{
        patient: "Paul",
        ward: "Psych"
    }, {
        patient: "Patrice",
        ward: "Obstentrics"
    }]
};

console.log(medicalStaff.occupation);