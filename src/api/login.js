import request from '@/utils/request'

export const getPicCodeApi = () => {

  return request.get('/captcha/image')

}

export const getMessageCodeApi = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
     captchaCode,
     captchaKey,
     mobile
    }
  })
}