<template>
    <nav class="navbar w-[20%] h-auto pb-4 hidden sm:block">
      <div class="flex justify-end p-8 sm:hidden">
        <img
          id="close-menu-btn"
          src="../static/plus.png"
          class="w-7 h-7 rotate-45"
          alt="close-btn"
        />
      </div>
      <div class="sticky top-0">
        <!-- logo -->
        <logo-container />
        <!-- main links -->
        <section class="text-sm pb-3 pt-3">
          <h2 class="nav-section-header">Personal</h2>
          <navBarItem title="Home" :is-active="activePage == 'Home'"  href="#" />
          <navBarItem title="Browse" :is-active="activePage == 'Browse'" href="#" />
          <navBarItem title="Watchlist" :is-active="activePage == 'Watchlist'" href="#" />
        </section>
        <section class="text-sm pb-3 pt-3">
          <h2 class="nav-section-header">Menu</h2>
          <navBarItem title="Movies" :is-active="activePage == 'Movies'" href="#" />
          <navBarItem title="TVshows" :is-active="activePage == 'TVshows'" href="#" />
          <navBarItem title="People" :is-active="activePage == 'People'" href="#" />
        </section>
        <section class="text-sm pb-3 pt-3">
          <h2 class="nav-section-header">general</h2>
          <navBarItem title="Setting" :is-active="activePage == 'Setting'" href="#" />
          <navBarItem title="Logout" :is-active="activePage == 'Logout'" href="#" />
        </section>
        <!-- notification container -->
        <div class="notification-container">
          <br />
          <br />
        </div>
        <!-- tahmasious github -->
        <div
          class="github-link-container bg-[#131519] w-[80%] rounded-2xl table m-auto mt-10"
        >
          <img
            :src="tahmasiousPhoto"
            alt="owner profile image"
            class="rounded-2xl table m-auto relative top-[-20px] w-[50px] h-[50px]"
          />
          <h3 class="m-auto text-slate-500 text-center mt-[-15px]">
            Tahmasious
          </h3>
          <h4 class="m-auto text-slate-700 text-center">Owner and dev</h4>
          <a
            target="_blank"
            class="bg-slate-700 table m-auto text-white pl-4 pr-4 pt-2 pb-2 rounded-2xl mb-2 mt-2"
            href="https://github.com/tahmasious"
            >Visit github</a
          >
        </div>
      </div>
    </nav>
</template>

<script setup>
import LogoContainer from "./LogoContainer.vue";
import navBarItem from './NavBarItem.vue';
import tahmasiousPhoto from '../../assets/tahmasious.jpg'
defineProps(['activePage'])
</script>

<style scoped>
.nav-section-header {
    @apply pl-9 text-sm mb-5 text-secondary ml-[3px];
  }

  .navbar {
  background: rgb(33, 35, 41);
  background: -moz-linear-gradient(
    180deg,
    rgba(33, 35, 41, 1) 0%,
    rgba(31, 32, 39, 1) 23%,
    rgba(29, 30, 36, 1) 50%,
    rgba(26, 28, 32, 1) 75%,
    rgba(25, 27, 31, 1) 90%,
    rgba(24, 26, 30, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(33, 35, 41, 1) 0%,
    rgba(31, 32, 39, 1) 23%,
    rgba(29, 30, 36, 1) 50%,
    rgba(26, 28, 32, 1) 75%,
    rgba(25, 27, 31, 1) 90%,
    rgba(24, 26, 30, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(33, 35, 41, 1) 0%,
    rgba(31, 32, 39, 1) 23%,
    rgba(29, 30, 36, 1) 50%,
    rgba(26, 28, 32, 1) 75%,
    rgba(25, 27, 31, 1) 90%,
    rgba(24, 26, 30, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#212329",endColorstr="#181a1e",GradientType=1);
}

.nav-section-header {
  margin-bottom: 1.25rem;
  margin-left: 3px;
  padding-left: 2.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgb(73 75 87 / var(--tw-text-opacity));
}

</style>