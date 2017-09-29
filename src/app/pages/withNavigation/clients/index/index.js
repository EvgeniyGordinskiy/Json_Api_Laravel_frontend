/* ============
 * Home Index
 * ============
 *
 * This is the home page.
 */

import cardv from './../../../../components/card/card.vue';

export default {
  data() {
      return {
          clients: [
              {
               name: 'FirstName LastName',
               email: 'email',
              },
              {
               name: 'FirstName LastName',
               email: 'email',
              },
              {
               name: 'FirstName LastName',
               email: 'email',
              },
              {
               name: 'FirstName LastName',
               email: 'email',
              },
              {
               name: 'FirstName LastName',
               email: 'email',
              },
              {
               name: 'FirstName LastName',
               email: 'email',
              },
              {
               name: 'FirstName LastName',
               email: 'email',
              },
              {
               name: 'FirstName LastName',
               email: 'email',
              },
              {
               name: 'FirstName LastName',
               email: 'email',
              },
              {
               name: 'FirstName LastName',
               email: 'email',
              },
              {
               name: 'FirstName LastName',
               email: 'email',
              },
          ],
          loading: false,
      };
  },

  methods: {
      editClient(client) {
          console.log(client);
      }
  },
  components: {
        cardv: cardv,
    },

};
