/**
 * @ngdoc filter
 * @name <%= scriptAppName %>.filter:<%= scriptClassName %>
 * @function
 * @description
 * # <%= scriptClassName %>
 * Filter in the <%= scriptAppName %>.
 */
angular.module('<%= scriptAppName %>')
    .filter('<%= scriptClassName %>', () => {
        return (input) => {
            return '<%= scriptClassName %> filter: ' + input;
        };
    });
