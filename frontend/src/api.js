const API_URL = 'https://insidious-round-power.glitch.me';

export async function fetchUsers() {
  const res = await fetch(`${API_URL}/api/users`);
  return await res.json();
}

export async function createUser(user) {
  const res = await fetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return await res.json();
}

