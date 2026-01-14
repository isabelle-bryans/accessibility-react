import { create } from 'zustand'
import allCats from './cats/index.jsx'

const useCatStore = create((set, get) => ({
    cats: [allCats[0]],
    points: 0,
    feedCats: () => {
        const newPoints = get().points + 1
        let unlockedCats = [...get().cats]
        
        const nextCat = allCats.find(
        (cat) => cat.pointsRequired <= newPoints && !unlockedCats.includes(cat)
        )

        if (nextCat) {
        unlockedCats.push(nextCat);
        }

        set({ points: newPoints, cats: unlockedCats });
        return nextCat
    },
    resetNursery: () => {
        set({ cats: [allCats[0]], points: 0 });
    }
}))

export default useCatStore;
