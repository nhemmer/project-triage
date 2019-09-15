var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    person: {
      name: {
        first: '',
        last: ''
      },
    },
    patients: [
      {
        "patientGuid": "1038",
        "firstName": "Jake",
        "lastName": "Gyllenhall",
        "dob": "1981-07-18",
        "sexAtBirth": "M",
        "priority": "high"
      },
      {
        "patientGuid": "1046",
        "firstName": "Meryl",
        "lastName": "Streep",
        "dob": "1950-12-15",
        "sexAtBirth": "F",
        "priority": "medium"
      },
      {
        "patientGuid": "1759",
        "firstName": "Tom",
        "lastName": "Hardy",
        "dob": "1979-08-13",
        "sexAtBirth": "M",
        "priority": "low"
      },
      {
        "patientGuid": "1335",
        "firstName": "Nicole",
        "lastName": "Kidman",
        "dob": "1969-11-14",
        "sexAtBirth": "F",
        "priority": "high"
      }
    ]
  },
methods: {
  fetchPatients() {
    fetch('dummy.php')
    .then(function(response){waitingApp.patients = response.json()};);
  }
},
created() {
  this.fetchPatients()
}
});
