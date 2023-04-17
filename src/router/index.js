import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
import { routes } from "./routes";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // routes: [
  //   {
  //     path: "/",
  //     name: "home",
  //     component: HomeView,
  //   },
  //   {
  //     path: "/service/website-development",
  //     name: "website-development",
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import("@/views/services/WebSiteDevelopment.vue"),
  //   },
  //   {
  //     path: "/service/webapp-development",
  //     name: "webapp-development",
  //     component: () => import("@/views/services/WebAppDevelopment.vue"),
  //   },
  //   {
  //     path: "/service/ux-design",
  //     name: "ux-design",
  //     component: () => import("@/views/services/UXDesign.vue"),
  //   },

  //   {
  //     path: "/career/ux-designer",
  //     name: "ux-designer",
  //     component: () => import("@/views/career/UxDesigner.vue"),
  //   },

  //   {
  //     path: "/career/vue-developer",
  //     name: "vue-developer",
  //     component: () => import("@/views/career/VueDeveloper.vue"),
  //   },

  //   {
  //     path: "/career/node-developer",
  //     name: "node-developer",
  //     component: () => import("@/views/career/NodeDeveloper.vue"),
  //   },

  //   {
  //     path: "/privacy-policy",
  //     name: "privacy-policy",
  //     component: () => import("@/views/PrivacyPolicy.vue"),
  //   },

  //   {
  //     path: "/portfolio",
  //     name: "portoflio",
  //     component: () => import("@/views/PortfolioView.vue"),
  //   },
  //   {
  //     path: "/portfolio/itext",
  //     name: "itext",
  //     component: () => import("@/views/portfolio/TAitext.vue"),
  //   },
  //   {
  //     path: "/portfolio/ideaflow",
  //     name: "ideaflow",
  //     component: () => import("@/views/portfolio/DesignSystemIdeaflow.vue"),
  //   },
  //   {
  //     path: "/technology",
  //     name: "technology",
  //     component: () => import("@/views/OurTechnologies.vue"),
  //   },
  //   {
  //     path: "/about-us",
  //     name: "about-us",
  //     component: () => import("@/views/AboutUs.vue"),
  //   },
  //   {
  //     path: "/job-opportunities",
  //     name: "job-opportunities",
  //     component: () => import("@/views/JobOpportunities.vue"),
  //   },

  //   {
  //     path: "/:catchAll(.*)",
  //     redirect: "/",
  //   },
  // ],
});

export default router;
