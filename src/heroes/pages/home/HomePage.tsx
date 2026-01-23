import { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { Heart } from "lucide-react"
import { getHeroesByPageAction } from '@/heroes/actions/get-heroes-by-page.action'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Jumbotron } from '@/components/custom/Jumbotron'
import { HeroStats } from '@/heroes/components/HeroStats'
import { HeroGrid } from '@/heroes/components/HeroGrid'
import { Pagination } from '@/components/custom/Pagination'
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb'

export const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') ?? 'all';
    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limit') ?? '6';

    const selectedTab = useMemo(() => {
        const validTabs = ['all', 'favorites', 'heroes', 'villains'];
        return validTabs.includes(activeTab) ? activeTab : 'all';
    }, [activeTab]);

    const { data: heroesResonse } = useQuery({
        queryKey: ['heroes'],
        queryFn: () => getHeroesByPageAction(+page, +limit),
        staleTime: (1000 * 60) * 5,
    });

    // useEffect(() => {
    //     getHeroesByPage().then((data) => {});
    // }, []);

    // console.log(heroesResonse);

    return (
        <>
            {/* Header */}
            <Jumbotron title="Universo de Super Héroes" description="Descubre, explora, y administra tus super héroes y villanos favorítos" />

            { /* Breadcrumb */ }
            <CustomBreadcrumb currentPage="Super Héroes" />

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Tabs */}
            <Tabs value={ selectedTab } className="mb-8">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all" onClick={ () => setSearchParams(prev => {
                        prev.set('tab', 'all');
                        return prev;
                    }) }>Todos los Personajes (16)</TabsTrigger>
                    <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={ () => setSearchParams(prev => {
                        prev.set('tab', 'favorites');
                        return prev;
                    }) }>
                        <Heart className="h-4 w-4" /> Favoritos (3)
                    </TabsTrigger>
                    <TabsTrigger value="heroes" onClick={ () => setSearchParams(prev => {
                        prev.set('tab', 'heroes');
                        return prev;
                    }) }>Héroes (12)</TabsTrigger>
                    <TabsTrigger value="villains"onClick={ () => setSearchParams(prev => {
                        prev.set('tab', 'villains');
                        return prev;
                    }) }>Villanos (2)</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <HeroGrid heroes={ heroesResonse?.heroes ?? [] } />
                </TabsContent>
                <TabsContent value="favorites">
                    <h1>Favoritos</h1>
                </TabsContent>
                <TabsContent value="heroes">
                    <h1>Héroes</h1>
                </TabsContent>
                <TabsContent value="villains">
                    <h1>Villanos</h1>
                </TabsContent>
            </Tabs>

            {/* Pagination */}
            <Pagination totalPages={ 9 } />
        </>
    );
}
