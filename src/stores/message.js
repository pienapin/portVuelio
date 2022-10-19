import { defineStore } from "pinia";

export const useMsgStore = defineStore("message", {
  state: () => {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  actions: {
    show() {
      console.log(
        "Pesan dari " +
          this.name +
          " (" +
          this.email +
          ") \ndengan nomor telepon '" +
          this.phone +
          "' : \n" +
          this.message
      );
    },
  },
});
