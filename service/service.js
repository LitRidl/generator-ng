/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= scriptClassName %>
 * @description
 * # <%= scriptClassName %>
 * Service in the <%= scriptAppName %>.
 */
angular.module('<%= scriptAppName %>')
    .service('<%= scriptClassName %>Service', () => {
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.awesomeThings = [
            'HTML5',
            'AngularJS',
            'Karma',
        ];
    });
