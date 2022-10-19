<script setup>
import { useMsgStore } from "@/stores/message";

const store = useMsgStore();

let input = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const submitMsg = function () {
  store.name = input.name;
  store.email = input.email;
  store.phone = input.phone;
  store.message = input.message;
  store.show();
};
</script>

<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <!-- <form
      class="contactForm"
      action="https://formspree.io/f/xeqdlgqy"
      method="POST"
      onsubmit="submitMsg(); return false;"
    > -->
    <form class="contactForm" @submit.prevent="submit">
      <div class="txtInput">
        <input
          v-model="input.name"
          type="text"
          name="name"
          id="name"
          required
        />
        <span></span>
        <label for="name">Name</label>
      </div>
      <div class="txtInput">
        <input
          v-model="input.email"
          type="email"
          name="email"
          id="email"
          required
        />
        <span></span>
        <label for="email">Email</label>
      </div>
      <div class="txtInput">
        <input
          v-model="input.phone"
          type="text"
          name="phone"
          id="phone"
          optional
        />
        <span></span>
        <label for="phone">Phone Number</label>
      </div>
      <div class="txtArea">
        <textarea
          v-model="input.message"
          name="message"
          id="message"
          col="10"
          row="1"
          required
        />
        <label for="message">Message</label>
      </div>
      <input type="submit" value="Submit" @click="submitMsg()" />
    </form>
  </div>
</template>

<style>
.contact h1 {
  text-align: center;
}

.contactForm {
  width: 50%;
  margin: auto auto;
}

.txtInput input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  outline: none;
}

.txtArea textarea {
  width: 100%;
  padding: 0 5px;
  height: 100px;
  font-size: 16px;
  border: none;
  outline: none;
  resize: none;
}

.txtArea label {
  position: absolute;
  top: 5%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
}

.txtInput label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
}

form input[type="submit"] {
  display: block;
  border: none;
  border-radius: 5px;
  padding: 10px 24px;
  font-size: 12px;
  margin: auto auto;
}

form .txtInput {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}

form .txtArea {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}

.txtInput span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #26919d;
}

.txtInput input:focus ~ label,
.txtInput input:valid:required ~ label {
  top: -5px;
  color: #26919d;
}

.txtInput input:required ~ label,
.txtInput input:optional ~ label {
  top: -5px;
  color: #adadad;
}

.txtInput input:valid:optional ~ label {
  color: #adadad;
}

.txtArea textarea:focus ~ label,
.txtArea textarea:valid ~ label {
  top: -12px;
  color: #26919d;
}
</style>
