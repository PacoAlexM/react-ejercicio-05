import { heroApi } from '@/heroes/api/hero.api'

export const getHeroesByPage = async () => {
    const { data } = await heroApi.get('/');

    return data;
}
