
var canVisitAllRooms = function(rooms) {
    
    const vis = new Set();

    function dfs(currentRoom){
        if(vis.has(currentRoom))
            return;
        vis.add(currentRoom)
        for(let key of rooms[currentRoom]){
            console.log('key', key)
            dfs(key)
        }    
    }
    dfs(0)
    return vis.size == rooms.length
};

console.log(canVisitAllRooms([[1],[2],[3],[]]))