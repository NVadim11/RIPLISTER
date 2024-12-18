// Імпорт основного модуля
import gulp from "gulp";
// Імпорт загальних плагінів
import { plugins } from "./config/gulp-plugins.js";
// Імпорт шляхів
import { path } from "./config/gulp-settings.js";

// Передаємо значення у глобальну змінну
global.app = {
	isBuild: process.argv.includes("--build"),
	isDev: !process.argv.includes("--build"),
	isWebP: !process.argv.includes("--nowebp"),
	isImgOpt: !process.argv.includes("--noimgopt"),
	isFontsReW: process.argv.includes("--rewrite"),
	gulp: gulp,
	path: path,
	plugins: plugins,
};

// Імпорт завдань
import { reset } from "./config/gulp-tasks/reset.js";
import { html } from "./config/gulp-tasks/html.js";
import { css } from "./config/gulp-tasks/css.js";
import { js } from "./config/gulp-tasks/js.js";
import { jsDev } from "./config/gulp-tasks/js-dev.js";
import { images } from "./config/gulp-tasks/images.js";
import { ftp } from "./config/gulp-tasks/ftp.js";
import { zip } from "./config/gulp-tasks/zip.js";
import { sprite } from "./config/gulp-tasks/sprite.js";
import { gitignore } from "./config/gulp-tasks/gitignore.js";
import { otfToTtf, ttfToWoff, fonstStyle } from "./config/gulp-tasks/fonts.js";

// New task to copy custom scripts
const copyCustomScripts = () => {
	return gulp
		.src(`${app.path.srcFolder}/custom-scripts/**/*`)
		.pipe(gulp.dest(`${app.path.buildFolder}/custom-scripts`));
};

// Послідовна обробка шрифтів
const fonts = gulp.series(reset, otfToTtf, ttfToWoff, fonstStyle);
// Основні завдання виконуватимемо паралельно після обробки шрифтів
// Порядок виконання завдань для режиму розробник
const devTasks = gulp.series(fonts, gitignore, copyCustomScripts);
// Порядок виконання завдань для режиму продакшн
let buildTasks;
if (process.argv.includes("--nowebp")) {
	buildTasks = gulp.series(
		fonts,
		jsDev,
		js,
		gulp.parallel(html, css, gitignore, copyCustomScripts)
	);
} else {
	buildTasks = gulp.series(
		fonts,
		jsDev,
		js,
		gulp.parallel(html, css, gulp.parallel(gitignore, copyCustomScripts))
	);
}

// Експорт завдань
export { html };
export { css };
export { js };
export { jsDev };
export { images };
export { fonts };
export { sprite };
export { ftp };
export { zip };
export { copyCustomScripts };

// Побудова сценаріїв виконання завдань
const development = gulp.series(devTasks);
const build = gulp.series(buildTasks);
const deployFTP = gulp.series(buildTasks, ftp);
const deployZIP = gulp.series(buildTasks, zip);

// Експорт сценаріїв
export { development };
export { build };
export { deployFTP };
export { deployZIP };

// Виконання сценарію за замовчуванням
gulp.task("default", development);
