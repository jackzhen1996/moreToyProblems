var intersect = function(nums1, nums2) {
    // map all the occurences of nums1
    // iterate nums2 and see if nums2[i] is in nums1, if it is, then add to the array, decrement the key of that number
    
    var map = {};
    var arr = [];
    
    for (var i = 0; i < nums1.length; i++) {
        map[nums1[i]] = map[nums1[i]] + 1 || 1;
    }
    
    for (var i = 0; i < nums2.length; i++) {
        if (map.hasOwnProperty(nums2[i]) && map[nums2[i]] !== 0) {
            arr.push(nums2[i]);
            map[nums2[i]] -= 1;
        }
    }
    return arr;
};
