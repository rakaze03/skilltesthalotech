<script>
import { RouterLink } from 'vue-router';
export default {
    name: "PatientTableRow",
    props: ["patient"],
    emits: ["fetchPatient", "fetchPatientDetail", "deletePatient"],
    methods: {
        deletePatient(id) {
            this.$emit("deletePatient", id)
        },
    }
}

</script>
<template>
    <tr class="bg-white">
        <th class="p-3 text-sm text-gray-700 font-semibold">{{ patient.id }}</th>
        <th class="p-3 text-sm text-gray-700 font-semibold">{{ patient.motherName }}</th>
        <th class="p-3 text-sm text-gray-700 font-semibold">{{ patient.motherAge }}</th>
        <th class="p-3 text-sm text-gray-700 font-semibold">{{ patient.gestationalAge }} day</th>
        <th>
            <button @click.prevent="deletePatient(patient.id)" class="mt-4 text-sm bg-red-500 border border-1 px-2 py-1 rounded-md text-white">Delete</button>
        </th>
    </tr>
</template>