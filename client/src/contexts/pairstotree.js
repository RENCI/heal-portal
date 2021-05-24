const rels = [
  { id: 1, pid: null },
  { id: 2, pid: 1 },
  { id: 3, pid: 2 },
  { id: 4, pid: 1 },
  { id: 5, pid: 1 },
  { id: 6, pid: 2 },
  { id: 7, pid: 6 },
  { id: 8, pid: 4 },
  { id: 9, pid: 4 },
  { id: 10, pid: 4 },
]

let root
const nodeMap = rels.reduce((map, node) => {
  const thisNode = {
    ...node,
    children: {},
  }
  return { ...map, [node.id]: thisNode }
})

console.log(nodeMap)

rels.forEach(datum => {
  datum.children = {}
  if (!datum.pid) {
    root = datum
  } else {
    parentNode = { ...nodeMap[datum.pid], children: {} }
    delete datum.pid
    if (parentNode?.children) {
      parentNode.children = { ...parentNode.children, [datum.id]: datum }
    } else {
      parentNode.children = new Object({ [datum.id]: datum })
    }
  }
})

console.log(nodeMap)

// let tree = {}

// rels.reverse().forEach(([id, parentID]) => {
//   if (parentID && tree.hasOwnProperty(parentID)) {
//     const currentSiblings = nodes[parentID]
//     tree[parentID] = { ...currentSiblings, [id]: nodes[id] }
//   } else {
//     tree[parentID] = { }
//   }
// })

// console.log(tree)
// console.log(JSON.stringify(tree, null, 2))
