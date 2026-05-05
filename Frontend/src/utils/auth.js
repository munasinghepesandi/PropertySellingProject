// Google OAuth Configuration
// Get this from Google Cloud Console: https://console.cloud.google.com
export const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'

// Facebook OAuth Configuration  
// Get this from Facebook Developers: https://developers.facebook.com
export const FACEBOOK_APP_ID = 'YOUR_FACEBOOK_APP_ID'

// API endpoints
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

// Login function
export async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    
    if (!response.ok) {
      throw new Error('Login failed')
    }
    
    const data = await response.json()
    // Store token in localStorage or httpOnly cookie
    localStorage.setItem('authToken', data.token)
    return data
  } catch (error) {
    console.error('Login error:', error)
    throw error
  }
}

// Register function
export async function registerUser(userData) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    
    if (!response.ok) {
      throw new Error('Registration failed')
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Registration error:', error)
    throw error
  }
}

// Google OAuth login
export async function handleGoogleLogin(credentialResponse) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: credentialResponse.credential }),
    })
    
    if (!response.ok) {
      throw new Error('Google login failed')
    }
    
    const data = await response.json()
    localStorage.setItem('authToken', data.token)
    return data
  } catch (error) {
    console.error('Google login error:', error)
    throw error
  }
}

// Facebook login
export async function handleFacebookLogin(accessToken) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/facebook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accessToken }),
    })
    
    if (!response.ok) {
      throw new Error('Facebook login failed')
    }
    
    const data = await response.json()
    localStorage.setItem('authToken', data.token)
    return data
  } catch (error) {
    console.error('Facebook login error:', error)
    throw error
  }
}

// Logout function
export function logout() {
  localStorage.removeItem('authToken')
}

// Get stored token
export function getAuthToken() {
  return localStorage.getItem('authToken')
}

// Check if user is authenticated
export function isAuthenticated() {
  return !!getAuthToken()
}
