auth.$inject = ['$rootScope', 'userService', 'ngDialog', '$state'];

export default function auth($rootScope, userService, ngDialog, $state) {
    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {

        console.log('$scs', toState, toParams, fromState, fromParams);

        if(!(toState.data && toState.data.public) && !userService.isAuthenticated()) {
            event.preventDefault();

            const dialog = ngDialog.open({
                template: '<user-auth success="success></user-auth>',
                plain: true,
                controller: ['$scope', $scope => {
                    $scope.success = () => {
                        dialog.close();
                        // TODO: figure out what params are being passed
                        return $state.go(toState.name, toParams);
                    };
                }]
            });
        };
    });
};