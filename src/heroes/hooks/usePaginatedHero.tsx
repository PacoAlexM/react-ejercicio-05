import { useQuery } from '@tanstack/react-query'
import { getHeroesByPageAction } from '@/heroes/actions/get-heroes-by-page.action'

export const usePaginatedHero = (page: string = '1', limit: string = '6', category: string = 'all') => useQuery({
    queryKey: ['heroes', { page, limit, category }],
    queryFn: () => getHeroesByPageAction(+page, +limit, category),
    staleTime: (1000 * 60) * 5,
});
