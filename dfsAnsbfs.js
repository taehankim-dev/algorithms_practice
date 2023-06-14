//dfs 깊이 우선 탐색
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "F"],
  E: ["C","G"],
  F: ["D","H","I"],
  G: ["E","J","K"],
  H: ["F","L"],
  I: ["F", "M"],
  J: ["G","N"],
  K: ["G","O"],
  L: ["H"],
  M: ["I","P"],
  N: ["J"],
  O: ["K"],
  P: ["M"]
};

const dfs = (graph, start) => {
  const stack = []; // 탐색 예정
  const visited = []; //탐색 완료

  stack.push(start);

  while(stack.length){
    const node = stack.pop();
    if(!visited.includes(node)){
      visited.push(node);
      stack.push(...graph[node].reverse());
    }
  }

  return visited;
}

console.log("dfs : ", dfs(graph, 'A'));

const bfs = (graph, start) => {
  const queue = [];
  const visited = [];

  queue.push(start);

  while(queue.length){
    const node = queue.shift();

    if(!visited.includes(node)){
      visited.push(node);
      queue.push(...graph[node].reverse());
    }
  }

  return visited;
}

console.log("bfs : ", bfs(graph, 'A'))