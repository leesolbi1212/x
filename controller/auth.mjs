import * as authRepository from "../data/auth.mjs";

export async function signup(req, res, next) {
  const { userid, password, name, email } = req.body;
  const users = await authRepository.createUser(userid, password, name, email);
  if (users) {
    res.status(201).json(users);
  }
}

export async function login(req, res, next) {
  const { userid, password } = req.body;
  const user = await authRepository.login(userid, password);
  if (user) {
    req.session.user = { userid: user.userid, name: user.name };
    res.status(200).json(`${user.userid}님 로그인 완료⭐`);
  } else {
    res.status(404).json(`${userid}님 아이디 또는 비밀번호를 확인하세요`);
  }
}

export async function me(req, res) {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(401).send("로그인이 필요해용");
  }
}

export async function logout(req, res) {
  req.session.destroy(() => {
    res.send("로그아웃 완료");
  });
}
