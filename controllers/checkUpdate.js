const LATEST_VERSION = 11;
const APK_URL = "https://notes-taking-app-283p.onrender.com/apk/locApp-release.apk";

const checkUpdate = (req, res) => {
  // const { versionCode } = req.body;
  console.log("=== CHECK UPDATE HIT ===");
  console.log("Raw body:", req.body);
  const versionCode = Number(req.body.versionCode);

  console.log("Parsed versionCode:", versionCode);
  console.log("Latest version:", LATEST_VERSION);
  if (typeof versionCode !== "number") {
      console.log("❌ versionCode is NaN");
    return res.status(400).json({
      error: "versionCode is required and must be a number"
    });
  }

  if (versionCode < LATEST_VERSION) {
     console.log("✅ UPDATE AVAILABLE");
    return res.status(200).json({
      updateAvailable: true,
      latestVersionCode: LATEST_VERSION,
      apkUrl: APK_URL,
      forceUpdate: true
    });
  }
    console.log("ℹ️ App is up to date");

  return res.status(200).json({
    updateAvailable: false,
    latestVersionCode: LATEST_VERSION
  });
};

module.exports = { checkUpdate };



