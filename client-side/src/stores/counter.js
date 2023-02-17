import { defineStore } from 'pinia'
import axios from 'axios'

const baseURL = `http://localhost:3000`

export const useCounterStore = defineStore('rshalotec', {
      state: () => ({
        patients: [],
        babies: [],
        patientDetail: {}
      }),
      actions: {
        async fethPatient() {
          try {
            let { data } = await axios.get(`${baseURL}/patients`)
            this.patients = data
          } catch (err) {
            console.log(err)
          }
        },
        async fetchBaby() {
          try {
            let { data } = await axios.get(`${baseURL}/babies`)
            console.log(data)
            this.babies = data
          } catch (err) {
            console.log(err)
          }
        },
        async fetchPatientDetail(id) {
          try {
            let { data } = await axios.get(`${baseURL}/patients/${id}`)
            this.patientDetail = data
          } catch (err) {
            console.log(err)
          }
        },
        async addPatient(objectPatient) {
          try {
            await axios.post(`${baseURL}/patients`, objectPatient)
            Swal.fire("Add Patient", "Data patient added successfully", "success");
            this.router.push("/patients")
          } catch (err) {
            Swal.fire({
              icon: "error",
              title: "Add Patient Failed",
              text: err.response.data.message,
            });
          }
        },
        async addBaby(objectBaby) {
          try {
            await axios.post(`${baseURL}/babies`, objectBaby)
            Swal.fire("Add Born History", "Data born history added successfully", "success");
            this.router.push("/patients")
          } catch (err) {
            Swal.fire({
              icon: "error",
              title: "Add Born History Failed",
              text: err.response.data.message,
            });
          }
        },
        async deletePatient(id) {
          try {
            await axios.delete(`${baseURL}/patients/${id}`)
            Swal.fire("Add Patient", "Data patient delete successfully", "success");
            this.router.push("/")
          } catch (err) {
            Swal.fire({
              icon: "error",
              title: "Delete Patient Failed",
              text: err.response.data.message,
            });
          }
        }
      }
})
