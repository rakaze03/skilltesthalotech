<script>
import { mapActions, mapState } from 'pinia';
import PatientTableRow from '../components/PatientTableRow.vue';
import { useCounterStore } from '../stores/counter';
import { RouterLink } from 'vue-router';
export default {
    name: "PatientPage", 
    components: {
        PatientTableRow
    },
    computed: {
        ...mapState(useCounterStore, ["patients", "patientDetail"])
    },
    methods: {
        ...mapActions(useCounterStore, ["fethPatient", "deletePatient", "fetchPatientDetail"]),
        fetchPatientDetail(id) {
            this.$emit("fetchPatientDetail", id)
        }
    },
    created() {
        this.fethPatient()
    }
}
</script>
<template>
    <section>
    <div class="mt-16 mb-16 flex justify-center rounded-md w-auto bg-white">
      <div class="mt-5">
        <h1 class="text-3xl text-center mb-5">Patient List</h1>
        <RouterLink to="/addpatients" class="mt-4 text-sm bg-sky-400 border border-1 px-2 py-1 rounded-md text-white">Add New Patient Data</RouterLink>
        <table class="w-full border-2 border-gray-200">
          <thead class="bg-gray-700">
            <tr>
              <th class="p-3 text-sm text-white font-semibold">Id</th>
              <th class="p-3 text-sm text-white font-semibold">Patient Name</th>
              <th class="p-3 text-sm text-white font-semibold">Patient Age</th>
              <th class="p-3 text-sm text-white font-semibold">Gestational Age</th>
              <th class="p-3 text-sm text-white font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            <PatientTableRow 
                v-for="patient in patients"
                :key="patient.id"
                :patient="patient"
                :patientDetail="patientDetail"
                @fetchPatient="fethPatient"
                @deletePatient="deletePatient"
                @fetchPatientDetai="fetchPatientDetail"
            />
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>