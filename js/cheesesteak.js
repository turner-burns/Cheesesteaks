<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Web Mapping Starter Template</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />

    <!-- Leaflet CSS (without integrity/crossorigin for local use) -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">

    <style>
        body {
            margin: 0;
            padding: 0;
            background: #f4f142;
            font-family: Lato, sans-serif;
            color: #0D0000;
        }

        header {
            padding: 6px 10%;
        }

        h1 {
            display: inline-block;
            margin-right: 20px;
            color: #0D0000;
        }

        h2 {
            display: inline-block;
            color: #001323;
        }

        #map {
            width: 80%;
            height: 540px;
            margin: 10px auto;
        }

        footer {
            padding: 6px 10%;
            width: 80%;
        }

        p {
            font-size: 1em;
            color: #0D0000;
        }
    </style>
</head>

<body>
    <header>
        <h1>Philly Cheesesteak Map</h1>
        <h2>Explore & Learn!</h2>
    </header>

    <div id='map'></div>

    <footer>
        <p>By Your Name Here!</p>
    </footer>

    <!-- Script at the very end ensures Leaflet is loaded before this runs -->
    <script>
        // Create the map
        var map = L.map('map', {
            center: [39.9331904, -75.1614319],
            zoom: 13,
        });

 var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
});
tiles.addTo(map);


        // Cheesesteak shop data
        var cs = ["Oregon Steaks", "Genos", "Jims", "Tims", "Jimmy G's", "Cleavers"];
        var csCoord = [
            [39.9161561, -75.1668297],
            [39.9331904, -75.169],
            [39.94156, -75.1514984],
            [39.9416746, -75.2193495],
            [39.966211, -75.1625537],
            [39.9514014, -75.1728076]
        ];
        var csStar = [3.5, 3.5, 4, 4, 4, 4.5];
        var csReviews = [89, 2424, 121, 133, 232, 264];

        // Loop through the spots and add popups
        for (var i = 0; i < cs.length; i++) {
            var yelpFactor = yelp(csStar[i], csReviews[i]);
            var popup = "<b>" + cs[i] + "</b><br>" +
                "<b>Yelp Factor</b>: " + yelpFactor.toLocaleString();
            L.marker(csCoord[i])
                .addTo(map)
                .bindPopup(popup);
        }

        // Function to calculate Yelp factor
        function yelp(star, reviews) {
            return star * reviews;
        }
        
    </script>

</body>
</html>

 