/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */


/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
    // Home
  {
    path: '/home',
    name: 'home.index',
     // eslint-disable-next-line
    component: require('./pages/home/index/index.vue'),
  },
];
