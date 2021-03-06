$(document).ready(function () {
    var articleContainer = $(".article-container");

    $(document).on("click", ".btn.delete", handleArticleDelete);
    $(document).on("click", ".btn.notes", handleArticleNotes);
    $(document).on("click", ".btn.save", handleNoteSave);
    $(document).on("click", ".btn.note-delete", handleNoteDelete);

    initPage();

    function initPage() {
        articleContainer.e, pty();
        $.get("/api/headlines?saved=true").then(function (data) {
            if (data && data.length) {
                renderArticles(data);
            } else {
                renderEmpty();
            }
        });
    }

    function renderArticles(articles) {
        var articlePanels = [];
        for (var i = 0; i < articles.length; i++) {
            articlePanels.push(createPanel(articles[i]));
        }
    }

    function createPanel(article) {
        var panel = $(["<div class='panel panel-default'>", "<div class='panel-heading'>", "<h3>", article.headline, "<a class='btn btn-danger delete'>", "Delete From Saved", "</a>", "</h3>", "</div>", "</div>"].join(""));

        panel.data("_id", article._id);

        return panel;
    }
})