const URL = 'https://lmcurrency-api.herokuapp.com/';
const endpoints = {
    today: `${URL}/today`,
    lastWeek: `${URL}/lastWeek`,
    lastMonth: `${URL}/lastMonth`,
    byDate: `${URL}/byDate?`,
    last: `${URL}/last`,
}

export async function getLastHours(){
    try{
        const res = await fetch(endpoints.today, {
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
        })
        if(!res.ok){
            throw new Error(`Erro ao obter informações das ultimas horas ${res.status}`)
        }
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}
export async function getLastWeek(){
    try{
        const res = await fetch(endpoints.lastWeek, {
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
        })
        if(!res.ok){
            throw new Error(`Erro ao obter informações da semana ${res.status}`)
        }
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}
export async function getLastMonth(){
    try{
        const res = await fetch(endpoints.lastMonth, {
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
        })
        if(!res.ok){
            throw new Error(`Erro ao obter informações do mês ${res.status}`)
        }
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}
export async function getByDate(startDate,finalDate){
    try{
        const res = await fetch(endpoints.byDate + `startDate=${startDate}&finalDate=${finalDate}`, {
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
        })
        if(!res.ok){
            throw new Error(`Erro ao obter informações das datas ${res.status}`)
        }
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}

export async function getLast(){
    try{
        const res = await fetch(endpoints.last , {
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
        })
        if(!res.ok){
            throw new Error(`Erro ao obter informações das datas ${res.status}`)
        }
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}