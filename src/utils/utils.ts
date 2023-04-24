// // 初始化一维数组以及二维数组
// const array = Array(5).fill('');
// // 输出 ["", "", "", "", ""]
// const matrix = Array(5).fill(0).map(()=>Array(5).fill(0));

// // reduce实现
// const array  = [5,4,7,8,9,2];
// // 和
// array.reduce((a,b) => a+b);
// // 最大值
// array.reduce((a,b) => a>b?a:b);
// // 最小值
// array.reduce((a,b) => a<b?a:b);

// // 过滤出虚假值 0，undefined，null，false，""，''
// const array = [3, 0, 6, 7, '', false];
// array.filter(Boolean);

// // 删除重复值
// const array  = [5,4,7,8,9,2,7,5];
// array.filter((item,idx,arr) => arr.indexOf(item) === idx);


// // 计数器实现
// let string = 'kapilalipak';
// const table={};
// for(let char of string) {
//   table[char]=table[char]+1 || 1;
// }

// const countMap = new Map();
// for (let i = 0; i < string.length; i++) {
//   if (countMap.has(string[i])) {
//     countMap.set(string[i], countMap.get(string[i]) + 1);
//   } else {
//     countMap.set(string[i], 1);
//   }
// }


// // const foo = null ?? 'my school';

// const user = {
//   employee: {
//     name: "Kapil"
//   }
// };
// user.employee?.name;
// // 输出: "Kapil"
// user.employ?.name;
// // 输出: undefined
// user.employ.name
// // 输出: VM21616:1 Uncaught TypeError: Cannot read property 'name' of undefined
