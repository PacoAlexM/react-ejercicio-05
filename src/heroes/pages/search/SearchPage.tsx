import { Jumbotron } from '@/components/Custom/Jumbotron'
import { HeroStats } from '@/heroes/components/HeroStats'
import { SearchControls } from './ui/SearchControls'

export const SearchPage = () => {
    return (
        <>
            <Jumbotron title="Búsqueda de Super Héroes" description="Descubre, explora, y administra tus super héroes y villanos favorítos" />

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Filter and Search */}
            <SearchControls />
        </>
    );
}
