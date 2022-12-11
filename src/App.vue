<script setup>
import arcaptchaVue3 from "./arcaptchaVue3.vue";
function callbackDef() {
  // This function would be called after solving captcha
}
function expired_callbackDef() {
    //This function would be called after expiring
}
</script>

<template>
  <div>
    <arcaptchaVue3
      :callback="callbackDef"
      :expired_callback="expired_callbackDef"
      site_key="bdopsptc2b"
    >
    </arcaptchaVue3>
  </div>
</template>
