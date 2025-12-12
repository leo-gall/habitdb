<template>
  <section id="routines" class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] px-4">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center space-y-4">
            <h2
              class="text-5xl md:text-6xl font-bold animate-fade-in-up text-pretty"
            >
              Top Routines
            </h2>

            <p
              class="text-sm font-medium text-muted-foreground uppercase tracking-wide animate-fade-in"
            >
              Inspire your daily habits with routines from top performers around
              the world.
            </p>
          </div>
        </div>
      </div>

      <div class="hidden lg:flex w-full flex-wrap justify-center -mx-4">
        <div class="w-full">
          <ul class="flex flex-wrap justify-center mb-12">
            <li class="mb-1">
              <button
                v-for="category in ['All', ...uniqueCategories]"
                :key="category"
                @click="selectCategory(category)"
                :class="{
                  'bg-primary text-white': selectedCategory === category,
                  'text-body-color hover:bg-primary mx-1 hover:text-white':
                    selectedCategory !== category,
                }"
                class="hover:cursor-pointer inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8"
              >
                {{ category }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-wrap -mx-4">
        <div
          class="w-full px-4 md:w-1/2 xl:w-1/3"
          v-for="item in filteredItems"
          :key="item.title"
        >
          <div class="relative mb-12">
            <div class="overflow-hidden rounded-[10px] max-lg:px-2">
              <img
                :src="'/images/' + item.imagename + '.webp'"
                alt="portfolio"
                class="w-full h-72 object-cover"
              />
            </div>
            <div
              class="relative z-10 mx-7 -mt-20 rounded-lg border border-gray-200 bg-white py-[34px] px-3 text-center shadow-portfolio"
            >
              <span class="text-primary mb-2 block text-sm font-medium">{{
                item.category
              }}</span>
              <h3 class="text-dark mb-5 text-xl font-bold">
                {{ item.title }}
              </h3>
              <NuxtLink
                :to="item.buttonLink"
                class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke py-[10px] px-7 text-sm font-medium transition hover:text-white"
              >
                {{ item.buttonText }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

interface PortfolioItem {
  imagename: string;
  category: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}

const portfolioItems = ref<PortfolioItem[]>([
  {
    imagename: "therock",
    category: "Morning Routine",
    title: "The Rock's Morning Routine",
    buttonText: "View Details",
    buttonLink: "#",
  },
  {
    imagename: "davidgoggins",
    category: "Workout",
    title: "David Goggins Workout Plan",
    buttonText: "View Details",
    buttonLink: "#",
  },
  {
    imagename: "elonmusk",
    category: "Productivity",
    title: "Elon Musk's Productivity Hacks",
    buttonText: "View Details",
    buttonLink: "#",
  },
  {
    imagename: "ronaldo",
    category: "Diet",
    title: "Ronaldos Diet Plan",
    buttonText: "View Details",
    buttonLink: "#",
  },
  {
    imagename: "jeffbezos",
    category: "Productivity",
    title: "How Jeff Bezos Manages Time",
    buttonText: "View Details",
    buttonLink: "#",
  },
  {
    imagename: "timcook",
    category: "Productivity",
    title: "Tim Cook's Productivity Cookbook",
    buttonText: "View Details",
    buttonLink: "#",
  },
]);

const selectedCategory = ref<string>("All");

const uniqueCategories = ref<string[]>([]);
const filteredItems = ref<PortfolioItem[]>([]);

// Extract unique categories from portfolioItems
onMounted(() => {
  uniqueCategories.value = Array.from(
    new Set(portfolioItems.value.map((item) => item.category))
  );
  filterItems();
});

const selectCategory = (category: string) => {
  selectedCategory.value = category;
  filterItems();
};

const filterItems = () => {
  if (selectedCategory.value === "All") {
    filteredItems.value = portfolioItems.value;
  } else {
    filteredItems.value = portfolioItems.value.filter(
      (item) => item.category === selectedCategory.value
    );
  }
};
</script>
