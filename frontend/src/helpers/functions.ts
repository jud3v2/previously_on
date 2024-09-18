import axios from "axios";

export function checkUser() {
    return localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')!)
        : undefined
}

export function fetchUserData() {
    return checkUser() ? axios.get('/members/infos').then(r => r.data.member) : checkUser();
}

export function isConnected() {
    return checkUser() !== undefined
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href = '/login'
}

export function protectedPage() {
    if (!isConnected() && window.location.pathname !== '/login') {
         window.location.href = '/login'
    }
}

export function setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user))
}