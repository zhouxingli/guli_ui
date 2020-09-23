import request from '@/utils/request'

export default{
    addCourseInfo(courseInfoVo){
        return request({
            //接口带参方法 1.拼接 2.``符引用
           // url: '/eduservice/edu-teacher/pageTeacherCondition/'+current+'/'+limit,
            url: '/eduservice/edu-course/addCourseInfo',
            method: 'post' ,
            data: courseInfoVo

          })
    }
}