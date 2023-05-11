// //map 구조
// const graph = {
//   A: ['B', 'C'],
//   B: ['A', 'D'],
//   C: ['A', 'G', 'H', 'I'],
//   D: ['B', 'E', 'F'],
//   E: ['D'],
//   F: ['D'],
//   G: ['C'],
//   H: ['C'],
//   I: ['C', 'J'],
//   J: ['I']
// };

// // 깊이 우선 탐색 - DFS
// const dfs = (graph, startNode) => {
//   const visited = []; //탐색한 노드들
//   let needVisit = []; //탐색해야할 노드들

//   needVisit.push(startNode);
//   while(needVisit.length){
//     const node = needVisit.shift(); //queue 구조
//     if(!visited.includes(node)){
//       visited.push(node);
//       needVisit = [...graph[node], ...needVisit];
//     }
//   }

//   return visited;
// }

// console.log("dfs : ", dfs(graph, 'A'))

// //넓이 우선 탐색 - BFS
// const bfs = (graph, startNode) => {
//   let visited = [];
//   let needVisit = [];

//   needVisit.push(startNode);
//   while(needVisit.length){
//     const node = needVisit.shift()
//     if(!visited.includes(node)){
//       visited.push(node);
//       needVisit = [...needVisit, ...graph[node]];
//     }
//   }

//   return visited;
// }

// console.log("bfs : ", bfs(graph, 'A'))

let text = +'4';

let answer = "";
for(let i = 0; i < text; i++){
  answer += 'long ';
}

console.log(answer + 'int')