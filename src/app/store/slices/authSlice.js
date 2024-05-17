import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { register, login, resetPassword, logout } from '@services/authService';
import { AUTH_REGISTER_USER, AUTH_LOGIN_USER, AUTH_RESET_PASSWORD, AUTH_LOGOUT_USER } from '@store/types/actionTypes';

const saveUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};
  
const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
};

export const registerUser = createAsyncThunk(AUTH_REGISTER_USER, async ({ email, password }, thunkAPI) => {
    try {
      const user = await register( email, password);
      saveUserToLocalStorage(user);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
});
  
export const loginUser = createAsyncThunk(AUTH_LOGIN_USER, async ({ email, password }, thunkAPI) => {
    try {
      const user = await login(email, password);
      saveUserToLocalStorage(user);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
});
  
export const resetUserPassword = createAsyncThunk(AUTH_RESET_PASSWORD, async ({ email }, thunkAPI) => {
    try {
      await resetPassword(email);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
});
  
export const logoutUser = createAsyncThunk(AUTH_LOGOUT_USER, async ( _, thunkAPI) => {
    try {
      await logout();
      removeUserFromLocalStorage();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    
    initialState: {
      user: JSON.parse(localStorage.getItem('user')) || null,
      status: 'idle',
      error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(registerUser.fulfilled, (state, action) => {
          state.user = action.payload;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.user = action.payload;
        })
        .addCase(logoutUser.fulfilled, (state) => {
          state.user = null;
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.error = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.error = action.payload;
        })
        .addCase(resetUserPassword.rejected, (state, action) => {
          state.error = action.payload;
        })
        .addCase(logoutUser.rejected, (state, action) => {
          state.error = action.payload;
        });
    },
});
  
export default authSlice.reducer;