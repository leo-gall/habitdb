<template>
  <nav class="fixed top-0 w-full z-50">
    <div class="glass mx-auto border-b border-border/50">
      <div
        class="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between"
      >
        <div class="flex items-center gap-2.5 animate-fade-in">
          <div
            class="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg"
          >
            <NuxtImg src="/logo.png" alt="HabitDB Logo" class="w-6 h-6" />
          </div>
          <span class="font-bold text-lg">HabitDB</span>
        </div>
        <div class="hidden md:flex items-center gap-10">
          <NuxtLink
            to="#routines"
            class="text-sm hover:text-primary transition-colors animate-fade-in delay-100"
          >
            Our Routines
          </NuxtLink>
          <NuxtLink
            href="#why"
            class="text-sm hover:text-primary transition-colors animate-fade-in delay-200"
          >
            Why choose HabitDB
          </NuxtLink>
        </div>
        <div class="flex items-center gap-4">
          <button
            class="hidden sm:inline-flex text-sm hover:text-primary transition-colors animate-fade-in delay-400"
          >
            Sign In
          </button>
          <button
            class="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium transition-colors animate-fade-in delay-400 hover:bg-primary/90"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
