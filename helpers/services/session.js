export function saveSession(data) {
  try {
    localStorage.setItem('storage', JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
}

export function extractSession() {
  try {
    const value = localStorage.getItem('storage');
    const parseValue = JSON.parse(value);
    return parseValue || {};
  } catch (err) {
    return null;
  }
}

export function clearSession() {
  try {
    localStorage.removeItem('storage');
  } catch (err) {
    console.error(err);
  }
}
