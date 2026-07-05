function getTotalScore(player) {
    let total = 0;
    for (let i = 0; i < player.scores.length; i++) {
        total += player.scores[i];
    }
    return total;
}

function getRanking(players) {
    const rankedPlayers = [];
    for (let i = 0; i < players.length; i++) {
        const p = players[i];
        rankedPlayers.push({
            name: p.name,
            totalScore: getTotalScore(p),
            badge: p.badge === null ? "none" : p.badge
        });
    }
    
    rankedPlayers.sort((a, b) => b.totalScore - a.totalScore);
    
    for (let i = 0; i < rankedPlayers.length; i++) {
        rankedPlayers[i].rank = i + 1;
    }
    
    return rankedPlayers;
}

function getTopPlayers(players, n) {
    const ranked = getRanking(players);
    const top = [];
    const limit = n > ranked.length ? ranked.length : n;
    
    for (let i = 0; i < limit; i++) {
        top.push(ranked[i].name);
    }
    return top;
}

function formatPlayerCard(player) {
    const totalScore = getTotalScore(player);
    let badgeStr = "";
    
    if (player.badge === "diamond") badgeStr = " | 💎 DIAMOND";
    else if (player.badge === "gold") badgeStr = " | 🏅 GOLD";
    else if (player.badge === "silver") badgeStr = " | 🥈 SILVER";

    return `${player.name} | Lv.${player.level} | ${totalScore} điểm${badgeStr}`;
}