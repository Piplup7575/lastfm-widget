# lastfm-widget
just a simple lastfm widget

usage:

import the lastfm.css and lastfm.js files into your page

add the following to your html page in which you want your widget

```html
<link rel="stylesheet" href="./lastfm.css" />

<div class="nowplayingcard">
    <div class="nowplayingcontainer-inner">
        <img id="trackart" src="#" />
        <div class="trackInfo">
          <a id="tracktitle"></a>
          <a id="trackartist"></a>
        </div>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="lastfm.js"></script>
```

remove `const input = document.getElementById("username");` from the lastfm.js file, and replace `input.value` with the username of the person your want to track

enjoy!