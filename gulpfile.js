import gulp from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import browserSync from "browser-sync";
import webpackStream from "webpack-stream";
import babel from "gulp-babel";
import imagemin from "gulp-imagemin";
import fs from "fs";

const sass = gulpSass(dartSass);
const bs = browserSync.create();

function ensureImagesFolder(cb) {
  const imgPath = "dist/images";
  if (!fs.existsSync(imgPath)) {
    fs.mkdirSync(imgPath, { recursive: true });
    console.log("Folderul dist/images a fost creat.");
  }
  cb();
}

function images(cb) {
  ensureImagesFolder(() => {
    gulp
      .src("images/**/*.{jpg,png,svg,gif,webp}")
      .pipe(imagemin())
      .pipe(gulp.dest("dist/images"))
      .on("end", () => {
        console.log("Imaginile au fost copiate cu succes!");
        cb();
      });
  });
}

function styles() {
  return gulp
    .src("src/scss/style.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(bs.stream());
}

function scripts() {
  return gulp
    .src("src/js/main.js")
    .pipe(
      webpackStream({
        mode: "production",
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
          ],
        },
      })
    )
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(gulp.dest("dist/js"))
    .pipe(bs.stream());
}

function html() {
  return gulp.src("src/index.html").pipe(gulp.dest("dist")).pipe(bs.stream());
}

function serve() {
  bs.init({
    server: {
      baseDir: ["dist", "public"],
    },
  });

  gulp.watch("src/scss/**/*.scss", styles);
  gulp.watch("src/js/**/*.js", scripts);
  gulp.watch("src/index.html", html);
  gulp.watch("images/**/*.{jpg,png,svg,gif,webp}", images);
}

const build = gulp.series(
  ensureImagesFolder,
  gulp.parallel(styles, scripts, html, images)
);
export default gulp.series(build, serve);
export { build };
