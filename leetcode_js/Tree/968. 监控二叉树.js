const minCameraCover = (root)=>{
  const minCam = (root) => {
    if(root === null){
      return {
        withCam: Infinity,
        noCamWatchedByDad: 0,
        noCamWatchedBySon: 0
      };
    }
    const left = minCam(root.left);
    const right = minCam(root.right);

    const withCam = 1 + Math.min(
      left.noCamWatchedByDad + right.noCamWatchedByDad,
      left.withCam + right.noCamWatchedByDad,
      left.noCamWatchedByDad + right.withCam
    )

    const noCamWatchedByDad = Math.min(
      left.withCam + right.withCam,
      left.withCam + right.noCamWatchedBySon,
      left.noCamWatchedBySon + right.withCam,
      left.noCamWatchedBySon + right.noCamWatchedBySon
    );

    const noCamWatchedBySon = Math.min(
      left.withCam + right.withCam,
      left.withCam + right.noCamWatchedBySon,
      left.noCamWatchedBySon + right.withCam
    )

    return {withCam, noCamWatchedByDad, noCamWatchedBySon};
  }
  const res = minCam(root);
  return Math.min(res.withCam, res.noCamWatchedBySon);
}