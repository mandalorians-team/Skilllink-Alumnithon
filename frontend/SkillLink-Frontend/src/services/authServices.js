const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (userData) => {
  try{
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),

  });

  if (!response.ok) {
    throw new Error("Error al registrar el usuario");
  }

  return await response.json();
} catch (error) {
  console.error("Error al registrar el usuario:", error.message);
  throw error;
}
}