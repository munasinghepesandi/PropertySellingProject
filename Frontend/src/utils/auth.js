// Google OAuth Configuration
// Get this from Google Cloud Console: https://console.cloud.google.com
export const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'

// Facebook OAuth Configuration  
// Get this from Facebook Developers: https://developers.facebook.com
export const FACEBOOK_APP_ID = 'YOUR_FACEBOOK_APP_ID'

// API endpoints
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

const AUTH_TOKEN_KEY = 'authToken'
const AUTH_USER_KEY = 'authUser'

function storeSession(data) {
  if (data?.token) {
    localStorage.setItem(AUTH_TOKEN_KEY, data.token)
  }

  if (data?.data) {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(data.data))
  }
}

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
    
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data?.message || 'Login failed')
    }

    storeSession(data)
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
    
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data?.message || 'Registration failed')
    }

    storeSession(data)
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
    storeSession(data)
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
    storeSession(data)
    return data
  } catch (error) {
    console.error('Facebook login error:', error)
    throw error
  }
}

// Logout function
export function logout() {
  localStorage.removeItem(AUTH_TOKEN_KEY)
  localStorage.removeItem(AUTH_USER_KEY)
}

// Get stored token
export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY)
}

export function getAuthUser() {
  const value = localStorage.getItem(AUTH_USER_KEY)
  return value ? JSON.parse(value) : null
}

// Check if user is authenticated
export function isAuthenticated() {
  return !!getAuthToken()
}
