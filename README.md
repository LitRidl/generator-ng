# generator-ng

```
yo ng:[subtask] --help
```

**These are the options available**

  * --dest: Set a destination where to save the file
  * --component: Set the destination to be under the component library
  * --bundle: Create the task's file under a specific bundle instead of the file name
  * --service-value: Set value for the value / constant service [value, constant]
  
### Controllers

* To Create a controller 

  ```
  yo ng:controller user
  ```
  
  Produces 
> src/app/user/user-controller.js

* Creating a controller under the components library

  ```
  yo ng:controller navbar --component
  ```
  
  Produces 
>src/app/components/navbar/navbar-controller.js


* Creating a controller under user specific library 

  ```
  yo ng:controller user --dest=specific/location
  ``` 
  
  Produces 
>src/specific/location/user-controller.js
  
* Creating a user details controller under the user bundle 

  ```
  yo ng:controller user-details --bundle=user
  ``` 
  
  Produces 
>src/app/user/user-details-controller.js


### Directives

* To Create a Directive 

  ```
  yo ng:directive user
  ```
  
  Produces 
> src/app/user/user-directive.js

* Creating a directive under the components library

  ```
  yo ng:directive navbar --component
  ```
  
  Produces 
>src/app/components/navbar/navbar-directive.js

* Creating a directive under user specific library 

  ```
  yo ng:directive user --dest="specific/location"
  ``` 
  
  Produces 
>src/specific/location/user-directive.js

* Creating a user-details directive under the user bundle 

  ```
  yo ng:directive user-details --bundle=user
  ``` 
  
  Produces 
>src/app/user/user-details-directive.js

### Factories, Services and Provides

These sub tasks works exactly like the controllers and directives sub tasks.
Please take a look at their examples to understand how to use their options.

* Creating a Factory 

  ```
  yo ng:factory user-details
  ``` 
  
  Produces 
>src/app/user-details/user-details-factory.js

* Creating a Service 

  ```
  yo ng:service user-details
  ``` 
  
  Produces 
>src/app/user-details/user-details-service.js

* Creating a Provider 

  ```
  yo ng:provider user-details
  ``` 
  
  Produces 
>src/app/user-details/user-details-provider.js

### Values, Constants

* Creating a Value 

  ```
  yo ng:value user-id --bundle=user
  ``` 
  
  Produces 
>src/app/user/user-id-value.js

* Creating a Constant with value from the cmd

  ```
  yo ng:constant user-id --bundle=user --service-value=4343434
  ``` 
  
  Produces 
>src/app/user/user-id-constant.js with value of 4343434

### Filters

These subtask works exactly like the controllers and directives subtasks.
Please take a look at them.

* Creating a filter

  ```
  yo ng:filter myFilter
  ``` 
  
  Produces 
>src/app/user/myFilter-filter.js

### Styles

* Creating an empty sass file 
  
  ```
  yo ng:style user
  ```
  
  Produces 
>src/app/user/user.sass

### Partials

* Creating a partial 
  
  ```
  yo ng:partial user
  ```
  
  Produces 
>src/app/user/partials/user.html
