import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import PatientPage from "../views/PatientPage.vue"
import BabiesPage from "../views/BabiesPage.vue"
import PatientDetailePage from "../views/PatientDetailePage.vue"
import AddPatientForm from "../views/AddPatientForm.vue"
import AddBornHistory from "../views/AddBornHistory.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: "/",
    name: "home",
    component: HomePage,
   },
   {
    path: "/patients",
    name: "patients",
    component: PatientPage,
   },
   {
    path: "/babies",
    name: "babies",
    component: BabiesPage,
   },
   {
    path: "/addpatients",
    name: "addpatientform",
    component: AddPatientForm
   },
   {
    path: "/addbornhistories",
    name: "addbornhistories",
    component: AddBornHistory
   }
  ]
})

export default router
