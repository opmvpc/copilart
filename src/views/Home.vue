<template>
  <div>
    <h1>Home</h1>
    <!-- pages menu -->
    <nav>
      <ul class="pages">
        <li
          v-for="page in pages"
          :class="{ active: page.active }"
          :key="page.name"
        >
          <router-link :to="page.path">{{ page.name }}</router-link>
        </li>
      </ul>
    </nav>
    <!-- /pages menu -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      pages: [
        { name: "Home", path: "/" },
        { name: "Profile", path: "/about" },
        { name: "Messages", path: "/" },
        { name: "Settings", path: "/" },
      ],
    };
  },
  methods: {
    onHomeClick() {
      console.log("Home clicked");
    },
    onProfileClick() {
      console.log("Profile clicked");
    },
    onMessagesClick() {
      console.log("Messages clicked");
    },
    onSettingsClick() {
      console.log("Settings clicked");
    },
  },
};
</script>
