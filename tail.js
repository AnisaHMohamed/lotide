
const tail = function(list) {
  let last = [...list];
  if (last.length <= 1) {
    return [];
  } 
  last.shift();

  return last;
};
module.exports = tail