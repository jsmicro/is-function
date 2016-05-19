# JSMicro - Is Function

### **`isFunction(object)`**

Check does the given Javascript Object (array, object, string, etc) is a function.

### **`isNotFunction(object)`**

Check does the given Javascript Function (array, object, string, etc) is not a function.

## Browser Usage

```bash
bower install --save jsmicro-is-function
```

```html
<script type="text/javascript" src="bower_components/jsmicro-is-function/index.js">
<script type="text/javascript">
    var obj = function() {};
    var nbr = 200;

    // Available in the window object.
    isFunction(obj);      // true
    isFunction(nbr);      // false
    isNotFunction(nbr);   // true
</script>
```

## NodeJS Usage

```bash
npm install --save jsmicro-is-function
```

```js
const obj = require('jsmicro-is-function');

// Available in the global object.
isFunction(function() {}); // true
isFunction(23322333); // false
isNotFunction(23234); // true

// Also available in the export object.
obj.isFunction(function() {}); // true
obj.isFunction(23322333); // false
obj.isNotFunction(23333); // true
```

## Changelogs

#### **`v1.0.0 - May 19, 2016`**

* Initial release.

### [The MIT License (MIT)](https://mahdaen.mit-license.org/)
