angular.module('demoApp')
.controller('optionTableDemoCtrl', function ($scope) {
    /* ========== DATA ========== */
    $scope.volumeTypes = [
        {
            'value': 'SATA',
            'label': 'SATA'
        },
        {
            'value': 'SSD',
            'label': 'SSD'
        },
        {
            'value': 'CD',
            'label': 'CD'
        },
        {
            'value': 'DVD',
            'label': 'DVD'
        },
        {
            'value': 'BLURAY',
            'label': 'BLURAY'
        },
        {
            'value': 'TAPE',
            'label': 'TAPE'
        },
        {
            'value': 'FLOPPY',
            'label': 'FLOPPY'
        },
        {
            'value': 'LASERDISC',
            'label': 'LASERDISC'
        },
        {
            'value': 'JAZDRIVE',
            'label': 'JAZDRIVE'
        },
        {
            'value': 'PUNCHCARDS',
            'label': 'PUNCHCARDS'
        },
        {
            'value': 'RNA',
            'label': 'RNA'
        }
    ];

    $scope.optionTableData = [
        {
            'id': 'option1_id',
            'name': 'Option #1',
            'value': 0,
            'obj': {
                'name': 'Nested Name 1'
            }
        }, {
            'id': 'option2_id',
            'name': 'Option #2',
            'value': 1,
            'obj': {
                'name': 'Nested Name 2'
            }
        }, {
            'id': 'option3_id',
            'name': 'Option #3',
            'value': 2,
            'obj': {
                'name': 'Nested Name 3'
            }
        }, {
            'id': 'option4_id',
            'name': 'Option #4',
            'value': 3,
            'obj': {
                'name': 'Nested Name 4'
            }
        }
    ];

    $scope.optionTableColumns = [
        {
            'label': 'Name',
            'key': 'name',
            'selectedLabel': '(Already saved data)'
        }, {
            'label': 'Static Content',
            'key': 'Some <strong>Text &</strong> HTML'
        }, {
            'label': 'Expression 2',
            'key': '{{ value * 100 | number:2 }}'
        }, {
            'label': 'Expression 3',
            'key': '{{ obj.name | uppercase }}'
        }, {
            'label': 'Expression 4',
            'key': '{{ value | currency }}'
        }
    ];

    $scope.optionTableCheckboxData = [
        {
            'name': 'Item 1'
        }, {
            'name': 'Item 2',
            'value': 'checked',
            'falseValue': 'unchecked'
        }
    ];

    $scope.optionTableEmptyData = [];

    /* ========== FUNCTIONS ========== */
    $scope.disableOption = function (tableId, fieldId, rowId) {
        return rowId === 'option4_id';
    };

    $scope.intermediate = {
        volumeType: _.first($scope.volumeTypes).value, // select the first type by default
        services: [],
        favoriteBeatle: 'all',
        settings: {
            first: true,
            second: false,
            third: true,
            fourth: false
        },
        table: {
            radio: 0,
            checkbox: [true, 'unchecked'], // example with first checkbox automatically checked
            empty: [true, 'unchecked']
        }
    };
});
