// You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

// All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

// Constraints:

// 1 <= tickets.length <= 300
// tickets[i].length == 2
// fromi.length == 3
// toi.length == 3
// fromi and toi consist of uppercase English letters.
// fromi != toi



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
