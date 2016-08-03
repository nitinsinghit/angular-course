var array = ['addasjd Helol jsdhshd sdjasd',
  'shdahsd dahsdh askdka',
  'kksjdsd wdghds adsda'];


function filter(array) {
  for (var i = 0; i < array.length; i++) {
    var arr = array[i].split(' ');
    for (var j = 0; j < arr.length; j++) {
      arr[j] = arr[j].replace(arr[j][0], arr[j][0].toUpperCase());
    }
    arr= arr.join(' ');
    array[i] = arr;
  }
  return array;
}
