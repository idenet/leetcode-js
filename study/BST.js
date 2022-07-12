function preOrder (node) {
  if (node == null) return
  console.log(node.e);
  preOrder(node.left)
  preOrder(node.right)
}

function inOrder (node) {
  if (node == null) return
  inOrder(node.left)
  console.log(node.e);
  inOrder(node.right)
}


function postOrder (node) {
  if (node === null) return
  postOrder(node.left)
  postOrder(node.right)
  console.log(node.e);
}

// 层序遍历
function levelOrder (root) {
  let queue = []
  queue.push(root)
  while (queue.length) {
    let cur = queue.shift()
    console.log(cur.e);

    if (cur.left) queue.push(cur.left)
    if (cur.right) queue.push(cur.right)
  }
}

function minimum (node) {
  if (node.left === null) {
    return node
  }
  return minimum(node.left)
}

function maximum (node) {
  if (node.right === null) {
    return node
  }
  return maximum(node.right)
}
// 删除最小节点
function removeMin (node) {
  if (node.left == null) {
    let rightNode = node.right
    node.right = null
    return rightNode
  }
  node.left = removeMin(node.left)
}



function removeMax (node) {
  if (node.right == null) {
    let rightNode = node.left
    node.left = null
    return rightNode
  }
  node.right = removeMin(node.right)
}


function remove (node, e) {
  if (node === null) return null

  if (e < node.e) {
    node.left = remove(node.left, e)
    return node
  } else if (e > node.e) {
    node.right = remove(node.right, e)
    return node
  } else {
    if (node.left == null) {
      let rightNode = node.right
      node.right = null
      return rightNode
    }
    if (node.right == null) {
      let leftNode = node.left
      node.left = null
      return leftNode
    }

    // 找到右子树中的最小节点
    let successor = minimum(node.right)
    // 右子树中删除的最小节点 并且吧 删除节点的 的右子树指向删除节点
    successor.right = removeMin(node.right)
    successor.left = node.left

    node.left = node.right = null

    return successor
  }
}

let root = remove(root, e)

preOrder(root)