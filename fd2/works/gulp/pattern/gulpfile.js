// подключение модулей gulp
var gulp = require('gulp'); // всегда первым должно быть это подключение

var browserSync = require('browser-sync'); // тут подключаем доп. модули
var rigger = require('gulp-rigger');

// дефолтная задача, если в консоли набрать gulp и нажать [enter] - запустится именно она. Можно переопределить.
gulp.task('default', function() {
    console.log('А вот дефолтная задача!');
});

// пример создания своей задачи. Вызвать можно так: #$ gulp newTask
gulp.task('newTask', function() {
    console.log('А вот и еще одна дефолтная задача!');
});

gulp.task('js', function() {
    console.log('Файлы js поменялись!');
});

gulp.task('css', function() {
    console.log('Файлы css поменялись!');
});

gulp.task('html', function() {
    console.log('Файлы html поменялись!');
});


// задача rigger пропускает файлы через модуль rigger
// этот модуль позволяет вставлять одни файлы в другие с помощью простой конструкции вида "//= path_to/file.html"
// в данной задаче происходит обработка всех файлов с расширением js из папки app/js и всех подпапок в app/js
// аналогично - css
// html - файлы берем только из каталога app
// но можем подключать и другие каталоги, например, для обработки шаблонов
// gulp.src('path_to_file') - откуда берем файлы
//     .pipe(rigger()) - через какой модуль их пропускаем
//     .pipe(gulp.dest('dir')) - каталог, куда складываем, !!! конечный слеш обязателен
gulp.task('rigger', function(){
    gulp.src('app/js/**/*.js')
        .pipe(rigger())
        .pipe(gulp.dest('dist/js/'));
        
    gulp.src('app/css/**/*.css')
        .pipe(rigger())
        .pipe(gulp.dest('dist/css/'));
        
    gulp.src('app/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('dist/'));
});

// задача browser-sync - запуск сервера для отображения изменений в файлах в режиме онлайн (не надо рефрешить)
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'dist' // это каталог, из которого будут выбираться файлы для отдачи в браузер
        },
        port: 8082, // для c9.io открыты порты 8081, 8082
    });
});

// задача reload - перезапускает browser-sync для корректного отображения изменений
gulp.task('reload',['rigger'],function(){
    browserSync.reload();
})

// задача watch - отслеживание файлов на сервере
// передаваемый массив параметров ['browser-sync', 'js', 'css', 'html', 'rigger'] 
// - список задач, которые необходимо выполнить перед запуском наблюдения
// gulp.watch('app/js/**/*.js', ['js', 'reload']); - отслеживаем все файлы с расширением js в папке app/js и во всех вложенных папках
// в случае изменения сущестующих или появления новых файлов - выполняем задачи js(вывод в консоль сообщения) и reload - перезапуск browser-sync 
// аналогично по css и html
gulp.task('watch', ['browser-sync', 'js', 'css', 'html', 'rigger'], function() {
    gulp.watch('app/js/**/*.js', ['js', 'reload']);
    gulp.watch('app/css/**/*.html', ['css', 'reload']);
    gulp.watch('app/**/*.html', ['html', 'reload']);

});
