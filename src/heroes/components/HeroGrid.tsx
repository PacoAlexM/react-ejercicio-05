import { HeroGridCard } from './HeroGridCard'

export const HeroGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <HeroGridCard characterName="Superman" realName="Clark Kent" team="Justice League" type="Héroe" universe="DC" firstAppeared={ 1938 } strengthPoints={ 100 } intelligencePoints={ 80 } speedPoints={ 90 } durabilityPoints={ 100 } active={ true } powers={ ['Super Fuerza', 'Habilidad para Volar', 'Super Velocidad', 'Aliento Hélido', 'Visión Láser', 'Super Oído'] } description="El último hijo de Krypton, protector de la Tierra y símbolo de esperanza de la humanidad." />
        </div>
    );
}
