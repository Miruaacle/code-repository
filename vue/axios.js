/*
  axios form-data submit mode
 */
var transformRequest = function(data) {
  // 将数据转换为表单数据
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}
axios({
  method: 'post',
  url: '',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  transformRequest: [
    function(data) {
      return transformRequest(data)
    }
  ],
  data: {
    para1: '',
    para2: ''
  }
})
  .then(function(response) {
    console.log(response)
  })
  .catch(function(error) {
    console.log(error)
  })
