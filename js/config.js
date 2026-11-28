// Tutor settings. After deploying the worker (see worker/README.md), paste its URL here so students don't have to.
// Leave tutorUrl empty to hide the AI tutor entirely.
window.PH_CONFIG = {
  tutorUrl: "",
  dailyTurns: 80,    // soft per-device daily limit on tutor questions
  noNetwork: false   // true in the hosted claude.ai artifact build, which cannot call outside servers
};
