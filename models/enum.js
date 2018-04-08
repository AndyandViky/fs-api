
module.exports = {
    // 激活状态
    DataStatus: {
        Actived: { value: 1, text: '已激活' },
        NotActived: { value: 0, text: '未激活' },
    },

    // 读取状态
    ReadStatus: {
        Readed: { value: 1, text: '已读' },
        NotReaded: { value: 0, text: '未读' },
    },

    // 用户等级
    UserRank: {
        Passerby: { value: 0, text: '路人' },
        Visitor: { value: 1, text: '访客' },
        Resident: { value: 2, text: '住户' },
        Property: { value: 3, text: '物业' },
        Admin: { value: 4, text: '管理员' },
    },

    // 人脸模型类型
    FaceModel: {
        First: { value: 0, text: '可提交类型' },
        Second: { value: 1, text: '随时间更新类型' },
        Threed: { value: 2, text: '随规则替换类型' },
    },

    // 上传文件链接
    UploadPath: {
        Face: { value: 'static/images/face', text: '人脸图片上传' },
        Avatar: { value: 'static/images/avatar', text: '头像上传' },
        Bug: { value: 'static/images/bug', text: '故障图片上传' },
        Auth: { value: 'static/images/auth', text: '身份认证图片上传' },
    },
}
