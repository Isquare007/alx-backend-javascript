import signUpuser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
    const photo = uploadPhoto(fileName);
    const user = signUpuser(firstName, lastName);

    return Promise.allSettled([user, photo]).then((res) => res.map((data) => ({
        status: data.status,
        value: data.status === 'fulfilled' ? data.value : String(data.reason)
    })));
}