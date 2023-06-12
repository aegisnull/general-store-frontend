const SERVER_URL =
  "https://general-store-backend-production-62ab.up.railway.app";

export const login = async (credentials) => {
  try {
    const response = await fetch(`${SERVER_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error("Login failed: " + error.message);
  }
};

export const signup = async (userData) => {
  try {
    const response = await fetch(`${SERVER_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Signup failed");
    }

    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error("Signup failed: " + error.message);
  }
};
