<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
    name: "AddBornHistory",
    data() {
        return {
            baby: {
                PatientId: "",
                genderBaby: "",
                babyLength: "",
                babyWeight: "",
                partusProcess: "",
                birthStatus: "",
            }
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["addBaby"]),
    },
}
</script>
<template>
    <section>
    <div class="flex justify-center">
      <div class="container bg-white w-96 p-6 rounded shadow-lg mt-16 mb-16">
        <div class="flex items-center justify-center mb-10">
          <span class="font-bold text-3xl">Add Patient Form</span>
        </div>
        <form @submit.prevent="addBaby(baby)">
        <label class="text-gray-700">Patient Id*</label>
          <input
            v-model="baby.PatientId"
            class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
            type="text"
          />
        <label class="text-gray-700">Gender Baby*</label>
          <select
            v-model="baby.genderBaby"
            class="select block w-full mt-1 border border-gray-400 rounded-md mb-4"
          >
            <option value="">-- Select Gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label class="text-gray-700">Baby Length*</label>
          <input
            v-model="baby.babyLength"
            class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
            type="text"
          />
          <label class="text-gray-700">Baby Weight*</label>
          <input
            v-model="baby.babyWeight"
            class="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
            type="text"
          />
          <label class="text-gray-700">Partus Process*</label>
          <select
            v-model="baby.partusProcess"
            class="select block w-full mt-1 border border-gray-400 rounded-md mb-4"
          >
            <option value="">-- Select Partus Process --</option>
            <option value="Normal">Normal</option>
            <option value="Caesar">Caesar</option>
            <option value="Waterbirth">Waterbirth</option>
          </select>
          <label class="text-gray-700">Birth Status*</label>
          <select
            v-model="baby.birthStatus"
            class="select block w-full mt-1 border border-gray-400 rounded-md mb-4"
          >
            <option value="">-- Select Birth Status --</option>
            <option value="Healthy">Healthy</option>
            <option value="Disable">Disable</option>
            <option value="Death">Death</option>
          </select>
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