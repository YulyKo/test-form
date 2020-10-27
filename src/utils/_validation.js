function validCourseName(courseName) {
  let isValid = false;
  const reg = new RegExp('([А-Яа-я0-9.*()_]{3})|([A-Za-z0-9.*()_]{3})$');
  if (reg.test(courseName)) {
    isValid = true;
  } else if (courseName === '' || !courseName || courseName.length > 41) isValid = false;
  return isValid;
}

module.exports = {
  validCourseName,
};
