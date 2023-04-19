/**
 **** start working project
 * ------------------------------
 **  react router setup
 * ------------------------------
 * 1. create project file
 * 2. react router install
 * 3. vs code editor open
 * 4. npm run dev
 * 5. output display show
 * 6. setup nested router path
 * 
 ** goto firebase website
 * ----------------------
 * 1. get started
 * 2. add project
 * 3. create project same name
 * 4. Enable Google Analytics for this project Recommended ok ache disable korte hobe
 * 5. create project / register
 * 6. continue
 * 7. goto web
 * 8. Register app
 * 9. npm install firebase
 * 10. add config file to this project (firebase.config.js)
 * 11. export default app (firebase.config.js)
 * 12. continue to console
 * 
 * firebase 1st step
 * ---------------------
 * visit: Docs > Build > Authentication > Web > Get Started
 * 1. Login.jsx: import { getAuth } from "firebase/auth";
 * 2. create: const auth = getAuth(app);
 * 
 * google login 2nd step
 * ----------------
 * 1. import { GoogleAuthProvider } from "firebase/auth";
 * 2. create: const provider = new GoogleAuthProvider();
 * handle google button 
 * --------------------------
 * 3. import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
 * 4. signInWithPopup(auth, provider)
 * 5. activate sign-in method (email/password, google, github, facebook, twitter)
 * 
 * show the display user information
 * -----------------------------------
 * 1. create state: const [user, setUser] = useState(null);
 * 2. use logical && condition
 * 
 * github login
 * -----------------------
 * 1. my github profile
 * 2. developer settings
 * 3. new GitHub App
 * 4. Register new GitHub App
 * ----------------------------
 * 1. project name
 * 2. test preview
 * 3. Homepage URL
 * 4. Callback URL from github firebase
 * 5. checkbox active ache unactive korte hobe
 * 6. create github app
 * 7. firebase github enable
 * 8. my github profile Client ID paste korte hobe firebase github Client ID
 * 9. my github profile Generate a new client secret btn click and show the Client secrets url
 * 10. my github profile Generate a new client secret paste korbo firebase github Client secret
 * 11. save 
 * 
 * handle github button 
 * ----------------
 * 12. import { GithubAuthProvider } from "firebase/auth";
 * 13. create const provider = new GithubAuthProvider();
*/