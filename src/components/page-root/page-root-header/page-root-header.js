import template from './page-root-header.html';
import styles from './page-root-header.scss';

export default {
    template,
    transclude: {
        links: '?headerLinks'
    },
    controller
};

controller.$inject = ['userService'];

function controller(userService) {
    this.styles = styles;
    this.logout = () => userService.logout();
    this.isAuthenticated = () => userService.isAuthenticated();
};