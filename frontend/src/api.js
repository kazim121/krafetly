// api.js

const BASE_URL = "https://insidious-round-power.glitch.me";

// Fetch all users from backend
export async function fetchUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return await res.json();
}

// Create a new user by posting data to backend
export async function createUser(userData) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!res.ok) throw new Error("Failed to create user");
  return await res.json();
}
