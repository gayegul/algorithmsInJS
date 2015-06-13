function inherits(obj, property) {
 return !!(obj[property] && !obj.hasOwnProperty(property));
}
