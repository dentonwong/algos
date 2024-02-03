/*
You have information about n different recipes. You are given a string array recipes and a 2D string array ingredients. 
The ith recipe has the name recipes[i], and you can create it if you have all the needed ingredients from ingredients[i]. 
Ingredients to a recipe may need to be created from other recipes, i.e., ingredients[i] may contain a string that is in recipes.
You are also given a string array supplies containing all the ingredients that you initially have, and you have an infinite supply of all of them.
Return a list of all the recipes that you can create. You may return the answer in any order.
Note that two recipes may contain each other in their ingredients.
*/

// function findAllRecipes(recipes, ingredients, supplies){
  
//   const ingredMap = new Map();
//   const inDegrees = new Map();

//   for(let i in recipes){

//     for(let ing of ingredients[i]){
//       if(ingredMap.has(ing))
//         ingredMap.get(ing).push(recipes[i])
//       else
//         ingredMap.set(ing, [recipes[i]])
//       inDegrees.set(recipes[i], inDegrees.get(recipes[i]) + 1 || 1)
//     }
//   }


//   const queue = [...supplies];
//   const output = [];

//   while(queue.length > 0){

//     const topIng = queue.shift();

//     if(ingredMap.has(topIng)){

//       for(let rcp of ingredMap.get(topIng)){

//         inDegrees.set(rcp, inDegrees.get(rcp) - 1);
//         if(inDegrees.get(rcp) == 0){
//           queue.push(rcp);
//           output.push(rcp);
//         }
//       }
//     }
//   }
//   return output;
// }


//Test cases
// let recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast","flour","corn"]
// console.log(findAllRecipes(recipes, ingredients, supplies))
//Should be ["bread"]
// let recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]
// console.log(findAllRecipes(recipes, ingredients, supplies))
// //Should be ["bread","sandwich"]
// let recipes = ["bread","sandwich","burger"], ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], supplies = ["yeast","flour","meat"]
// console.log(findAllRecipes(recipes, ingredients, supplies))
//Should be ["bread","sandwich","burger"]
