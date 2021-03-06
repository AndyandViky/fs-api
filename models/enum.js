
module.exports = {
    // 激活状态
    DataStatus: {
        Actived: { value: 1, text: '已激活' },
        NotActived: { value: 0, text: '未激活' },
    },

    // 门禁状态
    DoorStatus: {
        Camera: { value: 0, text: '摄像头' },
        App: { value: 1, text: 'app' },
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

    // 访客状态
    VisitorStatus: {
        Untreated: { value: 0, text: '未处理' },
        Pass: { value: 1, text: '通过' },
        Invalid: { value: 2, text: '失效' },
    },

    // 上传文件链接
    UploadPath: {
        Face: { value: 'static/images/face', text: '人脸图片上传' },
        Avatar: { value: 'static/images/avatar', text: '头像上传' },
        Attachment: { value: 'static/images/attachment', text: '附件图片上传' },
    },

    QuestionLike: {
        Add: { value: 1, text: '点赞' },
        Cancel: { value: 0, text: '取消点赞' },
    },

    CacheKey: {
        Articles: 'GETARTICLELIST',
        Questions: 'GETQUESTIONS',
    },

    /**
     * 住户行为
     */
    BehaviorCategory: {
        article: { value: 1, text: '阅读文章行为' },
    },

    ArticleCategory: {
        Article: { value: '普通文章', text: '普通文章' },
        Lost: { value: '失物招领', text: '失物招领' },
        Dynamic: { value: '小区动态', text: '小区动态' },
    },
}
