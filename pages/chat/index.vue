<template>
  <section class="container">
    <div>
      <ul id="messages">
        <li v-for="message in messages" v-bind:key="message">
          {{ message }}
        </li>
      </ul>
      <form v-on:submit.prevent="submitForm">
        <input type="text" v-model="text" id="msg" autocomplete="off" placeholder="Enter message" /><button class="submit-button">Send</button>
      </form>
    </div>
  </section>
</template>

<script>
import io from "socket.io-client";
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;
const socket = io(`http://${host}:${port}`);

export default {
  name: "Chat",
  data() {
    return {
      text: "",
      messages: []
    }
  },
  created() {
    this.socketConnection();
  },
  methods: {
    socketConnection() {
      socket.on("connect", function() {
        console.log("Client-side socket is connected");
      });

      const messages = this.messages;
      socket.on("chat message", function(msg) {
        console.log(msg);
        console.log(messages);
        messages.push(msg);
      });
    },
    submitForm() {
      const msg = document.getElementById("msg").value;
      socket.emit("chat message", msg);
      this.text = "";
    }
  }
};
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font: 13px Helvetica, Arial; }
form { background: #000080; padding: 3px; position: fixed; bottom: 0; width: 100%; }
form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
#messages { list-style-type: none; margin: 0; padding: 0; }
#messages li { padding: 5px 10px; }
#messages li:nth-child(odd) { background: #eee; }
</style>
