const problem = `5 5 1
1 4
1 2
2 3
2 4
3 4`

const inputs = problem.toString().trim().split('\n');
const [n,m,r] = inputs.shift().split(' ').map(v => +v);

const graph = new Map();

inputs.forEach((item) => {
  let [a,b] = item.split(' ').map(v => +v);

  if(graph.has(a)) graph.get(a).push(b);
  else graph.set(a,[b]);

  if(graph.has(b)) graph.get(b).push(a);
  else graph.set(b, [a])
})


const visited = new Array(n+1).fill(false);
const answer = new Array(n).fill(0);
let count = 1;


const dfs = (start) => {
  visited[start] = true;
  answer[start-1] = count++;

  if(!graph.has(start)) return;

  const nodes = [...graph.get(start)].sort((a,b) => b-a);
  for(let node of nodes){
    if(!visited[node]) dfs(node);
  }

}

dfs(r);
console.log(answer.join("\n"))
