<template>
  <section
    class="lg:min-h-screen flex items-center pt-32 px-6 lg:pb-20 max-md:text-center"
  >
    <div
      class="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >
      <div class="space-y-8">
        <div class="space-y-4">
          <p
            class="text-sm font-medium text-muted-foreground uppercase tracking-wide animate-fade-in"
          >
            Build Better Habits
          </p>
          <h1
            class="text-6xl md:text-7xl font-bold leading-tight animate-fade-in-up text-pretty"
          >
            Meet HabitDB
          </h1>
        </div>
        <p
          class="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up delay-100"
        >
          It's not just another habit tracker. It's a marketplace for people who
          want to share and discover effective habits to improve their lives.
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200 pt-4"
        >
          <button
            class="hover:cursor-pointer px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
          >
            Start for Free
            <LucideChevronRight class="w-4 h-4" />
          </button>
          <NuxtLink
            to="https://github.com/leo-gall/habitdb"
            target="_blank"
            class="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary/5 transition-all font-medium items-center justify-center flex gap-2 hover:cursor-pointer"
          >
            Star on GitHub
          </NuxtLink>
        </div>
      </div>

      <div
        class="relative h-96 md:h-full min-h-96 animate-fade-in delay-300 hidden md:block"
      >
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft"
        ></div>
        <div
          class="absolute bottom-10 left-10 w-80 h-80 bg-muted rounded-full blur-3xl animate-pulse-soft delay-300"
        ></div>
        <div class="relative h-full flex items-center justify-center">
          <div class="w-full max-w-sm space-y-4">
            <div
              v-for="(habit, i) in habits"
              @click="checkHabit(i)"
              :key="i"
              class="glass hover:cursor-pointer rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all border border-white/40 select-none h-42"
            >
              <div class="flex items-center justify-between mb-5">
                <h3 class="font-semibold text-sm">{{ habit.title }}</h3>
                <button
                  class="w-5 h-5 rounded border-2 hover:cursor-pointer transition-all flex items-center justify-center"
                  :class="
                    habit.checked
                      ? 'bg-primary border-primary'
                      : 'border-muted-foreground'
                  "
                >
                  <LucideCheck
                    v-if="habit.checked"
                    class="w-3 h-3 text-white"
                  />
                </button>
              </div>
              <div class="mb-4">
                <p class="text-xs text-muted-foreground mb-3">
                  Streak: {{ habit.streak }} days
                </p>
                <div class="flex items-center gap-2">
                  <div
                    v-for="(day, index) in 7"
                    :key="day"
                    class="flex-1 flex items-center"
                  >
                    <div
                      class="h-2 flex-1 rounded-full transition-all"
                      :class="
                        day <= habit.streak ? 'bg-primary' : 'bg-muted/50'
                      "
                    />
                  </div>
                </div>
                <p
                  v-if="
                    habit.streakMotivations?.some(
                      (item) => habit.streak >= item.streak
                    )
                  "
                  class="text-sm font-medium text-primary my-3 pb-3"
                >
                  {{
                    getStreakMotivation(
                      habit.streak,
                      habit.streakMotivations || []
                    )
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { LucideCheck, LucideChevronRight } from "lucide-vue-next";
import { ref } from "vue";

interface Habit {
  title: string;
  streak: number;
  checked: boolean;
  streakMotivations?: { streak: number; message: string }[];
}

function getStreakMotivation(
  streak: number,
  motivations: { streak: number; message: string }[]
): string | null {
  const motivation = motivations
    .filter((item) => streak >= item.streak)
    .slice(-1)[0];
  return motivation ? motivation.message : null;
}

function checkHabit(index: number) {
  const habit = habits.value[index];
  if (!habit) return;
  habit.checked = !habit.checked;
  habit.streak += habit.checked ? 1 : -1;
}

const habits = ref<Habit[]>([
  {
    title: "The Rock's Morning Routine",
    streak: 4,
    checked: false,
    streakMotivations: [
      {
        streak: 4,
        message: "Four days strong! Channel your inner Dwayne Johnson energy.",
      },
      {
        streak: 5,
        message: "Five-day streak! You're building habits like The Rock.",
      },
    ],
  },
  {
    title: "David Goggins Workout Plan",
    streak: 1,
    checked: false,
    streakMotivations: [
      {
        streak: 1,
        message: "Day one done—stay hard and keep pushing your limits.",
      },
      {
        streak: 2,
        message: "Two days in! Embrace the suck and keep moving forward.",
      },
    ],
  },
  {
    title: "Elon Musk's Productivity Hacks",
    streak: 7,
    checked: true,
    streakMotivations: [
      {
        streak: 6,
        message: "Six-day streak! You’re innovating your habits like Elon.",
      },
      {
        streak: 7,
        message:
          "A week of productivity! Time to launch your own success story.",
      },
    ],
  },
]);
</script>
