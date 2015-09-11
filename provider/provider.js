/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= scriptClassName %>
 * @description
 * # <%= scriptClassName %>
 * Provider in the <%= scriptAppName %>.
 */
angular.module('<%= scriptAppName %>')
    .provider('<%= scriptClassName %>', () => {
        // Private variables
        const salutation = 'Hello';

        // Private constructor
        function Greeter() {
            this.greet = () => {
                return salutation;
            };
        }

        // Public API for configuration
        this.setSalutation = (s) => {
            salutation = s;
        };

        // Method for instantiating
        this.$get = () => {
            return new Greeter();
        };
    });
