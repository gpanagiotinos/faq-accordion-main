const articles = ["article-1", "article-2", "article-3", "article-4"];
const onClickArticle = (clickedArticleId, event) => {
  articles.forEach((articleId) => {
    const articleEl = document.getElementById(articleId);
    const currentClass = articleEl.className.split(" ");
    if (clickedArticleId === articleId) {
      if (currentClass.indexOf("hidden") < 0) {
        articleEl.classList.add("hidden", "switch-to-plus-icon");
      } else {
        articleEl.classList.remove("hidden");
        articleEl.classList.add("switch-to-minus-icon");
      }
    } else {
      if (currentClass.indexOf("hidden") < 0) {
        articleEl.classList.add("hidden", "switch-to-plus-icon");
        articleEl.classList.remove("switch-to-minus-icon");
      }
    }
  });
};
const main = () => {
  articles.forEach((articleId) => {
    const articleEl = document.getElementById(articleId);
    articleEl.onclick = onClickArticle.bind(this.onClickArticle, articleId);
  });
};
main();
