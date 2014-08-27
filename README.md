underscore-mixins
=================

An in progress collection of Underscore.js mixins

## Array functions ##

**chunkize** _.chunkize(array, chunkSize)

Splits an array into custom-sized chunks without affecting the source array

```javascript
_.chunkize([1,2,3,4,5], 2)
=> [[1,2], [3,4], [5]]
```

## String functions ##

**matchesWildcard** _.matchesWildcard(testString, wildcardPattern)

Returns true if testString matches the wildcard pattern 

```javascript
_.matchesWildcard('http://www.google.com/something', '*.google.com/*')
=> true
```


