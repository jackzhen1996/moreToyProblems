var rangeSumBST = function(root, low, high) {
    var sum = 0;
    
    var inner = function(root) {
        if (root.val >= low && root.val <= high) {
            sum += root.val;
        }
        
        if (root.left) {
            inner(root.left);
        }
        if (root.right) {
            inner(root.right)
        }
        
    }
    inner(root);
    return sum;
};
