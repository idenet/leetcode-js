function binarySearch (nums, target) {
  return search(nums, 0, nums.length - 1, target)
}

function search (nums, l, r, target) {
  if (l > r) return -1

  let mid = Math.round((r - l) / 2) + l

  if (nums[mid] === target) {
    return mid
  }
  if (nums[mid] > target) {
    return search(nums, l, mid - 1, target)
  }
  return search(nums, mid + 1, r, target)
}