const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm617bx/",
            name: "ssm617bx",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm617bx/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "视频播放系统"
        } 
    }
}
export default base
