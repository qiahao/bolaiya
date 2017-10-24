// webpack require.context 转为数组包装函数 
// export 使用 default
export const webpackRequire2array = (r, exinclude) => {
    let contents = []
    const paths = r.keys().filter((p, i) => {
        return exinclude.indexOf(p) == -1
    });
        console.log('p',paths)
    for (let p of paths) {
        let fn = r(p).default ? r(p).default : r(p)
        if (fn instanceof Array) {
            contents = [...contents, ...fn]
        } else if (fn instanceof Object) {
            contents.push(fn)
        }
        console.log('fn',fn)
    }
    return contents
}

export const webpackRequire2map = (r, exinclude) => {
    let contents = []
    const paths = r.keys().filter((p, i) => {
        return exinclude.indexOf(p) == -1
    });
    for (let p of paths) {
        let fn = r(p).default ? r(p).default : r(p)
        if (fn instanceof Array) {
            contents = [...contents, ...fn]
        } else if (fn instanceof Object) {
            contents.push(fn)
        }
    }
    return contents
}