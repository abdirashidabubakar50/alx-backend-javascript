import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((results) => {
      results.map((result) => {
        if (result.status === 'fulfilled') {
          return {
            value: result.value,
          };
        }
        return String(result.reason);
      });
    });
}
