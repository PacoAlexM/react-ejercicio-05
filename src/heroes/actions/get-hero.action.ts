import { heroApi } from '@/heroes/api/hero.api'
import type { Hero } from '@/heroes/interfaces/heroe.interface'

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroAction = async (idSlug: string): Promise<Hero> => {
    const { data } = await heroApi.get<Hero>(`/${idSlug}`);

    return { ...data, image: `${BASE_URL}/images/${data.image}` };
}
