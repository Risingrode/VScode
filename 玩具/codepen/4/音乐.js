//- Having to Write Taylor Swift too many times
- let s = 'Taylor Swift';
- let data = { 'Cruel Summer': 'play', 'ME!': 'pause', 'I Forgot You Existed': 'play', 'You Need to calm down': 'play', 'Lover': 'play', 'I Think He Knows': 'play', 'London Boy': 'play' };
- let q = Object.entries(data);
- let w = q.length;
 .ex
    .screen - 1
header
ion - icon(name = "arrow-back-outline")
         span NOW PLAYING
ion - icon(name = "menu-outline")
    .player
    .song
    .img - container
img(src = "https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png", alt = "Lover Album Cover")
             h1 ME!
h6 = s
    .slider
span.start 0: 00
input.input(type = "range" value = '0')
span.end 3: 13
    .controls
button
ion - icon(name = "play-back-sharp")
button
ion - icon(name = "pause-sharp")
button
ion - icon(name = "play-forward-sharp")
    .screen - 2
header
         span #{ s } & middot; Lover
    .title
ion - icon(name = "star")
img(src = "https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png", alt = "Lover Album Cover")
ion - icon(name = "ellipsis-horizontal")
    .songs
    - for (let e = 0; e < w; e++)
             .song
        .details
h5 = q[e][0]
span = s
button