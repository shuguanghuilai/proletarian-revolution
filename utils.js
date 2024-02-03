const getUrlParm = key => {
  try {
    return location.search.split('?')[1].split('&').find(item => item.split('=')[0] === key).split('=')[1]
  }
  catch (e) {
    return ''
  }
}