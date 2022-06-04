import axios from "axios";
axios.defaults.withCredentials = true

export default async function TrySocialLogin(site) {

  var url = ''
  if (site === 'google')
    // url = 'http://127.0.0.1:8000/users/google/login/'
    url = 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=1037934278190-17b3othcsdmik8im5e1occ4u4kfpko2f.apps.googleusercontent.com&response_type=code&redirect_uri=http%3A%2F%2F127.0.0.1%3A8000%2Fusers%2Fgoogle%2Fcallback%2F&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&flowName=GeneralOAuthFlow'

  if (site === 'naver')
    url = 'naver_url'
  if (site === 'kakaotalk')
    url = 'kakaotalk_url'

  console.log(url);

  await axios.get(url, {
    header: {
      'Access-Control-Allow-Origin': '*'
    }
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    })
};