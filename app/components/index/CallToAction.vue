<template>
  <section
    id="cta"
    class="py-32 px-6 bg-primary text-primary-foreground relative overflow-hidden"
  >
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"
      />
      <div
        class="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"
      />
    </div>

    <div
      class="max-w-4xl mx-auto text-center space-y-10 relative z-10 animate-fade-in-up"
    >
      <h2 class="text-5xl md:text-6xl font-bold text-pretty">
        Ready to transform your life?
      </h2>
      <p class="text-lg opacity-90 max-w-2xl mx-auto">
        Start building better habits today. It only takes 5 minutes to get
        started and change your life forever.
      </p>
      <button
        class="px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 bg-primary-foreground text-primary hover:bg-gray-100 transition hover:cursor-pointer"
      >
        Get Started for Free
        <LucideChevronRight class="w-5 h-5" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { LucideChevronRight } from "lucide-vue-next";
</script>
