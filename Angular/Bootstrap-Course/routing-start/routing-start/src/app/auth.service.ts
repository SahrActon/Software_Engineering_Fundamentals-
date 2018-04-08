export class  AuthService {

  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout( () => {
          resolve(this.loggedIn);
        }, 800);
    }
    );
      return promise;
  }

  // Allowing user to be logged in and out with dummy data
  login() {
    this.loggedIn = true;
  }

  logOut() {
      this.loggedIn = false;
  }
}
