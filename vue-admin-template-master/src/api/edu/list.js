import request from '@/utils/request'

export default{
    //查询讲师
    getTeacherListPage(current,limit,teacherQuery){
        return request({
            //接口带参方法 1.拼接 2.``符引用
           // url: '/eduservice/edu-teacher/pageTeacherCondition/'+current+'/'+limit,
            url:`/eduservice/edu-teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            //后端用requestbody 前端需转化成json传递到接口
            data:teacherQuery
          })
    },
    //删除讲师
    deleteTeacherById(id){
        return request({
            //接口带参方法 1.拼接 2.``符引用          
            url:`/eduservice/edu-teacher/${id}`,
            method: 'delete',
          })
    },
    //添加讲师
    addTeacher(teacher){
        return request({
            //接口带参方法 1.拼接 2.``符引用          
            url:`/eduservice/edu-teacher/addTeacher`,
            method: 'post',
            data:teacher
          })
    },
    //修改讲师
    updateTeacherInfo(teacher){
        return request({
            //接口带参方法 1.拼接 2.``符引用          
            url:`/eduservice/edu-teacher/updateTeacher`,
            method: 'post',
            data:teacher
          })
    },
    //根据id查询
    getTeacherInfo(id){
        return request({
            //接口带参方法 1.拼接 2.``符引用          
            url:`/eduservice/edu-teacher/getTeacher/${id}`,
            method: 'get'
          })
    }
}

