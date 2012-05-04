/**
 Copyright (C) 2009-2011. ViniSketch SARL - David Thevenin

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 *  @private
 */
var _toString = Object.prototype.toString;
/** @const */ Object.NULL_TYPE = 'Null';
/** @const */ Object.UNDEFINED_TYPE = 'Undefined';
/** @const */ Object.BOOLEAN_TYPE = 'Boolean';
/** @const */ Object.NUMBER_TYPE = 'Number';
/** @const */ Object.STRING_TYPE = 'String';
/** @const */ Object.OBJECT_TYPE = 'Object';
/** @const */ Object.BOOLEAN_CLASS = '[object Boolean]';
/** @const */ Object.NUMBER_CLASS = '[object Number]';
/** @const */ Object.STRING_CLASS = '[object String]';
/** @const */ Object.ARRAY_CLASS = '[object Array]';
/** @const */ Object.OBJECT_CLASS = '[object Object]';

/**
 *  @private
 */
function _isElement (object)
{
  return !!(object && object.nodeType == 1);
};

/**
 * Returns true if obj is a BML Element, false otherwise.
 *
 * @name isElement
 * @function
 * @memberOf Object.prototype
 *
 * @return {Boolean}
 */
Object.isElement = _isElement;

Array.prototype.__toString__ = _toString;
function _isArray (object)
{
  if (!object) { return false; }
  if (!object.__toString__)
  { 
    object.__toString__ = _toString;
  }
  return object.__toString__ ()  == Object.ARRAY_CLASS;
};

/**
 * Returns true if obj is an array, false otherwise.
 *
 * @name isArray
 * @function
 * @memberOf Object.prototype
 *
 * @return {Boolean}
 */
Object.isArray = _isArray;

function _isFunction (object)
{
  return typeof object == "function";
};

/**
 * Returns true if obj is a function, false otherwise.
 *
 * @name isFunction
 * @function
 * @memberOf Object.prototype
 *
 * @return {Boolean}
 */
Object.isFunction = _isFunction;

String.prototype.__toString__ = _toString;
function _isString (object)
{
  var type = typeof object;
  if (type == "undefined") { return false; }
  if (type == "null") { return false; }
  if (type == "object") { return false; }
  if (!object.__toString__)
  { 
    object.__toString__ = _toString;
  }
  return object.__toString__ () == Object.STRING_CLASS;
};

/**
 * Returns true if obj is a String, false otherwise.
 *
 * @name isString
 * @function
 * @memberOf Object.prototype
 *
 * @return {Boolean}
 */
Object.isString = _isString;

Number.prototype.__toString__ = _toString;
function _isNumber (object)
{
  var type = typeof object;
  if (type == "undefined") { return false; }
  if (type == "null") { return false; }
  if (type == "object") { return false; }
  if (!object.__toString__)
  { 
    object.__toString__ = _toString;
  }
  return object.__toString__ () == Object.NUMBER_CLASS;
};

/**
 * Returns true if obj is a Number, false otherwise.
 *
 * @name isNumber
 * @function
 * @memberOf Object.prototype
 *
 * @return {Boolean}
 */
Object.isNumber = _isNumber;

function _isUndefined (object)
{
  return typeof object == "undefined";
};

/**
 * Returns true if obj is undefined, false otherwise.
 *
 * @name isUndefined
 * @function
 * @memberOf Object.prototype
 *
 * @return {Boolean}
 */
Object.isUndefined = _isUndefined;

function _camelize ()
{
  var parts = this.split('-'), len = parts.length;
  if (len == 1) { return parts[0]; }

  var camelized = this.charAt(0) == '-'
    ? parts[0].charAt(0).toUpperCase() + parts[0].substring(1)
    : parts[0];

  for (var i = 1; i < len; i++)
    camelized += parts[i].charAt(0).toUpperCase() + parts[i].substring(1);

  return camelized;
}
/**
 * Converts a string separated by dashes into a camelCase equivalent.
 * For instance, 'foo-bar' would be converted to 'fooBar'.
 *
 * @name camelize
 * @function
 * @memberOf String.prototype
 *
 *  @example
 *  background-color'.camelize();
 *  // -> 'backgroundColor'
 *  
 *  '-moz-binding'.camelize();
 *  // -> 'MozBinding'
 * @return {String}
 */
String.prototype.camelize = _camelize;

function _underscore ()
{
  var underscored = "", len = this.length, code;
  
  for (var i = 0; i < len; i++)
  {
    code = this.charCodeAt (i);
    if (code > 64 && code < 91)
    {
      underscored += '_' + this.charAt (i).toLowerCase();
    }
    else
    {
      underscored += this.charAt (i);
    }
  }
  return underscored;
}

