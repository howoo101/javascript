// 2. _filter, _map으로 리팩토링
//걸러내는 함수
function _filter(list, predic) {
  var new_list = [];
  _each(list, function(val) {
    if(predic(val)) new_list.push(val);
  });
  return new_list;
}

function _map(list, mapper) {
  var new_list = [];
  _each(list, function(val) {
      new_list.push(mapper(val));
  });
  return new_list;
}

function _each(list, iter) {
  for(var i = 0; i < list.length; i++) {
      iter(list[i]);
  }
  return list;
}