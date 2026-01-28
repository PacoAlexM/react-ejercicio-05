import { HeroGrid } from '@/heroes/components/HeroGrid'
import { Jumbotron } from '@/components/custom/Jumbotron'
import { HeroStats } from '@/heroes/components/HeroStats'
import { SearchControls } from '@/heroes/pages/search/ui/SearchControls'
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb'

export const SearchPage = () => {
    return (
        <>
            <Jumbotron title="Búsqueda de Super Héroes" description="Descubre, explora, y administra tus super héroes y villanos favorítos" />

            { /* Breadcrumb */ }
            <CustomBreadcrumb currentPage="Búsqueda" />

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Filter and Search */}
            <SearchControls />

            {/* Results */}
            <HeroGrid heroes={[]} />
        </>
    );
}
