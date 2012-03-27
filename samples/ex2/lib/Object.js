/**
  Copyright (C) 2009-2011. ViniSketch SARL (c) All rights reserved
  
  THIS SOURCE CODE, ALL THE INTELLECTUAL PROPERTY RIGHTS THAT IT
  CONTAINS, AND ALL COPYRIGHTS PERTAINING THERETO ARE THE EXCLUSIVE
  PROPERTY OF VINISKETCH SARL.
  
  THIS SOURCE CODE SHALL NOT BE COPIED OR REPRODUCED IN
  FULL OR IN PART.
  
  THE PRESENT COPYRIGHT NOTICE MAY NOT BE CHANGED NOR REMOVED FROM THE
  PRESENT FILE.

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
 * @private
 */
var abobject_proto = new Object ();

/**
 *  @class
 *  ABObject is the root class of most class hierarchies. Through ABObject,
 *  objects inherit a basic interface for configuration and clone mechanism.
 *  It provides an unique identifier for objects.
 *
 *  @author David Thevenin
 *  
 *  @constructor
 *  Main constructor
 *  @name ABObject
 *	@param {string} id the identifier [mandatory]
*/
function abobject_constructor (id)
{
  if (!Object.isString (id))
  {
    if (id && id.id) { this.id = id.id; }
  // if no id is specified, create one
    else { this.id = ABObject.createId (); }
  }
  else
  {
    this.id = id;
  }
  
  // save the current object
  ABObject._obs [this.id] = this;
  this.__i__ = false;
}
abobject_proto._constructor = abobject_constructor;

/**
 * Returns an unique Id <p>
 * The algorithm is use a time stamp and a random number to generate the id.
 * @return {String}
 * @private
 */
function _createId ()
{
  return "id_" + new Date().getTime() + "" + Math.floor (Math.random() * 1000);
}
  
/**
 * @private
 */
abobject_proto.id = '';

/**
 * @private
 */
abobject_proto.__i__ = false;

/**
 * Object default init. <p>
 * Should be overloaded by the object extension class.
 *
 * @name init
 * @function
 * @memberOf ABObject.prototype
 *
 * @example
 * myObject = new ABObject (ABObject.createID ());
 * myObject.init ();
 */
function abobject_init ()
{
  if (this.__i__) { return; }
  this.initComponent ();
  
  this.__i__ = true;
}
abobject_proto.init = abobject_init;

/**
 * @private
 */
function abobject_initComponent ()
{};
abobject_proto.initComponent = abobject_initComponent;
  
/**
 * Object configuation method. <p>
 * This is a useful function for configuring an ABObject. It takes as
 * parameters, an associated array <key, value>. Each object member identical 
 * to the key are set with the associated value
 *
 * @name configure
 * @function
 * @memberOf ABObject.prototype
 *
 * @param {Object} config the associated array used for configuring the object.
 */
function abobject_configure (config)
{
  if (typeof (config) != 'object') { return; }
  
  for (var key in config)
  {
    if (key == 'id' || key == 'node' || key == 'view') 
    { continue; }
    if (!key.capitalize) { continue; }
    var method = "set" + key.capitalize ();
    if (!this [method]) { continue; }
    this [method] (config [key]);
  }
}
abobject_proto.configure = abobject_configure;
  
/**
 * @protected
 */
function abobject_destructor ()
{}
abobject_proto.destructor = abobject_destructor;

var ABObject = Class.create ('ABObject', abobject_proto);

ABObject._obs = new Object ();

/**
 * Returns an unique Id <p>
 * The algorithm is use a time stamp and a random number to generate the id.
 *
 * @name createId
 * @function
 * @memberOf ABObject
 *
 * @return {String}
 */
ABObject.createId = _createId;