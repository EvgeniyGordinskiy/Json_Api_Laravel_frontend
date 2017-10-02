
import Formvue from './../form/form.vue';
import Forms from './../../utils/forms/forms';
import timeZones from './../../mixins/timeZones';


export default {
  data() {
    return {
      form: new Forms({
        firstName: {
          value: this.user.firstName,
          type: 'text',
        },
        lastName: {
          value: '',
          type: 'text',
        },
        email: {
          value: '',
          type: 'email',
        },
        timeZone: {
          value: '',
          type: 'select',
        }
      }),
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
    cancelForm: {
      type: Function,
    },
    submit: {
      type: Function,
    },
  },

  methods: {
    onSubmit() {
     console.log('submit');
    },
  },

  watch: {
    /**
     * Watches state update to inject on Forms class.
     *
     * @param  {Object} deposits    The all deposits list.
     */
    timeZones(deposits) {
    },

  },

  updated() {
    this.form.assignData(this.user);
  },

  created() {
    this.form.setOptions('timeZone', this.timeZones);
  },
  components: {
    formv: Formvue,
  },
  mixins: [
    timeZones,
  ],
};
