<script setup lang="ts">
import { Radar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  RadialLinearScale,
  Filler,
  LineElement,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  RadialLinearScale,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const chartData: ChartData<"radar"> = {
  labels: [
    "JavaScript",
    "TypeScript",
    "CSS",
    "SEO",
    "Unit Test",
    "Vue",
    "Nuxt",
    "React",
    "Next",
  ],
  datasets: [
    // {
    //   label: "BackEnd Skill",
    //   backgroundColor: "rgba(179,181,198,0.2)",
    //   borderColor: "rgba(179,181,198,1)",
    //   pointBackgroundColor: "rgba(179,181,198,1)",
    //   pointBorderColor: "#fff",
    //   pointHoverBackgroundColor: "#fff",
    //   pointHoverBorderColor: "rgba(179,181,198,1)",
    //   data: [65, 59, 90, 81, 56, 55, 40],
    // },
    {
      label: "FrontEnd Skill",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)",
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10],
    },
  ],
};

const charOptions: ChartOptions<"radar"> = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<template>
  <Radar :data="chartData" :options="charOptions" />
</template>
