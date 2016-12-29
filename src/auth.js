auth.$inject = ['$rootScope', 'userService', 'ngDialog', '$state'];

export default function auth($rootScope, userService, ngDialog, $state) {
    $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {

        // console.log('$scs', toState, toParams, fromState, fromParams);

        if(!(toState.data && toState.data.public) && !userService.isAuthenticated()) {
            event.preventDefault();

            const dialog = ngDialog.open({
                template: '<user-auth success="success"></user-auth>',
                plain: true,
                controller: ['$scope', $scope => {
                    $scope.success = () => {
                        dialog.close();
                        return $state.go(toState.name, toParams);
                    };
                }]
            });
        };
    });
};