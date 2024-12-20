import AuthForm from "@/components/AuthForm";
import { getLoggedInUser } from "@/lib/actions/user.action";

const SignUp = async () => {
    const loggedIn = await getLoggedInUser();

console.log(getLoggedInUser)

    return (
        <section className="flex-center">
            <AuthForm type="sign-up"/>
        </section>
    )
}

export default SignUp