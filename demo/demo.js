function genericRouteController (breadcrumbTitle) {
    return function (rxBreadcrumbsSvc) {
        rxBreadcrumbsSvc.set([{
            name: breadcrumbTitle || ''
        }]);
    }
}

angular.module('demoApp', ['encore.ui', 'ngRoute'])
.controller('componentCtrl', function ($scope, rxBreadcrumbsSvc, $routeParams, component) {
    rxBreadcrumbsSvc.set([{
            path: '/#/components',
            name: 'Components'
        }, {
            name: component.name
        }]);

    $scope.component = component;
})
.controller('styleguideCtrl', function (rxBreadcrumbsSvc) {
    rxBreadcrumbsSvc.set();
})
.config(function ($routeProvider, rxStatusTagsProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/overview'
        })
        .when('/login', {
            templateUrl: 'login.html',
            controller: genericRouteController()
        })
        .when('/overview', {
            templateUrl: 'overview.html',
            controller: genericRouteController('Overview')
        })
        .when('/components', {
            templateUrl: 'components.html',
            controller: 'componentsController as vm'
        })
        .when('/styleguide/basics', {
            templateUrl: 'styleguide/basics.html',
            controller: 'styleguideCtrl'
        })
        .when('/styleguide/layouts', {
            templateUrl: 'styleguide/layouts.html',
            controller: genericRouteController()
        })
        .when('/styleguide/layouts/1', {
            templateUrl: 'styleguide/layout-1.html',
            controller: genericRouteController()
        })
        .when('/styleguide/layouts/2', {
            templateUrl: 'styleguide/layout-2.html',
            controller: genericRouteController()
        })
        .when('/styleguide/layouts/3', {
            templateUrl: 'styleguide/layout-3.html',
            controller: genericRouteController()
        })
        .when('/styleguide/buttons', {
            templateUrl: 'styleguide/buttons.html',
            controller: genericRouteController()
        })
        .when('/styleguide/tables', {
            templateUrl: 'styleguide/tables.html',
            controller: genericRouteController()
        })
        .when('/styleguide/forms', {
            templateUrl: 'styleguide/forms.html',
            controller: genericRouteController()
        })
        .when('/styleguide/modals', {
            templateUrl: 'styleguide/modals.html',
            controller: genericRouteController()
        })
        .when('/component/:component', {
            redirectTo: function (routeParams) {
                return '/components/' + routeParams.component;
            }
        })
        .when('/components/:component', {
            controller: 'componentCtrl',
            templateUrl: 'component-template.html',
            resolve: {
                'component': function ($route, components) {
                    return _.find(components, {
                        'name': $route.current.params.component
                    });
                }
            }
        })
        .when('/guides/:guide', {
            controller: 'guideController as vm',
            templateUrl: 'guides/guideViewer.html'
        });

    // Define a custom status tag for use in the rxBreadcrumbs demo
    rxStatusTagsProvider.addStatus({
        key: 'demo',
        class: 'alpha-status',
        text: 'Demo Tag'
    });
})
.run(function ($rootScope, $window, $location, $anchorScroll, Environment, rxBreadcrumbsSvc, rxPageTitle) {
    var baseGithubUrl = '//rackerlabs.github.io/encore-ui/';
    Environment.add({
        name: 'ghPages',
        pattern: '//rackerlabs.github.io',
        url: baseGithubUrl + '{{path}}'
    });

    if (Environment.envCheck('ghPages')) {
        rxBreadcrumbsSvc.setHome(baseGithubUrl);
    }

    var demoNav = [
        {
            type: 'highlight',
            title: 'EncoreUI',
            children: [
                {
                    href: '#/overview',
                    linkText: 'Overview'
                },
                {
                    href: 'ngdocs/index.html',
                    linkText: 'JS Docs'
                },
                {
                    href: 'rx-page-objects/index.html',
                    linkText: 'Test Docs'
                },
                {
                    linkText: 'Other Links',
                    children: [
                        {
                            linkText: 'GitHub Repos',
                            children: [
                                {
                                    href: 'https://github.com/rackerlabs/encore-ui',
                                    linkText: 'EncoreUI'
                                },
                                {
                                    href: 'https://github.com/rackerlabs/generator-encore',
                                    linkText: 'Yeoman Generator (Private Repo)'
                                },
                                {
                                    href: 'https://github.com/rackerlabs/encore-ui-login',
                                    linkText: 'Common Login (Private Repo)'
                                }
                            ]
                        },
                        {
                            href: 'coverage/index.html',
                            linkText: 'Unit Test Coverage'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Design Styleguide',
            children: [
                {
                    href: '#/styleguide/basics',
                    linkText: 'Basics',
                    children: [
                        {
                            href: '#/styleguide/basics#color',
                            linkText: 'Color'
                        },
                        {
                            href: '#/styleguide/basics#typography',
                            linkText: 'Typography'
                        },
                        {
                            href: '#/styleguide/basics#flexbox-grid',
                            linkText: 'Flexbox Grid'
                        },
                        {
                            href: '#/styleguide/basics#heading-title-styles',
                            linkText: 'Header & Title Styles'
                        },
                        {
                            href: '#/styleguide/basics#date-formatting',
                            linkText: 'Date Formatting'
                        },
                        {
                            href: '#/styleguide/basics#descriptions-metadata',
                            linkText: 'Descriptions & Metadata'
                        },
                        {
                            href: '#/styleguide/basics#no-data',
                            linkText: 'No Data to Display'
                        },
                        {
                            href: '#/styleguide/basics#lists',
                            linkText: 'Lists'
                        },
                        {
                            href: '#/styleguide/basics#collapsible',
                            linkText: 'Collapsible Element'
                        },
                        {
                            href: '#/styleguide/basics#wells',
                            linkText: 'Wells'
                        },
                        {
                            href: '#/styleguide/basics#helper-classes',
                            linkText: 'Helper classes'
                        },
                        {
                            href: '#/styleguide/basics#progress-bars',
                            linkText: 'Progress bars'
                        }
                    ]
                },
                {
                    href: '#/styleguide/layouts',
                    linkText: 'Layouts',
                    children: [
                        {
                            href: '#/styleguide/layouts',
                            linkText: 'Grids'
                        },
                        {
                            href: '#/styleguide/layouts',
                            linkText: 'Sample Layouts',
                            children: [
                                {
                                    href: '#/styleguide/layouts/1',
                                    linkText: 'Layout 1: Detail Page'
                                },
                                {
                                    href: '#/styleguide/layouts/2',
                                    linkText: 'Layout 2: Data Table'
                                },
                                {
                                    href: '#/styleguide/layouts/3',
                                    linkText: 'Layout 3: Create Form'
                                }
                            ]
                        }
                    ]
                },
                {
                    href: '#/styleguide/buttons',
                    linkText: 'Buttons & Links',
                    children: [
                        {
                            href: '#/styleguide/buttons',
                            linkText: 'Customizing Buttons'
                        },
                        {
                            href: '#/styleguide/buttons#colors',
                            linkText: 'Using Colors and Icons'
                        }
                    ]
                },
                {
                    href: '#/styleguide/tables',
                    linkText: 'Tables',
                    children: [
                        {
                            href: '#/styleguide/tables',
                            linkText: 'Basics'
                        },
                        {
                            href: '#/styleguide/tables#directives',
                            linkText: 'Directives'
                        },
                        {
                            href: '#/styleguide/tables#designpatterns',
                            linkText: 'Design Patterns'
                        },
                        {
                            href: '#/styleguide/tables#roadmap',
                            linkText: 'UI Roadmap / Possible Future-work'
                        }
                    ]
                },
                {
                    href: '#/styleguide/forms',
                    linkText: 'Forms',
                    children: [
                        {
                            href: '#/styleguide/forms',
                            linkText: 'Directives'
                        },
                        {
                            href: '#/styleguide/forms#designpatterns',
                            linkText: 'Design Patterns within Encore'
                        },
                        {
                            href: '#/styleguide/forms#roadmap',
                            linkText: 'UI Roadmap / Possible Future-work'
                        }
                    ]
                },
                {
                    href: '#/styleguide/modals',
                    linkText: 'Modals',
                    children: [
                        {
                            href: '#/styleguide/modals',
                            linkText: 'Basic Usage'
                        },
                        {
                            href: '#/styleguide/modals#designpatterns',
                            linkText: 'Design Best Practices'
                        },
                        {
                            href: '#/styleguide/modals#roadmap',
                            linkText: 'UI Roadmap / Possible Future-work'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Components',
            children: [
                {
                    href: '#/components',
                    linkText: 'All Components'
                }
            ]
        }
    ];

    $rootScope.demoNav = demoNav;

    rxPageTitle.setSuffix(' - EncoreUI');

    $rootScope.$on('$routeChangeSuccess', function() {
        if ($location.hash()) {
            $anchorScroll();
        } else {
            $window.scrollTo(0,0);
        }
    });
})
.directive('rxPrism', function ($timeout, $http) {
    return {
        restrict: 'E',
        template: '<pre><code class="language-{{language}}" ng-transclude></code></pre>',
        scope: {
            language: '@',
            codeUrl: '@',

        },
        transclude: true,
        link: function (scope, el) {
            // delay execution of Prism until ng bindings have completed
            $timeout(function () {
                var code = el.find('code')[0];
                if (scope.codeUrl) {
                    $http.get(scope.codeUrl).then(function (result) {
                        code.textContent = result.data;
                        Prism.highlightElement(code);
                    });
                } else {
                    Prism.highlightElement(code);
                }
            }, 0);
        }
    };
})

.directive('alwaysInvalid', function () {
    return {
        require: 'ngModel',
        link: function (scope, el, attrs, ctrl) {
            ctrl.$setValidity('alwaysInvalid', false);
        }
    };
})

// Used for drawing the Demo and Markup tabs in the styleguide
.directive('rxStyleguide', function () {
    return {
        restrict: 'E',
        templateUrl: 'styleguide/rx-styleguide.html',
        scope: {
            codeUrl: '@'
        }
    };
})

// Used by the Tables styleguide page to show pagination
.controller('tablePaginateExampleController', function ($scope, PageTracking) {
    $scope.pager = PageTracking.createInstance();
    $scope.people = [
        { name: 'Patrick Deuley', occupation: 'Design Chaplain' },
        { name: 'Hussam Dawood', occupation: 'Cat Lover' }
    ];
})

// Used by the Tables styleguide page to show nested content
.controller('tableNestedExampleCtrl', function ($scope) {
    $scope.people = [
        { name: 'Patrick Deuley', occupation: 'Design Chaplain', pets: [
            { name: 'Shelly', animal: 'Turtle', age: 1 },
            { name: 'Spike', animal: 'Porcupine', age: 10 }
        ] },
        { name: 'Hussam Dawood', occupation: 'Cat Lover', pets: [
            { name: 'Sassy', animal: 'Cat', age: 6 }
        ] }
    ];
})

// Used by the Tables styleguid page to show table with filtering capabilities
.controller('tableWithFilteringCtrl', function ($scope, PageTracking) {
    $scope.people = [
        { name: 'Patrick Deuley', occupation: 'Design Chaplain' },
        { name: 'Hussam Dawood', occupation: 'Cat Lover' },
        { name: 'Kevin Lamping', occupation: 'Framework Father' },
        { name: 'Glynnis Ritchie', occupation: 'Serif Sheriff' },
        { name: 'Freddy Knuth', occupation: 'Venezuelan Hurricane' },
        { name: 'Chris Cantu', occupation: 'Texan Tornado' },
    ];
})

// Used by the Layout 2 styleguide page to show pagination
.controller('layout2StyleguideCtrl', function ($scope, PageTracking) {
    $scope.pager = PageTracking.createInstance();
    $scope.people = [
        { name: 'Patrick Deuley', occupation: 'Design Chaplain', number: 1, status: 'ACTIVE' },
        { name: 'Hussam Dawood', occupation: 'Cat Lover', number: 2, status: 'DISABLED' },
        { name: 'Kevin Lamping', occupation: 'Framework Father', number: 3, status: 'ERROR' },
        { name: 'Glynnis Ritchie', occupation: 'Serif Sheriff', number: 4, status: 'INFO' },
        { name: 'Freddy Knuth', occupation: 'Venezuelan Hurricane', number: 5, status: 'WARNING' },
        { name: 'Chris Cantu', occupation: 'Texan Tornado', number: 6, status: 'PENDING' },
    ];
})

// Used by the Customizing Buttons styleguide page
.controller('customButtonsStyleguideCtrl', function ($scope, $timeout) {
    $scope.status = {
        loading: false,
        disable: false
    };

    $scope.clickMe = function () {
        $scope.status.loading = true;
        $timeout(function () {
            $scope.status.loading = false;
        }, 4000);
    };
})
.controller('commentBoxStyleguideCtrl', function ($scope) {
    $scope.comment = '';
})

// Used by the Filters styleguide page to show a collapsible region
.controller('collapseFilterExampleCtrl', function ($scope) {
    $scope.filter = { region: '' };

    $scope.regions = [
        { name: 'DFW', city: 'Dallas-Fort Worth' }, { name: 'ORD', city: 'Chicago' },
        { name: 'IAD', city: 'Northern Virginia' }, { name: 'LON', city: 'London' },
        { name: 'HKG', city: 'Hong Kong' }, { name: 'SYD', city: 'Sydney' }
    ];

    $scope.servers = [
        { name: 'General1-1', ram: '1 GB', cpu: 1, disk: '20GB SSD', region: 'DFW'},
        { name: 'General1-2', ram: '2 GB', cpu: 2, disk: '40GB SSD', region: 'ORD'},
        { name: 'General1-4', ram: '4 GB', cpu: 4, disk: '80GB SSD', region: 'IAD'},
        { name: 'General1-8', ram: '8 GB', cpu: 8, disk: '160GB SSD', region: 'LON'},
        { name: 'I/O1-15', ram: '15 GB', cpu: 4, disk: '40GB SSD', region: 'HKG'},
        { name: 'I/O1-30', ram: '30 GB', cpu: 8, disk: '40GB SSD', region: 'SYD'}
    ];
})

.controller('formsDisabledExamplesCtrl', function ($scope) {
    // intentionally left blank
    $scope.txtDisabled = 'Disabled Text Input';
    $scope.selDisabled = 'disabled';
    $scope.radDisabled = 1;
    $scope.chkDisabledOne = true;
    $scope.chkDisabledTwo = false;
    $scope.togDisabledOn = true;
    $scope.togDisabledOff = false;
    $scope.txtAreaDisabled = 'Disabled Textarea';
})

.controller('formsInvalidExamplesCtrl', function ($scope) {
    // intentionally left blank
    $scope.txtInvalid = 'Invalid text input';
    $scope.selInvalid = 'invalid';
    $scope.radInvalid = 1;
    $scope.chkInvalidOne = true;
    $scope.chkInvalidTwo = false;
    $scope.togInvalidOn = true;
    $scope.togInvalidOff = false;
    $scope.txtAreaInvalid = 'Invalid Value';
})

.controller('formsAutoSaveExampleController', function ($scope, rxAutoSave) {
    $scope.forms = { autosave: '' };
    rxAutoSave($scope, 'forms');
});
