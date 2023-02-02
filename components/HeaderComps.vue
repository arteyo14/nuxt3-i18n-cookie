<script lang="ts" setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i: any) => i.code !== locale.value);
});
</script>
<template>
  <div class="navbar bg-base-100 shadow-lg mb-4">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">NIKE</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink to="/">{{ $t("home") }}</NuxtLink>
        </li>
        <li>
          <a>{{ $t("about") }}</a>
        </li>
        <li tabindex="0">
          <NuxtLink
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            >{{ $t("lang") }}: {{ locale.name }}</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/map">Map</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
