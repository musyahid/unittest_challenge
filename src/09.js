const symmetrical = str => {
    const strLen = str.length;
    if (strLen < 2) return true;
  
    if (str[0] === str[strLen - 1]) {
        return symmetrical( str.slice(1, strLen - 1) );
    }
  
    return false;
  };
  
module.exports = symmetrical;