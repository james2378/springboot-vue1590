const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot21j0r/",
            name: "springboot21j0r",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot21j0r/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学院个人信息管理系统"
        } 
    }
}
export default base
