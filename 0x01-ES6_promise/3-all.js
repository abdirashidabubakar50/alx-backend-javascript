import { uploadPhoto, createUser } from './utils';

const photo = uploadPhoto();
const Name = createUser();

export default function handleProfileSignup() {
  Promise.all([photo, Name])
    .then(([photo, name]) => {
      const { body } = photo;
      const { firstName } = name;
      const { lastName } = name;

      console.log(body, firstName, lastName);
    })
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}
