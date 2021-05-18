import './Login.css';
import userService from '../../services/userService';

const GITHUB_CLIENT_ID = '';
const githubRedirectURL = '';
const path = '';
const gitHubAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${githubRedirectURL}?path=${path}&scope=user:email`;

function LoginPage() {
    const handleSignIn = async () => {
        try {
            await userService.saveUser(gitHubAuthURL);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login">
            <button onClick={handleSignIn}>LOGIN WITH GITHUB</button>
        </div>
    );
}

export default LoginPage;

// <div className="login_app">
//     <Rooms user={user} />
//     <Chat user={user} />
// </div>
