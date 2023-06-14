const SERVER_URL =
  "https://general-store-backend-production-62ab.up.railway.app";

export async function login(userData) {
  console.log(userData);
  try {
    const response = await fetch(`${SERVER_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const statusCode = response.status;
      const errorMessage =
        statusCode === 401
          ? "Invalid credentials"
          : `Login failed with status code ${statusCode}`;
      throw new Error(errorMessage);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);

    const errorMessage = error.message || "An unexpected error occurred.";
    return {
      success: false,
      error: errorMessage,
    };
  }
}

export async function signup(userData) {
  try {
    const response = await fetch(`${SERVER_URL}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Signup failed with status code ${response.status}`);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);

    const errorMessage = error.message || "An unexpected error occurred.";
    return {
      success: false,
      error: errorMessage,
    };
  }
}
