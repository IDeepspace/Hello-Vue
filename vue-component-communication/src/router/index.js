import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import PassDataInParentChild from '@/views/PassDataInParentChild';
import PassDataInBrothers from '@/views/PassDataInBrothers';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/pass-data-in-parent-child',
      name: 'PassDataInParentChild',
      component: PassDataInParentChild,
    },
    {
      path: '/pass-data-in-brothers',
      name: 'PassDataInBrothers',
      component: PassDataInBrothers,
    },
  ],
});
