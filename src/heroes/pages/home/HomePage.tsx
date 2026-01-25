import { useMemo, use } from 'react'
import { useSearchParams } from 'react-router'
import { usePaginatedHero } from '@/heroes/hooks/usePaginatedHero'
import { useSummary } from '@/heroes/hooks/useSummary'
import { FavoriteHeroContext } from '@/heroes/context/FavoriteHeroContext'
import { Heart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Jumbotron } from '@/components/custom/Jumbotron'
import { HeroStats } from '@/heroes/components/HeroStats'
import { HeroGrid } from '@/heroes/components/HeroGrid'
import { Pagination } from '@/components/custom/Pagination'
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb'

export const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { favoritesCount, favorites } = use(FavoriteHeroContext);
    const activeTab = searchParams.get('tab') ?? 'all';
    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limit') ?? '6';
    const category = searchParams.get('category') ?? 'all';

    const selectedTab = useMemo(() => {
        const validTabs = ['all', 'favorites', 'heroes', 'villains'];
        return validTabs.includes(activeTab) ? activeTab : 'all';
    }, [activeTab]);

    const { data: heroesResonse } = usePaginatedHero(page, limit, category);
    const { data: summary } = useSummary();

    const handleTabClick = (tab: string, category: string) => setSearchParams(prev => {
        prev.set('tab', tab);
        prev.set('category', category);
        prev.set('page', '1');
        return prev;
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
                    <TabsTrigger value="all" onClick={ () => handleTabClick('all', 'all') }>Todos los Personajes ({ summary?.totalHeroes })</TabsTrigger>
                    <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={ () => setSearchParams(prev => {
                        prev.set('tab', 'favorites');
                        prev.set('page', '1');
                        return prev;
                    }) }>
                        <Heart className="h-4 w-4" /> Favoritos ({ favoritesCount })
                    </TabsTrigger>
                    <TabsTrigger value="heroes" onClick={ () => handleTabClick('heroes', 'hero') }>Héroes ({ summary?.heroCount })</TabsTrigger>
                    <TabsTrigger value="villains"onClick={ () => handleTabClick('villains', 'villain') }>Villanos ({ summary?.villainCount })</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <HeroGrid heroes={ heroesResonse?.heroes ?? [] } />
                </TabsContent>
                <TabsContent value="favorites">
                    <HeroGrid heroes={ favorites } />
                </TabsContent>
                <TabsContent value="heroes">
                    <HeroGrid heroes={ heroesResonse?.heroes ?? [] } />
                </TabsContent>
                <TabsContent value="villains">
                    <HeroGrid heroes={ heroesResonse?.heroes ?? [] } />
                </TabsContent>
            </Tabs>

            {/* Pagination */}
            {
                selectedTab !== 'favorites' && (<Pagination totalPages={ heroesResonse?.pages ?? 1 } />)
            }
        </>
    );
}
