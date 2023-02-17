<script>
import BabiesTableRow from '../components/BabiesTableRow.vue';
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    name: "BabiesPage",
    components: {
    BabiesTableRow
},
    computed: {
        ...mapState(useCounterStore, ["babies"])
    },
    methods: {
        ...mapActions(useCounterStore, ["fetchBaby"])
    },
    created() {
        this.fetchBaby()
    }
}
</script>
<template>
     <section>
    <div class="mt-16 mb-16 flex justify-center rounded-md w-auto bg-white">
      <div class="mt-5">
        <h1 class="text-3xl text-center mb-5">Born History</h1>
        <RouterLink to="/addbornhistories" class="mt-4 text-sm bg-sky-500 border border-1 px-2 py-1 rounded-md text-white">Add Birth History</RouterLink>
        <table class="w-full border-2 border-gray-200">
          <thead class="bg-gray-700">
            <tr>
              <th class="p-3 text-sm text-white font-semibold">Id</th>
              <th class="p-3 text-sm text-white font-semibold">Baby Gender</th>
              <th class="p-3 text-sm text-white font-semibold">Baby Length</th>
              <th class="p-3 text-sm text-white font-semibold">Baby Weight</th>
              <th class="p-3 text-sm text-white font-semibold">Born Date</th>
              <th class="p-3 text-sm text-white font-semibold">Partus Process</th>
              <th class="p-3 text-sm text-white font-semibold">Birth Status</th>
              <th class="p-3 text-sm text-white font-semibold">Mother Name</th>
            </tr>
          </thead>
          <tbody>
            <BabiesTableRow
                v-for="baby in babies"
                :key="baby.id"
                :baby="baby"
                @fetchPatient="fetchBaby"
            />
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>