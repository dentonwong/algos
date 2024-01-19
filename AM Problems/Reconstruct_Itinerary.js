function reconstructItinerary(tickets){

  const flights = new Map();
  const unvisited = new Map();
  tickets.sort();

  for(let [src, dst] of tickets){


    if(flights.has(src))
      flights.get(src).push(dst)
    else
      flights.set(src, [dst]);

    unvisited.set(`${src}, ${dst}`, unvisited.get(`${src}, ${dst}`) +1 || 1)

  }

  function dfs(src, route, unvisited){

    if(route.length == tickets.length + 1) return true;

    if(flights.has(src)){

      for(let dst of flights.get(src)){
        if(unvisited.get(`${src}, ${dst}`)){
          unvisited.set(`${src}, ${dst}`, unvisited.get(`${src}, ${dst}`) -1);
          route.push(dst);
          if(dfs(dst, route, unvisited)) return route;
          route.pop();
          unvisited.set(`${src}, ${dst}`, unvisited.get(`${src}, ${dst}`) +1);
        }
      }
    }
  }

  const route = ['JFK'];
  return dfs('JFK', route, unvisited);

}


//Test cases

console.log(reconstructItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]))
//Should be ["JFK","MUC","LHR","SFO","SJC"]

console.log(reconstructItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]))
//Should be ["JFK","ATL","JFK","SFO","ATL","SFO"]
