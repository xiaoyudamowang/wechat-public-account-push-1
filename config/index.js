export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx9e9acfdb618c1e50",
    // 公众号appSecret
    appSecret: "6b87ba9c1ccd3f1afd048cbf6da24983",
    // 模板消息id
    templateId: "JpTjhZCcVY8gdEl3exgbSwRZVfgFWpdeFRTKdG4TTZg",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["or9O55lvyOurMYdKg5_S25nCMnu4","or9O55g4E_Prw8I4tkNq8ao-gauQ"],
     
    // 信息配置
    ewai: "   ",
    // 所在省份
    province: "广东",
    // 所在城市
    city: "广州",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "苏宝", "year": "1999", "date": "09-16", "type": 'new'},
      {"name": "哥哥", "year": "1996", "date": "01-07", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2023-03-23",
    // 结婚纪念日
    
    }

 //{{date.DATA}}  
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
