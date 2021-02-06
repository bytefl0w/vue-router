import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventLayout from "../views/event/Layout.vue";
import EventDetails from "@/views/event/Details.vue";
import EventRegister from "../views/event/Register.vue";
import EventEdit from "@/views/event/Edit.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import NetworkError from "../views/NetworkError.vue"
const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1}) // Props Function Mode (short hand for JS anonymous funciton)
  },
  {
    // NOTE: Since :id is required for each child path, If :id isn't sent in, it will
    // look and use the :id param that is present. Therefore, in Layout.vue, we don't
    // need to put param: { id } for each router-link
    path: "/events/:id",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    children: [
      {
        path: "",
        name: "EventDetails",
        component: EventDetails,
      },
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister
      },
      {
         path: "edit",
         name: "EventEdit",
         component: EventEdit
      },
    ]
  },
  { 
    path: '/event/:afterEvent(.*)', // Example problem, if we want to change from old event path to events.
    redirect: to => { // Replace event with events and and all params after event to URL, then redirect
      return { path: '/events/' + to.params.afterEvent }
    }
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: '/:catchAll(.*)', // Match all routes that don't match an existing route
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
