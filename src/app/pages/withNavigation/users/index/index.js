/* ============
 * Home Index
 * ============
 *
 * This is the home page.
 */

import cardv from './../../../../components/card/card.vue';
import modalFormv from './../../../../components/modalForm/modalForm.vue';

export default {
  data() {
      return {
          users: [
              {
               firstName: 'FirstName LastName',
               email: 'email',
              },
              {
               firstName: 'sdff',
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
          showModal: false,
          user: {}
      };
  },

  methods: {
      editClient(user) {
          this.user = user;
          this.showModal = true;
      },

      cancelForm() {
          this.showModal = true;
      },

      cancelForm() {
          this.showModal = false;
      },
  },
  components: {
        cardv: cardv,
        modalFormv: modalFormv,
    },

};
