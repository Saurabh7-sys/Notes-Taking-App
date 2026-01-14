const LATEST_VERSION = 6;
const APK_URL = "https://notes-taking-app-283p.onrender.com/apk/locApp-release.apk";

const checkUpdate = (req, res) => {
  const { versionCode } = req.body;

  if (typeof versionCode !== "number") {
    return res.status(400).json({
      error: "versionCode is required and must be a number"
    });
  }

  if (versionCode < LATEST_VERSION) {
    return res.status(200).json({
      updateAvailable: true,
      latestVersionCode: LATEST_VERSION,
      apkUrl: APK_URL,
      forceUpdate: true 
    });
  }

  return res.status(200).json({
    updateAvailable: false,
    latestVersionCode: LATEST_VERSION
  });
};

module.exports = { checkUpdate };



