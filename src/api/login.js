import request from '@/utils/request'

export const getPicCodeApi = () => {

  return request.get('/captcha/image')

}

// 短信验证码
export const getMessageCodeApi = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
     captchaCode,
     captchaKey,
     mobile
    }
  })
}

// 登录功能 , 注意传递个后端的变量名称不能修改
export const LoginApi = (mobile, messageCode) => {
  return request.post('/passport/login', {
    form: {
      isParty: false,
      partyData: {},
      mobile,
      smsCode: messageCode
    }
  })
}