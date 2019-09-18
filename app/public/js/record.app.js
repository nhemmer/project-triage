var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: [],
    formPatient: {
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: ''
    }
  },

  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { patientRecordApp.patients = json })
    },
    handleCreateRecord(event) {
      this.patients.push(this.formPatient);
      this.formPatient = {
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: ''
      }
    },
    handleRecordClick(patient) {
      console.log(patient);
    }
  },
  created() {
    this.fetchPatients();
  }
});
