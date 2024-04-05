let currentUser = null; 
function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    localStorage.setItem(username, password);  
    document.getElementById('registration').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}
function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;  
    const storedPassword = localStorage.getItem(loginUsername);
    if (storedPassword === loginPassword) {
        currentUser = loginUsername;
        document.getElementById("loginForm").reset();
        document.getElementById('login').style.display = 'block';
        document.getElementById("securedPage").classList.remove("hidden");
       
    } else {
        alert('Invalid username or password');
    }
}