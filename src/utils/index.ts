/**
 * 路径拼接
 * @param baseUrl 路径前缀
 * @param relativeUrl
 */
export const combineUrl = (baseUrl: string, relativeUrl: string) => {
  if (baseUrl.endsWith('/')) {
    baseUrl = baseUrl.slice(0, baseUrl.length - 1)
  }

  if (relativeUrl.startsWith('/')) return relativeUrl

  if (relativeUrl.startsWith('./')) return baseUrl + '/' + relativeUrl.slice(2, baseUrl.length)

  return baseUrl + '/' + relativeUrl
}

export const getParentIds = (id: string, tree: any[], fieldNames = { id: 'key', children: 'children' }) => {
  function dfs(id: string, tree: any[], parents: string[] = []) {
    for (let i = 0; i < tree.length; i++) {
      const item = tree[i]
      if (item[fieldNames.id] === id) return parents

      if (!item[fieldNames.children] || !item[fieldNames.children].length) continue

      // 向下寻找，先将id入栈
      parents.push(item[fieldNames.id])
      if (dfs(id, item[fieldNames.children], parents)?.length) return parents
      parents.pop()
    }
    return []
  }

  return dfs(id, tree)
}
