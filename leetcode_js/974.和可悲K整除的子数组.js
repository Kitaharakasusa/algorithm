var subarrayDivByK = (A, K) => {
    let map = new Array(K).fill(0);
    map[0] = 1;
    let presum = 0;
    let count = 0
    for(let i = 0; i < A.length; i++){
        presum = (presum+A[i]) % K;
        if(presum < 0) presum+=K;
        count += map[presum];
        map[presum]++;
    }
    return count;
}