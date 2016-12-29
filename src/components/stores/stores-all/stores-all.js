import template from './stores-all.html';
import styles from './stores-all.scss';

export default {
    template,
    require: {
        parent: '^stores'
    },
    bindings: {
        stores: '<',
        del: '<'
    },
    controller
};

controller.$inject = ['storeService','$state'];

function controller(Store, $state) {
    this.styles = styles;
    this.sort = '';
    this.order = true;

    this.toNewForm = () => {
        $state.go('stores.add');
    };

    this.go = store => {
        $state.go('stores.store', { id: store._id });
    };

    this.set = () => {
        this.sort = 'name';
        this.order = !this.order;
    };
};