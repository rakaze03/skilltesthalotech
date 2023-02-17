<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
    name: "AddPatientForm",
    data() {
        return {
            patient: {
                motherName: "",
                motherAge: "",
                gestationalAge: ""
            }
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["addPatient"])
    }
}
</script>
<template>
    <section>
    <div class="flex justify-center">
      <div class="container bg-white w-96 p-6 rounded shadow-lg mt-16 mb-16">
        <div class="flex items-center justify-center mb-10">
          <span class="font-bold text-3xl">Add Patient Form</span>
        </div>
        <form @submit.prevent="addPatient(patient)">
          <label class="text-gray-700">Patient Name*</label>
          <input
            v-model="patient.motherName"
            class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
            type="text"
          />
          <label class="text-gray-700">Patient Age*</label>
          <input
            v-model="patient.motherAge"
            class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
            type="text"
          />
          <label class="text-gray-700">Gestational Age*</label>
          <input
            v-model="patient.gestationalAge"
            class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
            type="number"
          />
          <button
             type="submit"
             class="mt-4 text-sm bg-gray-500 border border-1 px-2 py-1 rounded-md text-white"
           >
             Cancel
           </button>
           <button
             type="submit"
             class="mt-4 text-sm bg-sky-400 border border-1 px-2 py-1 rounded-md text-white"
           >
             Submit
           </button>
        </form>
      </div>
    </div>
  </section>
</template>