Устанавливаем GRUNT глобально. Это делается один раз:
```
npm install -g grunt-cli
```
Инициализируем файл package.json:
```
npm init
```
Заходим в PowerShell от имени администратора и пишем:
```
Set-ExecutionPolicy RemoteSigned
```
Это нужно для того, чтобы избежать ошибки при запуске задач
Создаём Gruntfile.js со следующим содержимым:
```
module.exports = function(grunt){

    grunt.initConfig({});

    grunt.registerTask('run', function(){
        console.log("i am running");
    });

    grunt.registerTask('sleep', function(){
        console.log("i am sleeping");
    });
}
```
