/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= scriptClassName %>
 * @description
 * # <%= scriptClassName %>
 * Factory in the <%= scriptAppName %>.
 */
angular.module('<%= scriptAppName %>')
    .factory('<%= scriptClassName %>Factory', () => {
        // Service logic
        // ...
        const meaningOfLife = 42;

        // Public API here
        return {
            someMethod: () => {
                return meaningOfLife;
            },
        };
    });
