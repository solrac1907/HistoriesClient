const { request } = require('../actions/request')

export const getHistCliente = async (dataInfo) => {
    const { data } = await request(`cliente`, 'POST', dataInfo).catch((error) => console.log('**reguestAxios', error))
    return data
}

export const getHistTramos = async (dataInfo) => {
    const { data } = await request(`tramos`, 'POST', dataInfo).catch((error) => console.log('**reguestAxios', error))
    return data
}

export const getTramosTramosForClient = async (dataInfo) => {
    const { data } = await request(`tramos-cliente`, 'POST', dataInfo).catch((error) => console.log('**reguestAxios', error))
    return data
}