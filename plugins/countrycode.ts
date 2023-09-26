import Vue from 'vue';
import VueCountryRegionSelect from 'vue-country-region-select';

Vue.component('vue-country-region-select', VueCountryRegionSelect);

export default (context: any, inject: any) => {
  // You can use the inject function to make the component available in the context
  inject('countryRegionSelect', VueCountryRegionSelect);
};