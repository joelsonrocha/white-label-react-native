const dotenv = require('dotenv');
const MergeDirs = require('merge-dirs');

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const env = result.parsed;

const mergeDirs = MergeDirs.default;

if (env.APP_ANDROID_ASSETS_DIR) {
  console.log(`merging android assets with ${env.APP_ANDROID_ASSETS_DIR}`);
  mergeDirs(
    env.APP_ANDROID_ASSETS_DIR,
    './android/app/src/main/res',
    MergeDirs.conflictResolvers.overwrite,
  );
} else {
  console.log(
    'Skipping merge assets for android. env variable APP_ANDROID_ASSETS_DIR not found',
  );
}

if (env.APP_IOS_ASSETS_DIR) {
  console.log(`merging android assets with ${env.APP_IOS_ASSETS_DIR}`);
  mergeDirs(
    env.APP_IOS_ASSETS_DIR,
    './ios/app/Images.xcassets',
    MergeDirs.conflictResolvers.overwrite,
  );
} else {
  console.log(
    'Skipping merge assets for ios. env variable APP_IOS_ASSETS_DIR not found',
  );
}
