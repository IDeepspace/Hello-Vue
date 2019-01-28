import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/views/Welcome';
import SingleLifecycle from '@/views/SingleLifecycle';
import ParentChildLifecycle from '@/views/ParentChildLifecycle';
import BrotherLifecycle from '@/views/BrotherLifecycle';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/singe-lifecycle',
      name: 'SingleLifecycle',
      component: SingleLifecycle,
    },
    {
      path: '/parent-child-lifecycle',
      name: 'ParentChildLifecycle',
      component: ParentChildLifecycle,
    },
    {
      path: '/brother-lifecycle',
      name: 'BrotherLifecycle',
      component: BrotherLifecycle,
    },
  ],
});
