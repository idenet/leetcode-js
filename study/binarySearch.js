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

// 比一个target 最小值的索引
function upper (nums, target) {
  let l = 0, r = nums.length
  // 在data[l,r] 中寻找解
  while (l < r) {
    let mid = Math.floor((r - l) / 2) + l
    if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return l
}


// 》 target 返回最小值的索引
// == target 返回最大值的索引
function ceil (nums, target) {
  let u = upper(nums, target)
  if (u - 1 > 0 && nums[u - 1] === target) {
    return u - 1
  }
  return u
}
// 》 target 返回最小值的索引
// == target 返回最小值的索引
function lower_ceil (nums, target) {
  let u = upper(nums, target)
  if (u - 1 > 0 && nums[u - 1] === target) {
    return u - 1
  }
  return u
}

let nums = [1, 1, 3, 3, 5, 5, 7, 7]
console.log(lower_ceil(nums, 3));

// < target的最大值索引
function lower (nums, target) {
  let l = - 1, r = nums.length - 1
  while (l < r) {
    let mid = Math.ceil((r - l) / 2) + l
    if (nums[mid] <= target) {
      l = mid
    } else {
      r = mid - 1
    }
  }
  return l
}

// == target 返回最小索引
// < target 返回小于target的最大的值 lower
function lower_floor (nums, target) {
  let l = lower(nums, target)
  if (l + 1 < nums.length && nums[l + 1] === target) {
    return l + 1
  }
  return l
}

// ==target 返回最大索引
// < target 返回小于target的最大的值 lower
function upper_floor (nums, target) {
  let l = lower(nums, target)
  if (l + 1 < nums.length && nums[l + 1] === target) {
    return l + 1
  }
  return l
}

