function binarySearch(ele, v) {
    // sorting array
    v.sort()

    let start = 0, end = v.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end)/2)

        if (v[mid] == ele)
            return true;
        
        else if (v[mid] > ele)
            end = mid - 1
        
        else   
            start = mid + 1
    }

    return false;
}

module.exports = binarySearch;