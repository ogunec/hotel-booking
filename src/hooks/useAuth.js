import { useCookies, } from 'react-cookie'
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
    const [cookies, setCookie,removeCookie] = useCookies()

    function login(user) {
        setCookie("user", user);
    }

    function logout() {
        removeCookie("user");
    }

    return {
        login,
        logout,
        user: cookies.user
    }
}
