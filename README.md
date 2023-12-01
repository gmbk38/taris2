Устанавливаем GRUNT глобально. Это делается один раз:
```bash
npm install -g grunt-cli
```
Инициализируем файл package.json:
```bash
npm init
```
Заходим в PowerShell от имени администратора и пишем:
```bash
Set-ExecutionPolicy RemoteSigned
```
Это нужно для того, чтобы избежать ошибки при запуске задач
Создаём Gruntfile.js со следующим содержимым:
```js
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
Запустить задачу можно с помощью её названия
```bash
grunt run
```
