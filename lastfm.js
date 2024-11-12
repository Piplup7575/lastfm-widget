function getLastFmUser() {
    // delete this
    const input = document.getElementById("username");
    // replace input.value with your last.fm username
    const lastfmuser = input.value;
  
    var lastfmData = {
      baseURL:
        "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
      user: lastfmuser + "",
      // your api key
      api_key: "407ac52539dac78c152197d0f440e281",
      additional: "&format=json&limit=1",
    };
  
    $.ajax({
      type: "GET",
      url:
        lastfmData.baseURL +
        lastfmData.user +
        "&api_key=" +
        lastfmData.api_key +
        lastfmData.additional,
      dataType: "json",
      success: function (resp) {
        var recentTrack = resp.recenttracks.track[0];
        var formatted = "🔊" + recentTrack.name;
        $("a#tracktitle")
          .html(formatted)
          .attr("href", recentTrack.url)
          .attr("title", recentTrack.name + " by " + recentTrack.artist["#text"])
          .attr("target", "_blank");
  
        var artistFormatted = "👤" + recentTrack.artist["#text"];
        $("a#trackartist")
          .html(artistFormatted)
          .attr("title", "Artist : " + recentTrack.artist["#text"]);
        $("img#trackart").attr("src", recentTrack.image[2]["#text"]);
      },
  
      error: function (resp) {
        $("a#tracktitle").html("🔊" + "Error! Did you provide a valid username?");
        $("img#trackart").attr(
          "src",
          "https://piplup7575.github.io/img/piplup.png"
        );
        $("img#trackart").attr("width", "174px");
        var artistFormatted = "👤" + "";
        $("a#trackartist").html(artistFormatted);
      },
    });
  }
  
  getLastFmUser();
  setInterval(getSetLastFM, 10 * 1000);