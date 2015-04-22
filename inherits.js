
function inherits(obj, prop) {
 if(!obj[prop]) return false;
 if(!obj.hasOwnProperty(prop)) return true;
 return false;
}
