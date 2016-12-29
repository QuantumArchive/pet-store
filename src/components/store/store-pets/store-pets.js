import template from './store-pets.html';
import styles from './store-pets.scss';

export default {
    template,
    transclude: true,
    require: {
        parent: '^store'
    },
    bindings: {
        store: '<',
        pets: '<',
        del: '<',
        category: '<'
    },
    controller
};

controller.$inject = ['petService','$state'];

function controller(petService, $state) {
    this.styles = styles;
    this.sort = '';
    this.order = false;

    this.goAddPet = () => {
        $state.go('stores.store.addPet');
    };

    this.orderBy = category => {
        if (this.sort === category) {
            this.order = !this.order;
        } else {
            this.sort = category;
            this.order = false;
        };
    };  
};