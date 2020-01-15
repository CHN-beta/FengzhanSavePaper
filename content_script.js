var element = document.querySelector('table');
console.log("凤展省纸已经启动，将删除以下元素");
console.log(element);
element.parentElement.removeChild(element);