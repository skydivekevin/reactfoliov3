export default function setParticlesHook() {
  let numParts;
  window.innerWidth >= 420 ? (numParts = 500) : (numParts = 30);
  return numParts;
}
