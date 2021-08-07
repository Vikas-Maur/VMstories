function signIn(user) {
    signInButton.classList.add("d-none");
    accountDropdown.classList.remove("d-none");
    userImg.src = user.photoURL;
  }
  
  function signOut() {
      signInButton.classList.remove("d-none");
      accountDropdown.classList.add("d-none");
  }
  
  const analytics = firebase.analytics();
  
  const perf = firebase.performance();
  
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  const userImg = document.querySelector(".user-img");
  const accountDropdown = document.querySelector(".account-dropdown");
  const signInButton = document.querySelector(".sign-in");
  const signOutButton = document.querySelector(".sign-out");
  
  signInButton.addEventListener("click", () => {
    auth.signInWithPopup(provider);
  });
  
  signOutButton.addEventListener("click", () => {
    auth.signOut();
  });
  
  auth.onAuthStateChanged((user) => {
    if (user) {
      signIn(user);
    } else {
      signOut();
    }
  });
  