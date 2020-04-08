// 源代码
// javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
	let init = {
		grid: null, // 当前棋盘
		start: [], // 当前所在点
		end: [], // 终点
		path_num: 0, // 剩余可走点的个数
		res: 0 // 可行解个数
	}
	init_grid.call(init, grid)
	get_paths(init)
	return init.res
};
var get_paths = function (obj) {
	if (move(obj, 1, 0) === 1) { // 向上
		get_paths(obj) // 新起点递归
		trace_back(obj, 1, 0) // 回退
	}
	if (move(obj, 0, -1) === 1) { // 向右
		get_paths(obj)
		trace_back(obj, 0, -1)
	}
	if (move(obj, -1, 0) === 1) { // 向下
		get_paths(obj)
		trace_back(obj, -1, 0)
	}
	if (move(obj, 0, 1) === 1) { // 向左
		get_paths(obj)
		trace_back(obj, 0, 1)
	}
}
var trace_back = function (obj, up, left) {
	obj.grid[obj.start[0]][obj.start[1]] = 0
	obj.start[0] += up
	obj.start[1] += left
	obj.path_num ++ //走过的路++
}
var move = function (obj, up, left) {
	if (obj.grid[obj.start[0] - up][obj.start[1] - left] === 2 && obj.path_num === 0) {
		// console.log('yeah!')
		obj.res++
		return 2 //一个不落下的走到终点
	}
	else if (obj.grid[obj.start[0] - up][obj.start[1] - left] === 0) {// 能走
		obj.start[0] -= up
		obj.start[1] -= left
		obj.grid[obj.start[0]][obj.start[1]] = -1 // 走过的路不能再走
		// 更改起点
		obj.path_num-- // 走过的路--
		return 1
	}
	else return -1

}

// 初始化grid 扩充围棋
var init_grid = function (grid) {
	this.grid = new Array(grid.length + 2)
	for (let i = 0; i < this.grid.length; i++)
		this.grid[i] = new Array(grid[0].length + 2).fill(-1)
	for (let i = 0; i < grid.length; i++)
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) this.start = [i + 1, j + 1]
			if (grid[i][j] === 2) this.end = [i + 1, j + 1]
			if (grid[i][j] === 0) this.path_num ++;
			this.grid[i + 1][j + 1] = grid[i][j]
		}
}