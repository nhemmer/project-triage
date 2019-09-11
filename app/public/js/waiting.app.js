var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    person: {
      name: {
        first: '',
        last: ''
      },
    },
    patients: []
  },
methods: {
  fetchPatients() {
    fetch('dummy.php')
    .then(response => response.json() )
    .then( json => {waitingApp.patients = json})
    ;
  }
},
  created() {
    this.fetchPatients();
}
});
