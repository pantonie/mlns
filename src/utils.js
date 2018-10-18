export function getDate(){
    const months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
    const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    const today = new Date();
    return `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}, ${days[today.getDay()]}, `
}

export function getNewsDate(){
    const months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
    const today = new Date();
    const time = (today.getHours() < 10 ? '0'+today.getHours() : today.getHours()) + ':' + (today.getMinutes() < 10 ? '0'+today.getMinutes() : today.getMinutes())
    return `${time}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`
}