<script>
import BaseProject from "@/components/BaseProject.vue";
import { useRouter } from "vue-router";

export default {
  name: "ProjectsView",
  components: {
    BaseProject,
  },
  data: () => ({
    temp: useRouter().currentRoute.value.params.projectName,
    kukertui: {
      name: "KukerTUI",
      src: "../src/assets/kukertui.gif",
      detail:
        "KukerTUI merupakan aplikasi TUI (Textual User Interface) untuk mengisi logbook KKN di portal Universitas Riau. KukerTUI hadir dikarenakan kelalaian dalam mengisi logbook sehingga logbook harian yang harus diisi menumpuk.",
    },
    gettinboxed: {
      name: "GettinBoxed",
      src: "../src/assets/gettinboxed.png",
      detail: "a game about box",
    },
    portfoliotailwind: {
      name: "Portfolio Website with Tailwind",
      src: "../src/assets/portfoliotailwind.png",
      detail: "Website Portfolio yang dibuat dengan framework TailwindCSS",
    },
  }),
};
</script>

<template>
  <BaseProject
    v-if="this.temp == 'kukertui'"
    :label="kukertui.name"
    :source="kukertui.src"
    :detail="kukertui.detail"
  />
  <BaseProject
    v-if="this.temp == 'gettinboxed'"
    :label="gettinboxed.name"
    :source="gettinboxed.src"
    :detail="gettinboxed.detail"
  />
  <BaseProject
    v-if="this.temp == 'portfoliotailwind'"
    :label="portfoliotailwind.name"
    :source="portfoliotailwind.src"
    :detail="portfoliotailwind.detail"
  />
</template>
