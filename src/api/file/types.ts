/**
 * 文件API类型声明
 */
export interface FileInfo {
  name: string;
  url: string;
}


export interface Ma extends FileInfo {
  test: string
}

const a:Ma = {
  name: 'asas',
  url: '',
  test: ''
}
console.log(a.test)