/**
 * Converts a camelized string into a series of words separated by an
 * underscore ("_").
 *
 * @name underscore
 * @function
 * @memberOf String.prototype
 *
 *  @example
 *  'borderBottomWidth'.underscore();
 *  // -> 'border_bottom_width'
 * @return {String}
 */
String.prototype.underscore = _underscore;

function _capitalize ()
{
  return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
}

/**
 * Capitalizes the first letter of a string and downcases all the others.
 *
 * @name capitalize
 * @function
 * @memberOf String.prototype
 *
 *  @example
 * 'hello'.capitalize();
 * // -> 'Hello'
 * 
 * 'HELLO WORLD!'.capitalize();
 * // -> 'Hello world!'
 *
 * @return {String}
 */
String.prototype.capitalize = _capitalize;

function __slice (obj, start, end)
{
  var l = obj.length, result = new Array (l);
  
  if (!end|| end > l) { end = l; }
  if (!start || start < 0 || start > l) { start = 0; }
  
  var j = 0;
  for (var i = start; i < end; i++)
  {
    result [j++] = obj [i];
  }
  return result;
};

function _slice (start, end)
{
  return __slice (this, start, end);
};

/**
 * Selects a part of an array, and returns the new array.
 *
 * @name slice
 * @function
 * @memberOf Array.prototype
 *
 *  @param {int} start An integer that specifies where to start the selection 
 *  (The first element has an index of 0). You can also use negative numbers to 
 *  select from the end of an array
 *  @param {int} end An integer that specifies where to end the selection. If 
 *  omitted, slice() selects all elements from the start position and to the end 
 *  of the array
 *  @returns the new array 
 */
if (!Array.prototype.slice) { Array.prototype.slice = _slice; }


/**
 * Removes the elements in the specified interval of this Array.<br/> 
 * Shifts any subsequent elements to the left (subtracts one from their 
 * indices).<br/>
 * This method extends the JavaScript Array prototype.
 * By John Resig (MIT Licensed)
 *
 *  @private
 *
 * @param {int} from Index of the first element to be removed
 * @param {int} to Index of the last element to be removed
 */
function __remove (from, to)
{
  var rest = this.slice ((to || from) + 1 || this.length);
  var len = from < 0 ? this.length + from : from;
  this.length = len;
  
  for (var i = 0; i < rest.length; i++)
  {
    this [len ++] = rest [i];
  }
  
  return this;
};
Array.prototype._remove = __remove;

function _indexOf (obj, from)
{
  var len = this.length;

  var from = from?from:0;
  from = (from < 0)? 0: from;

  while (from < len)
  {
    if (this [from] == obj) { return from; }
    from++;
  }
  return -1;
};

/**
 *  Find an element into this Array.
 *
* @name indexOf
 *  @function
 *  @memberOf Array.prototype
 *
 *
 * @param {Object} obj Element to locate in the array
 * @param {number} fromIndex The index at which to begin the search. 
 *    Defaults to 0, i.e. the whole array will be searched.
 *    If the index is greater than or equal to the length of the 
 *    array, -1 is returned
 * @return {int} the Index of the element. Return -1 if unfound.
 */
Array.prototype.indexOf = _indexOf;

/**
 * Removes the elements in the specified interval of this Array.<br/> 
 * Shifts any subsequent elements to the left (subtracts one from their indices).<br/>
 * This method extends the JavaScript Array prototype.
 *
 *  @private
 *
 * @param {int} from Index of the first element to be removed
 * @param {int} to Index of the last element to be removed
 * @return {Array} the modified array
 */
function _remove (from, to)
{
  if ((typeof(from) == "object") ||
      (typeof(from) == "string"))
  {
    var i = 0;
    while (i < this.length)
    {
      if (this[i] == from) { this._remove (i); }
      else { i++; }
    }
  }
  else { this._remove (from, to); }
  return this;
};
Array.prototype.remove = _remove;

/**
 * Removes all elements of this Array.<br/> 
 *
 *  @private
 *
 * @return {Array} the modified array
 */
function _removeAll ()
{
  while (this.length > 0) { this._remove (0); }
  return this;
};
Array.prototype.removeAll = _removeAll;

function _delete (obj)
{
  if (!obj) { return; }
  if (obj._free) { obj._free (); }
  if (obj.destructor) { obj.destructor (); }
  delete (obj);
  obj = null;
  return obj;
}
var free = _delete;

