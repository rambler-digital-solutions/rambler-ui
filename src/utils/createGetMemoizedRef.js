const createGetMemoizedRef = () => {
  let cachedRefs = []
  const memoizedRef = element => {
    cachedRefs.forEach(ref => ref && ref(element))
  }
  return (...refs) => {
    cachedRefs = refs
    return memoizedRef
  }
}

export default createGetMemoizedRef
