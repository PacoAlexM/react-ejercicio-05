import { heroApi } from '@/heroes/api/hero.api'
import type { SummaryInformationResponse } from '@/heroes/interfaces/summary-information.response'

export const getSummaryAction = async () => {
    const { data } = await heroApi.get<SummaryInformationResponse>('/summary');

    return data;
}
