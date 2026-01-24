import { useQuery } from '@tanstack/react-query'
import { getSummaryAction } from '@/heroes/actions/get-summary.action'

export const useSummary = () => useQuery({
    queryKey: ['summary-informatio'],
    queryFn: getSummaryAction,
    staleTime: (1000 * 60) * 5,
});
