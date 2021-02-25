<template>
  <section align="center" v-if="!userInfo">
    <v-btn @click="signin">Login(Google)</v-btn>
  </section>
  <section align="center" v-else>
    <v-avatar size="160">
      <v-img :src="imageAddress" />
    </v-avatar>
    <v-text-field readonly v-model="name" />
    <v-text-field readonly v-model="email" />
    <v-btn @click="signout">Logout</v-btn>
  </section>
</template>
<script>
import { Auth } from 'aws-amplify'
export default {
  data() {
    return {
      userInfo: null,
      name: null,
      imageAddress: null,
      email: null,
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      this.userInfo = await Auth.currentUserInfo()
      if (this.userInfo) {
        const user = JSON.parse(JSON.stringify(this.userInfo))
        this.name = user.attributes["name"]
        this.imageAddress = user.attributes["picture"]
        this.email = user.attributes["email"]
        console.log(this.userInfo)
      }
    },
    signin() {
      Auth.federatedSignIn({ provider: 'Google' })
    },
    signout() {
      Auth.signOut()
    },
  },
}
</script>
