# Development Diary

This is a place to take all my notes as I work through the development process on my roguelike dungeon crawler.

### April 24, 2017
##### Getting started on new project
Today, I started building the roguelike dungeon crawler for the FCC Speedrun challenge. I started the project in WebStorm using the create-react-app template. This is my second React project in WebStorm.

For my first React project in WebStorm I was deploying to a docs/ folder on my GitHub master branch. This worked okay, but create-react-app is really optimized for deployment to a gh-pages branch. On that first project, I kept having to go in after each build and fix file paths. 

For this project, I decided to use the built-in deploy tools. It was easy to setup and works great. I would prefer to use a docs/ directory, because it seems cleaner to me to have everything on one branch, but I don't mind the way the gh-pages deploy works.

##### Figuring out where to start
I started out with the idea of creating room components that I would then tile together to build the dungeon. I created the room component and a floor component. 

I was able to generate randomly sized rooms and get them into my dungeon container without any problem, but hooking them together is a bit more of a puzzle. I started to do some research. I found an amazing site that I think contains all the information I will need for this project: [Amit's Game Programming Information](http://www-cs-students.stanford.edu/~amitp/gameprog.html).

Amit also has another site with a lot of useful information: [Red Blob Games](http://www.redblobgames.com/). On that page, I found a great article on [Graph Theory](http://www.redblobgames.com/pathfinding/grids/graphs.html). While reading this, the lightbulb went off. My room approach was not quite right. I need to create a grid with connected nodes. A room is represented by a cluster of connected nodes. 

For my new approach, that I haven't started on yet. I will create a randomly sized grid. Within the grid, there will be nodes you can move through, open space, and nodes you can't, obstacles. Rooms are groups of open space. Walls are lines of obstacles. Pathways are open space nodes that connect rooms together.

I haven't even begun to implement this yet, so my approach may change, but this feels like a really good start. 
 
 