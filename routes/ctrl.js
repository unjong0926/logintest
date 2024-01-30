const main = (req, res) => {
  req.sendFile(path.join(__dirname, '/build/index.html')); //build시 생기는 index.html 파일을 백엔드와 연동
};

const authcheck = (req, res) => {
  const sendData = { isLogin: '' };
  if (req.session.is_logined) {
    sendData.isLogin = 'True';
  } else {
    sendData.isLogin = 'False';
  }
  res.send(sendData);
};

const logout = function (req, res) {
  req.session.destroy(function (err) {
    res.redirect('/');
  });
};

module.exports = {
  main,
  authcheck,
  logout,
};
