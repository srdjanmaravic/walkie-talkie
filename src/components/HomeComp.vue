<template>
  <div>
    <h3>Home</h3>
    
    <user-comp >
      <template v-slot:user="{ user }">
          <div v-if="user">
            <UserProfile :user="user"/>
            <ChatList :uid="user.uid" />
          </div>
        <log-in v-else/>
      </template>
    </user-comp>
  </div>
</template>

<script>
import LogIn from './LogIn.vue';
import UserComp from './UserComp.vue';
import UserProfile from './UserProfile.vue';
import ChatList from './ChatList.vue';
export default {
  components: {
    LogIn,
    UserComp,
    UserProfile,
    ChatList,
  },
}
</script>

<style>

</style>