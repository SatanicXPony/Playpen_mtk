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
console.log(medicalStaff.charges[0]);

/*wanted to make schhedule; needed const for weekdays and loop 
so that week days would return patient and ward*/