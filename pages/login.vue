<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script setup>
import { onMounted } from "vue";

import firebase from "firebase/compat/app";

const { $ui } = useNuxtApp();

onMounted(() => {
  $ui.start("#firebaseui-auth-container", {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
  });
});
</script>
