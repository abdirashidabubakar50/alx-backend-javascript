import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Call the signUpUser and uploadPhoto functions
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to handle both promises
  const results = await Promise.allSettled([userPromise, photoPromise]);
  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
}
