// 路径拼接
export const combineUrl = (baseUrl: string, relativeUrl: string) => {
  if (baseUrl.endsWith('/')) {
    baseUrl = baseUrl.slice(0, baseUrl.length - 1)
  }

  if (relativeUrl.startsWith('/')) return relativeUrl

  if (relativeUrl.startsWith('./')) return baseUrl + '/' + relativeUrl.slice(2, baseUrl.length)

  return baseUrl + '/' + relativeUrl
}
