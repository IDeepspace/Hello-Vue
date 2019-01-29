import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
// import MicroBlog from '@/components/MicroBlog';
import Match from '@/components/Match';
// import WatchExample from '@/components/WatchExample';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    // },
    // {
    //   path: '/',
    //   name: 'MicroBlog',
    //   component: MicroBlog,
    // },
    {
      path: '/',
      name: 'Match',
      component: Match,
    },
    // {
    //   path: '/',
    //   name: 'WatchExample',
    //   component: WatchExample,
    // },
  ],
});
