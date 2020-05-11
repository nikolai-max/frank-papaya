export const addPointsToScore = (score, pointsToAdd) => {
    if (pointsToAdd === 0) {
        return 0
    } else {
        return score += pointsToAdd
    }
}