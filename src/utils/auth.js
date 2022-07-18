import storage from '@/utils/storage'
const TOKEN = 'hkTOKEN'

const HuseCode = 'houseCode'
export const getToken = () => storage.get(TOKEN)

export const setToken = (token) => storage.set(TOKEN, token)

export const removeToken = () => storage.remove(TOKEN)

export const getHouseCode = () => storage.getHouseCode(HuseCode)

export const setHouseCode = (code) => storage.setHouseCode(HuseCode, code)

export const removeHouseCode = () => storage.removeHouseCode(HuseCode)
