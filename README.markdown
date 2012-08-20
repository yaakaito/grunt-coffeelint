## grunt coffee lint taks

a grunt task of [CoffeeLint](http://www.coffeelint.org/)

### Overview

```
$ grunt coffee lint
Running "coffeelint:all" (coffeelint) task
[ 'coffee/*.coffee' ]

  ✓ coffee/a.coffee
  ✓ coffee/b.coffee

  ✓ Ok! » 0 errors and 0 warnings in 2 files


Done, without errors.
```

### Usage

**! this grunt-task not managed [npm](https://npmjs.org/)**

#### install coffeelint

```
$ npm install -g coffeelint
```

#### coffeelint-task additional your grunt.js

clone this repository:
```
$ git clone git://github.com/yaakaito/grunt-coffeelint.git grunt-coffeelint
```

copy `coffeelint.js`:
```
cd grunt-coffeelint
cp -rf tasks your/grunt/dir
```

load task and setup config:
```javascript
grunt.loadTasks('tasks');
grunt.initConfig({
  // ...
  coffeelint : {
    all : { 
      files : [
        'coffee/*.coffee'
      ]
    }
  }
});
```

run `grunt coffeelint`
```
grunt coffeelint:allc
```

### LICENSE
MIT License

Happy Linting!

