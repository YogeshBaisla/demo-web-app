export function getUser() {
  return localStorage.getItem("loggedInUser");
}

export function setUser(email) {
  localStorage.setItem("loggedInUser", email);
}

export function buyCourse(courseId) {
  const user = getUser();
  if (!user) return;

  const key = `purchasedCourses_${user}`;
  const purchased = JSON.parse(localStorage.getItem(key)) || [];
  if (!purchased.includes(courseId)) {
    purchased.push(courseId);
    localStorage.setItem(key, JSON.stringify(purchased));
  }
}

export function hasBoughtCourse(courseId) {
  const user = getUser();
  if (!user) return false;

  const key = `purchasedCourses_${user}`;
  const purchased = JSON.parse(localStorage.getItem(key)) || [];
  return purchased.includes(courseId);
}
