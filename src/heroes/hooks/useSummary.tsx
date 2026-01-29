import { useQuery } from '@tanstack/react-query'
import { getSummaryAction } from '@/heroes/actions/get-summary.action'

export const useSummary = () => useQuery({
    queryKey: ['summary-information'],
    queryFn: getSummaryAction,
    staleTime: (1000 * 60) * 5,
});
