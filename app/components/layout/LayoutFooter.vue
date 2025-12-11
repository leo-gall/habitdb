<template>
  <footer class="border-t border-border py-16 px-6 bg-secondary/50">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div class="space-y-4">
          <div class="flex items-center gap-2.5">
            <div
              class="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
            >
              <img src="/logo.png" alt="HabitDB Logo" class="w-5 h-5" />
            </div>
            <span class="font-bold">HabitDB</span>
          </div>
          <p class="text-sm text-muted-foreground">
            HabitDB is your go-to platform for discovering and sharing effective
            habits to improve your life.
          </p>
        </div>
        <div v-for="col in footerLinks" :key="col.title">
          <h4 class="font-bold mb-4">{{ col.title }}</h4>
          <ul class="space-y-3 text-sm text-muted-foreground">
            <li v-for="link in col.links" :key="link.title">
              <NuxtLink
                :to="link.link"
                :target="link.target ? link.target : '_self'"
                class="hover:text-foreground transition-colors"
                >{{ link.title }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        class="border-t border-border pt-8 text-center text-sm text-muted-foreground"
      >
        <p>&copy; 2025 HabitDB. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
interface FooterLinkItem {
  title: string;
  link: string;
  target?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLinkItem[];
}

const footerLinks = ref<FooterColumn[]>([
  {
    title: "Product",
    links: [
      { title: "Top Routines", link: "#routines" },
      { title: "Why HabitDB?", link: "#why" },
    ],
  },
  {
    title: "About",
    links: [
      {
        title: "Developer's Website",
        link: "https://lgll.dev",
        target: "_blank",
      },
      {
        title: "GitHub",
        link: "https://github.com/leo-gall/habitdb",
        target: "_blank",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Imprint", link: "https://lgll.dev/#contact", target: "_blank" },
    ],
  },
]);
</script>
