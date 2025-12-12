<template>
  <section id="why" class="py-24 px-6 bg-secondary/30">
    <div class="max-w-6xl mx-auto">
      <div class="space-y-16">
        <div class="text-center space-y-4">
          <h2
            class="text-5xl md:text-6xl font-bold animate-fade-in-up text-pretty"
          >
            Why choose HabitDB
          </h2>
          <p
            class="text-sm font-medium text-muted-foreground uppercase tracking-wide animate-fade-in"
          >
            HabitDB is the most effective way to build habits
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(feature, i) in features"
            :key="i"
            class="glass rounded-3xl shadow-md p-8 hover:shadow-2xl transition-all border border-white/40 hover:border-white/60 animate-fade-in-up"
            :style="{ animationDelay: `${i * 0.1}s` }"
          >
            <div
              class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-5"
            >
              <span class="text-2xl">{{ feature.icon }}</span>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ feature.title }}</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = ref([
  {
    icon: "✓",
    title: "Marketplace of Routines",
    desc: "Discover and share effective habits with a community of habit builders",
  },
  {
    icon: "⚡",
    title: "Fork & Customize",
    desc: "You don't wanna wake up at 5am? Adjust routines to fit your life",
  },
  {
    icon: "📈",
    title: "Track Progress",
    desc: "Visualize your habit-building journey with detailed analytics",
  },
]);
</script>
