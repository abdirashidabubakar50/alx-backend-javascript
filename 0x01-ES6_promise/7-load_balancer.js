export default function loadBalancer(chinaDownload, USDonwload) {
  const firstSettled = Promise.race([chinaDownload, USDonwload]);
  return firstSettled;
}
