import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((results) => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          return {
            status: result.status,
            value: result.value,
          };
        }
        return result.reason;
      });
    });
}
