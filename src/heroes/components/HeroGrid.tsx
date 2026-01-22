import { HeroGridCard } from './HeroGridCard'
import type { Hero } from '@/heroes/interfaces/heroe.interface'

interface Props {
    heroes?: Hero[] | undefined;
}

export const HeroGrid = ({ heroes }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* <HeroGridCard characterName="Superman" realName="Clark Kent" team="Justice League" type="Héroe" universe="DC" firstAppeared={ 1938 } strengthPoints={ 100 } intelligencePoints={ 80 } speedPoints={ 90 } durabilityPoints={ 100 } active={ true } powers={ ['Super Fuerza', 'Habilidad para Volar', 'Super Velocidad', 'Aliento Hélido', 'Visión Láser', 'Super Oído'] } description="El último hijo de Krypton, protector de la Tierra y símbolo de esperanza de la humanidad." /> */}
            {
                heroes?.map(heroe => (
                    <HeroGridCard key={ heroe.id } characterName={ heroe.alias } realName={ heroe.name } team={ heroe.team } type={ heroe.category } universe={ heroe.universe } firstAppeared={ heroe.firstAppearance } strengthPoints={ heroe.strength } intelligencePoints={ heroe.intelligence } speedPoints={ heroe.speed } durabilityPoints={ heroe.durability } active={ true } powers={ heroe.powers } description={ heroe.description } />
                ))
            }
        </div>
    );
}