/**
*  Compute the elements position in terms of the window viewport
**/
function _toAbsolute (element)
{
  if (!element)
  { return null; }

	var x = 0;
  var y = 0;
  var parent = element;
  while (parent)
  {
     var borderXOffset = 0;
     var borderYOffset = 0;
     if (parent != element)
     {
        borderXOffset = parseInt (
          parent.currentStyle?
          parent.currentStyle ["borderLeftWidth"]:0, 0);
        borderYOffset = parseInt (
          parent.currentStyle?
          parent.currentStyle ["borderTopWidth"]:0, 0);
        borderXOffset = isNaN (borderXOffset) ? 0 : borderXOffset;
        borderYOffset = isNaN (borderYOffset) ? 0 : borderYOffset;
     }

     x += parent.offsetLeft - parent.scrollLeft + borderXOffset;
     y += parent.offsetTop - parent.scrollTop + borderYOffset;
     parent = parent.offsetParent;
  }
  var result = new Object ();
  result.x = x; result.y = y;
  return result;
}

/************************************************************
   Class Mechanism
************************************************************/

/**
 * @private
 */
function object_extend (obj, proto)
{
  for (var prop in proto)
  {
    obj [prop] = proto [prop];
  }
  return (obj);
}

/**
 * @private
 */
function object_extend_with_proto (obj, proto_name)
{
  if (!obj || !proto_name) { return; }
  var proto = __proto_list [proto_name];
  if (!proto)
  {
    printlnConsole ("Class.new: Unknown proto '" + proto_name + "'");
    return;
  }
  
  for (var prop in proto)
  {
    if (obj [prop]) { continue; }
    
    obj [prop] = proto [prop];
  }
  
  var sub_proto_name = __proto_hierarchy  [proto_name];
  if (sub_proto_name)
  {
    object_extend_with_proto (obj, sub_proto_name);
  }

  return (obj);
}

/**
 * @private
 */
var __proto_list = new Object ();
/**
 * @private
 */
var __proto_hierarchy = new Object ();

/**
 * @private
 */
function class_extend (class_dest_name, class_src_name)
{
  if (!class_dest_name || !class_src_name)
  {
    printlnConsole ("Class.extend: Invalid class name parameters");
    return;
  }
  var u_class_dest_name = class_dest_name.underscore ();
  var u_class_src_name = class_src_name.underscore ();
  var proto_dest = __proto_list [u_class_dest_name];
  var proto_src = __proto_list [u_class_src_name];
  var member, prop;

  if (!proto_dest)
  {
    printlnConsole ("Class.extend: Unknown class '" + class_dest_name + "'");
    return;
  }
  if (!proto_src)
  {
    printlnConsole ("Class.extend: Unknown class '" + class_src_name + "'");
    return;
  }
  __proto_hierarchy  [u_class_dest_name] = u_class_src_name;
  proto_dest.__proto__ = proto_src;
//   var u_class_sub_name = __proto_hierarchy [u_class_src_name];
//   
//   for (prop in proto_src)
//   {
//     member = proto_src [prop];
//     if (!proto_dest [prop])
//     {
//       proto_dest [prop] = member;
//     }
//     if (Object.isFunction (member))
//     {
//       if (u_class_sub_name && prop.indexOf (u_class_sub_name) == 0)
//       {
//         continue;
//       }
//       /* manage polymorphisme */
//       fct_name = u_class_src_name + '_' + prop;
//       proto_dest [fct_name] = member;
// //      printlnConsole (class_dest_name + ' __ ' + fct_name);
//     }
//   }
}

