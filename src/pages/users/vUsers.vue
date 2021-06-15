<template>
  <div>
    <h1 class="mb-3">Users</h1>
    <b-list-group>
      <div v-for="user in users" :key="user.id">
        <b-list-group-item button v-b-toggle="`collapse-${user.id}`">
          <div class="d-flex justify-content-between">
            <strong>{{ user.name }}</strong> <small>id: {{ user.id }}</small>
          </div>
        </b-list-group-item>
        <b-collapse :id="`collapse-${user.id}`" class="mt-1 mb-3">
          <b-list-group>
            <b-list-group-item class="betweened">
              username: <strong>{{ user.username }}</strong>
            </b-list-group-item>
            <b-list-group-item class="betweened">
              email: <strong>{{ user.email }}</strong>
            </b-list-group-item>
            <b-list-group-item class="betweened">
              number: <strong>{{ user.phone }}</strong>
            </b-list-group-item>
            <b-list-group-item class="betweened">
              website: <strong>{{ user.website }}</strong>
            </b-list-group-item>

            <b-list-group-item
              variant="primary"
              button
              @click="$router.push(`/users/${user.id}`)"
            >
              Show more info
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </div>
    </b-list-group>
  </div>
</template>

<script>
import { userService } from "../../services/api/user.service";

export default {
  name: "users",
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    this.users = await userService.getUsers(10);
  },
};
</script>

<style scoped lang="scss">
.betweened {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & strong {
    margin-left: 20px;
  }
}
</style>
