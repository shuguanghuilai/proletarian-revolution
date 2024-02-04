const getUrlParm = key => {
  try {
    return location.search.split('?')[1].split('&').find(item => item.split('=')[0] === key).split('=')[1]
  }
  catch (e) {
    return ''
  }
}

const pushRouter = (name, data = {}) => {
  let hash = `#${name}`
  const params =
    Object.entries(data)
      .map(([key, value]) => {
        return `${key}=${value}`
      })
      .join('&')

  if (params.length > 0) {
    hash += `?${params}`
  }

  location.hash = `#${name}`
}

const getHash = () => {
  return location.hash.split('?')[0].slice(1)
}