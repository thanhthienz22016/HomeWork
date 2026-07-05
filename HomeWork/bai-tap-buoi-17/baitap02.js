function isValidComment(comment) {
    if (!comment.user || comment.user.trim() === "") return false;
    if (!comment.content || comment.content.trim().length < 5) return false;
    if (typeof comment.rating !== "number" || comment.rating < 1 || comment.rating > 5) return false;
    return true;
}

function filterValidComments(comments) {
    const valid = [];
    for (let i = 0; i < comments.length; i++) {
        if (isValidComment(comments[i])) {
            valid.push(comments[i]);
        }
    }
    return valid;
}

function getCommentStats(validComments) {
    let total = validComments.length;
    let sumRating = 0;
    let totalLikes = 0;
    let verifiedCount = 0;
    let topComment = null;

    if (total === 0) {
        return { total: 0, avgRating: 0, totalLikes: 0, verifiedCount: 0, topComment: null };
    }

    for (let i = 0; i < total; i++) {
        const c = validComments[i];
        sumRating += c.rating;
        totalLikes += c.likes;
        if (c.verified) verifiedCount++;
        if (!topComment || c.likes > topComment.likes) {
            topComment = c;
        }
    }
    
    let avgRating = Number((sumRating / total).toFixed(1));
    return { total, avgRating, totalLikes, verifiedCount, topComment };
}

function formatComment(comment) {
    const stars = "⭐".repeat(comment.rating);
    const verifiedMark = comment.verified ? " ✓" : "";
    const displayName = comment.user ?? "Ẩn danh";
    return `${stars} | ${displayName}${verifiedMark} | ${comment.content.trim()} | 👍 ${comment.likes}`;
}