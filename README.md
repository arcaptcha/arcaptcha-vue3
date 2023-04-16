# ARCaptcha Vue3

ARCaptcha Component Library for Vue3.

## Installation

You can install this library via npm with:

- `npm i arcaptcha-vue3`

#### Basic Usage

```
<script setup>
import arcaptchaVue3 from "arcaptcha-vue3";

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
    site_key="YOUR_SITE_KEY"
  >
  </arcaptchaVue3>

  <!-- <arcaptchaVue3 site_key="bdopsptc2b"></arcaptchaVue3> -->
</div>
</template>


```

## Props

| Name                | Values/Type | Required | Default | Description                                                                                                                                                           |
| ------------------- | ----------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| site_key            | string      | Yes      | -       | This is your sitekey, this allows you to load captcha. If you need a sitekey, please visit [Arcaptcha](https://arcaptcha.ir/sign-up), and sign up to get your sitekey |
| invisible           | Boolean     | NO       | False   | This allows you to use invisible captcha for you forms                                                                                                                |
| lang                | string      | NO       | fa      | This allows you to choose language by this prop. you can choose 'en' or 'fa' for english and persion language                                                         |
| theme               | string      | NO       | light   | This allows you to choose theme for your widget. The themes are light and dark                                                                                        |
| color               | String      | No       | normal  | Color of every colored element in widget and challenge.                                                                                                               |
| callback            | Function    | NO       | null    | This function would be called after solving captcha                                                                                                                   |
| rendered_callback   | Function    | NO       | null    | This function would be called after rendering captcha                                                                                                                 |
| closed_callback     | Function    | NO       | null    | This function would be called after user decides to close the challenge                                                                                               |
| error_callback      | Function    | NO       | null    | This function would be called after error                                                                                                                             |
| reset_callback      | Function    | NO       | null    | This function would be called after reseting captcha                                                                                                                  |
| expired_callback    | Function    | NO       | null    | This function would be called after expiring                                                                                                                          |
| chlexpired_callback | Function    | NO       | null    | This function would be called after challange expiration                                                                                                              |

## Methods

| Method         | Description                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| execute()      | Programmatically trigger a challenge request. You can use this, to load invisible captcha after trigger a button |
| resetCaptcha() | Reset the current challenge                                                                                      |

### How can I get a sitekey?

Sign up at [ARCaptcha](https://arcaptcha.ir) to get your sitekey. Check [documentation](https://docs.arcaptcha.ir) for more information.
