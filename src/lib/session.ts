// Returns a persistent session ID stored in sessionStorage
export function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  let id = sessionStorage.getItem('leamah_session');
  if (!id) {
    id = 'sess_' + Date.now() + '_' + Math.random().toString(36).slice(2, 11);
    sessionStorage.setItem('leamah_session', id);
  }
  return id;
}
