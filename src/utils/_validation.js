function validcourseName(courseNme) {
  const reg = new RegExp('^([А-Я][а-я][0-9].*-(){1,23}|[A-Z]{1}[a-z].*-(){1,23})$');
  return reg.test(courseNme);
}

exports.default = {
  validcourseName,
};
