const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav .nav-links');

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('hide-nav-links')
});

function SignedIn(user){
    signInButtons.forEach(button=>{
        button.classList.add('d-none');
    });

    signedIn.forEach(elem=>{
        elem.classList.remove('d-none');
    });
    userImgSections.forEach(userImg=>{
        userImg.src = user.photoURL
    })
}

function SignedOut(){
    signInButtons.forEach(button=>{
        button.classList.remove('d-none')
    });

    signedIn.forEach(elem=>{
        elem.classList.add('d-none');
    });

}

const signInButtons = document.querySelectorAll('.sign-in');
const signOutButtons = document.querySelectorAll('.sign-out');
const signedIn = document.querySelectorAll('.signed-in');
const userImgSections = document.querySelectorAll('.user-img');
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

signInButtons.forEach(button=>{
    button.addEventListener('click',async ()=>{
        const result = await auth.signInWithPopup(provider);
    });
});

signOutButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        auth.signOut()
    });
});

// To sign out: auth.signOut()

auth.onAuthStateChanged(user=>{
    if(user){
        SignedIn(user)
        
    }else{
        // not signed in
        SignedOut()
    }
})