function __apply__ (obj, method, args)
{
  if (!obj)
  {
    printlnConsole (" __apply__ Object null");
    return;
  }
  if (!method || !Object.isFunction (obj [method]))
  {
    printlnConsole (" __apply__ unknown method '" + method + "'");
    return;
  }

  if (!args || args.length == 0)
    return obj [method] ();
  else if (args.length == 1)
    return obj [method] (args[0]);
  else if (args.length == 2)
    return obj [method] (args[0], args[1]);
  else if (args.length == 3)
    return obj [method] (args[0], args[1], args[2]);
  else if (args.length == 4)
    return obj [method] (args[0], args[1], args[2], args[3]);
  else if (args.length == 5)
    return obj [method] (args[0], args[1], args[2], args[3], args[4]);
  else if (args.length == 6)
    return obj [method] (args[0], args[1], args[2], args[3], args[4], args[5]);
  else if (args.length == 7)
    return obj [method] (args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
  else
  {
    printlnConsole (" __apply__ Too much parameters...");
  }
}

function class_apply ()
{
  var args = arguments;
  var class_name = args [0];
  var method = args [1];

  if (!class_name || !Object.isString (class_name) ||
      !method || !Object.isString (method))
  {
    printlnConsole ("Class.apply : bad parameters.");
    return;
  }

  if (args.length > 2)
  {
    args = __slice (args, 2);
  }
  else
  {
    args = null;
  }
  var proto_name = class_name.underscore ();
  var proto = __proto_list [proto_name];
  if (!proto)
  {
    printlnConsole ("Class.apply : unknown prototype for class '" + class_name + "'");
    return;
  }
  
  while (proto)
  {
    if (Object.isFunction (proto [method]))
    {
      this.__function_to_call__ = proto [method];
      var result = __apply__ (this, '__function_to_call__', args);
      delete this.__function_to_call__;
      return result;
    }
    proto = proto.__proto__;
  }

  printlnConsole ("Class.super : unknown function '" + method + "'");
}

function class_new ()
{
  var args = arguments;
  var class_name = args [0];
  var proto_name = class_name.underscore ();
  var proto = __proto_list [proto_name];
  if (!proto)
  {
    printlnConsole ("Impossible to instanciate with unknown prototype '" + proto_name + "'");
    return;
  }
  
  var obj = new Object ();
  object_extend_with_proto (obj, proto_name);
  obj.apply = class_apply;
  obj.__proto__ = proto;
  
  if (obj._constructor)
  {
    if (args.length == 1)
      obj._constructor ();
    else if (args.length == 2)
      obj._constructor (args[1]);
    else if (args.length == 3)
      obj._constructor (args[1], args[2]);
    else if (args.length == 4)
      obj._constructor (args[1], args[2], args[3]);
    else if (args.length == 5)
      obj._constructor (args[1], args[2], args[3], args[4]);
    else if (args.length == 6)
      obj._constructor (args[1], args[2], args[3], args[4], args[5]);
    else if (args.length == 7)
      obj._constructor (args[1], args[2], args[3], args[4], args[5], args[6]);
  }
  return obj
}

function class_create (class_name, proto)
{
  var proto_name = class_name.underscore ();
  __proto_list [proto_name] = proto;
  proto.__name__ = proto_name;
  
  return new Object ();
}

function class_add_method (class_name, method_name, func)
{
  var u_class_name = class_name.underscore ();
  var proto = __proto_list [u_class_name];
  if (!proto)
  {
    printlnConsole ("Impossible to add method to unknown class '" + class_name + "'");
    return;
  }
  proto [method_name] = func;
}

/** 
 *  The class namespace.
 *  @namespace Class
 *  <br />
 *  It provides a set of fonctionalities to create, extends and instanciate
 *  classes.
 *
 */ 
var Class = new Object ();

/** 
 *  Extend a class with a other.
 *  <br/>
 *  You use this method to make hierarchical classes.
 *
 *  @example
 *  // MyClassA definition
 *  var class_proto_a = new Object ();
 *  ...
 *  var MyClassA = Class.create ("MyClassA", class_proto_a);
 *  // MyClassB definition
 *  var class_proto_b = new Object ();
 *  ...
 *  var MyClassB = Class.create ("MyClassB", class_proto_b);
 *  // now the MyClassB will extend the class MyClassA
 *  Class.extend ('MyClassB', 'MyClassA');
 *
 *  @name extend
 *  @function
 *  @memberOf Class
 *
 *  @param {String} nameA the name of the class to extend
 *  @param {String} nameB the name of the class use for the extension
 */ 
Class.extend = class_extend;

/** 
 *  Create a new class with a given prototype.
 *  <br/>
 *  A prototype is a object that contains a set of member and method
 *  which defines the class interface (API).
 *
 *  @example
 *  var class_proto = new Object ();
 *  function construtor () { ... }
 *  function method1 () { ... }
 *  class_proto._constructor = construtor;
 *  class_proto.method1 = method1;
 *  class_proto.member1 = "";
 *
 *  var MyClass = Class.create ("MyClass", class_proto);
 *
 *  @name create
 *  @function
 *  @memberOf Class
 *
 *  @param {String} name the name of the class
 *  @param {Object} prototype the class prototype
 */ 
Class.create = class_create;

/** 
 *  Setter for size. Gives the dimensions of the visual content
 *
 *  @name addMethod
 *  @function
 *  @memberOf Class
 *
 *  @protected.
 */ 
Class.addMethod = class_add_method;

/** 
 *  The new command dynamically allocates javascript object and initialises
 *  it using the constructor.
 *
 *  @name new
 *  @function
 *  @memberOf Class
 *
 *  @param {String} name the name of the class to allocate
 *  @param list of parameters of the constructor
 */ 
Class["new"] = class_new;
