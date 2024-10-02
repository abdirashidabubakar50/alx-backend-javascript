export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ Status: 200, body: 'Success' });
    } else {
      reject(new Error('fake API is not working currently'));
    }
  });
}
