<script>
export default {
    name: "BabiesTableRow",
    props: ["baby"],
    emits: ["fetchBaby"],
    computed: {
        date() {
            const date = new Date(this.baby.date).toISOString().slice(0, 10)
            const hour = new Date(this.baby.date).getHours()
            const minute = new Date(this.baby.date).getMinutes()
            return `${date}, jam ${hour}.${minute}`
        }
    }
}
</script>
<template>
     <tr class="bg-white">
        <th class="p-3 text-sm text-gray-700 font-semibold">{{ baby.id }}</th>
        <th class="p-3 text-sm text-gray-700 font-semibold">{{ baby.genderBaby }}</th>
        <th class="p-3 text-sm text-gray-700 font-semibold">{{ baby.babyLength }} cm</th>
        <th class="p-3 text-sm text-gray-700 font-semibold">{{ baby.babyWeight }} kg</th>
        <th class="p-3 text-sm text-gray-700 font-semibold">{{ date }}</th>
        <th class="p-3 text-sm text-gray-700 font-semibold">{{ baby.partusProcess }}</th>
        <th class="p-3 text-sm text-gray-700 font-semibold">{{ baby.birthStatus }}</th>
        <th class="p-3 text-sm text-gray-700 font-semibold">{{ baby.Patient.motherName }}</th>
    </tr>
</template>