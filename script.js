function DateMeasure(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    
    const days = d;
    const hours = h;
    const minutes = m;
    const seconds = s;

    const dateString = `faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`
    return dateString
  };

window.onload = () => {
    const timeBox = document.getElementById('tempoFerias')
    const ferias = new Date("07/17/2020")
    let today = new Date()
    let faltam = DateMeasure(ferias - today)
    
    timeBox.innerHTML = `<strong>${faltam}</strong>`

    console.log(faltam)
    
    setInterval( () => {
        let today = new Date()
        let faltam = DateMeasure(ferias - today)
        
        timeBox.innerHTML = `<strong>${faltam}</strong>`
    
        console.log(faltam)
    } , 1000 )
}