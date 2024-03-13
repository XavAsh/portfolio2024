function switchLanguage() {
    var checkbox = document.querySelector('input[type="checkbox"]');
    var language = checkbox.checked ? 'fr' : 'en'; // Get the current language from the checkbox state
    
    if (language === 'fr') {
        // Update content to French version
        document.querySelector('header nav ul li:nth-child(1) a').textContent = 'Accueil';
        document.querySelector('header nav ul li:nth-child(2) a').textContent = 'Mes projets';
        document.querySelector('header nav ul li:nth-child(3) a').textContent = 'À propos de moi';
        document.querySelector('header nav ul li:nth-child(4) a').textContent = 'Veille technologique';
        document.querySelector('header nav ul li:nth-child(5) a').textContent = 'Contact';
        
        document.querySelector('#Presentation h1').textContent = 'Xavier ASHTON';
        document.querySelector('#Presentation h2').textContent = 'Développeur, Étudiant.';
        document.querySelector('#Presentation p').textContent = 'Je suis étudiant en développement web, actuellement en deuxième année d\'un diplôme de deux ans. Je recherche un stage pour la fin de l\'année.';
        
        document.querySelector('#Portfolio h2').textContent = 'Quelques-uns de mes projets';
        document.querySelector('#Portfolio h3:nth-child(3)').textContent = 'Projets professionnels';
        document.querySelector('#Portfolio h3:nth-child(8)').textContent = 'Projets scolaires';
        
        document.querySelector('#Portfolio .column:nth-child(1) p').textContent = '2024: Projet de stage de deuxième année utilisant PHP procédural, HTML, CSS, JS, SQL. Actuellement hébergé et utilisable';
        document.querySelector('#Portfolio .column:nth-child(2) p').textContent = '2023: Petit site web pour un salon de coiffure local utilisant HTML et CSS. Actuellement hébergé et utilisable';
        document.querySelector('#Portfolio .column:nth-child(3) p').textContent = '2023: Projet de stage de première année, utilisant HTML, CSS. Sera bientôt hébergé et utilisable';
        document.getElementById('t1').textContent = '2023: Projet scolaire de deuxième année pour un site web de location de véhicules utilisant PHP procédural MVC, bases de données MySQL, HTML, CSS, JS. Développé pour un usage local uniquement';
        document.getElementById('t2').textContent = '2023: Projet scolaire de première année pour un site web de musée utilisant HTML, CSS, JS. Développé pour un usage local uniquement';
        
        document.querySelector('#About-me h2').textContent = 'À propos de moi';
        document.querySelector('#About-me .content p').textContent = "Je suis étudiant en développement web, actuellement en deuxième année d'un programme de diplôme de deux ans. Je suis activement à la recherche d'un stage pour la fin de l'année et je suis également disponible pour des opportunités en freelance. Ma passion se situe dans le développement web, et je m'efforce constamment d'améliorer mes compétences. J'ai de l'expérience dans le travail avec HTML, CSS, JavaScript, PHP et SQL, et j'élargis actuellement mes connaissances en C# et C++. En plus du développement web, je m'intéresse vivement à la cybersécurité, que j'étudie activement pendant mon temps libre. Quand je ne code pas, vous pouvez me trouver plongé dans les jeux vidéo ou en train d'écouter de la musique. Je suis également un passionné de cinéma et j'adore regarder des films pendant mon temps libre. Voyager est une autre de mes passions, et je suis toujours impatient d'explorer de nouvelles destinations et cultures.";
        document.querySelector('#About-me .content-title h4').textContent = 'Téléchargez mon CV';
        
        document.querySelector('#Tech-Monitoring h2').textContent = 'Points saillants de la veille technologique';
        document.querySelector('#Tech-Monitoring .content  h3:nth-child(1)').textContent = 'Dernières tendances technologiques';
        document.querySelector('#Tech-Monitoring .content p').textContent = "Au cours des derniers mois, j'ai suivi de près le paysage dynamique de la technologie, en restant à jour avec les dernières tendances et innovations. Voici quelques-uns des développements remarquables:";
        document.querySelector('#Tech-Monitoring .content ul').innerHTML = `
        <p>J'ai étudié de près l'évolution des cartes graphiques, en suivant de près les dernières avancées technologiques. Cela inclut les développements en intelligence artificielle et en apprentissage automatique, ainsi que les améliorations des techniques de rendu et des performances. De plus, j'ai surveillé la sortie de nouveaux modèles de cartes graphiques de fabricants comme NVIDIA et AMD, en analysant leurs spécifications et leurs capacités. Dans l'ensemble, mon objectif a été de comprendre comment les cartes graphiques continuent de repousser les limites de l'informatique visuelle.</p> `;
    
        document.getElementById('ttl').textContent = "Article vedette";
        document.getElementById('techy').textContent = 'Je me fie à ces sources pour rester au courant des derniers changements et des nouvelles sorties dans le monde des GPU (Unités de Traitement Graphique). TechRadar fournit des analyses approfondies et des critiques, offrant des informations précieuses sur les dernières technologies. Pour une comparaison directe entre les GPU NVIDIA, je me tourne vers le site officiel de NVIDIA Studio, où les spécifications détaillées et les fonctionnalités sont facilement disponibles. Le site officiel d\'AMD est une autre ressource essentielle pour explorer leur gamme de GPU et leurs innovations. De plus, des chaînes YouTube comme Linus Tech Tips proposent des vidéos et des démonstrations instructives, m\'aidant à rester informé sur les GPU et autres composants informatiques.';
        document.querySelector('#Tech-Monitoring .content h4').textContent = "Mes liens";

        document.querySelector('#Contact h2').textContent = 'Contact';
        document.querySelector('#Contact .title').textContent = 'N\'hésitez pas à me contacter pour toute question ou demande, je serai heureux de vous aider.';
        document.querySelector('#Contact .title + .content .title span').textContent = ' Email:';
        document.querySelector('#Contact .title + .content .title p').textContent = 'xavierjmashton@gmail.com';
        document.querySelector('#Contact .title + .content .title + .title span').textContent = ' Téléphone:';
        document.querySelector('#Contact .title + .content .title + .title p').textContent = '+33 7 83 69 20 89';
        
        document.querySelector('footer p').textContent = '© 2024 - Portfolio par Xavier ASHTON';
    } else {
        // Update content to English version
        document.querySelector('header nav ul li:nth-child(1) a').textContent = 'Home';
        document.querySelector('header nav ul li:nth-child(2) a').textContent = 'My projects';
        document.querySelector('header nav ul li:nth-child(3) a').textContent = 'About me';
        document.querySelector('header nav ul li:nth-child(4) a').textContent = 'Tech Monitoring';
        document.querySelector('header nav ul li:nth-child(5) a').textContent = 'Contact';
        
        document.querySelector('#Presentation h1').textContent = 'Xavier ASHTON';
        document.querySelector('#Presentation h2').textContent = 'Developer, Student.';
        document.querySelector('#Presentation p').textContent = 'I am a student in web development, currently in my second year of a two year diploma. I am looking for a work placement for the end of the year.';
        
        document.querySelector('#Portfolio h2').textContent = 'A few projects of mine';
        document.querySelector('#Portfolio h3:nth-child(3)').textContent = 'Professional Projects';
        document.querySelector('#Portfolio h3:nth-child(8)').textContent = 'School Projects';
        
        document.querySelector('#Portfolio .column:nth-child(1) p').textContent = '2024: Second year work placement project using procedural PHP, HTML, CSS, JS, SQL. Currently hosted and usable';
        document.querySelector('#Portfolio .column:nth-child(2) p').textContent = '2023: Small website for a local hairdressers using HTML and CSS. Currently hosted and usable';
        document.querySelector('#Portfolio .column:nth-child(3) p').textContent = '2023: First year work placement project, using HTML, CSS. Will soon be hosted and usable';
        document.getElementById('t1').textContent = '2023: Second year school project for a vehicle rental website dynamically using procedural MVC PHP, MySQL Databases, HTML, CSS, JS. Developed for local use only';
        document.getElementById('t2').textContent = '2023: First year school project for a museum website using HTML, CSS, JS. Developed for local use only.';
        
        document.querySelector('#About-me h2').textContent = 'About me';
        document.querySelector('#About-me .content p').textContent = "I'm a web development student currently in my second year of a two-year diploma program. I'm actively seeking a work placement for the end of the year and I'm also available for freelance opportunities. My passion lies in web development, and I'm constantly striving to enhance my skills. I have experience working with HTML, CSS, JavaScript, PHP, and SQL, and I'm currently expanding my knowledge on C# and C++. In addition to web development, I have a keen interest in cybersecurity, which I'm actively studying in my free time. When I'm not coding, you can find me immersed in video games or enjoying music. I'm also an avid movie enthusiast and love watching films in my spare time. Traveling is another passion of mine, and I'm always eager to explore new destinations and cultures.";
        document.querySelector('#About-me .content-title h4').textContent = 'Download my C.V';
        
        document.querySelector('#Tech-Monitoring h2').textContent = 'Tech Monitoring Highlights';
        document.querySelector('#Tech-Monitoring .content h3:nth-child(1)').textContent = 'Latest Tech Trends';
        document.querySelector('#Tech-Monitoring .content p:nth-child(2)').textContent = 'Over the past few months, I\'ve been actively monitoring the dynamic landscape of technology, staying updated with the latest trends and innovations.';
        document.querySelector('#Tech-Monitoring .content ul').innerHTML = `
        <p>I've been closely studying the evolution of graphics cards, keeping track of the latest advancements in technology. This includes developments in artificial intelligence and machine learning, as well as improvements in rendering techniques and performance enhancements. Additionally, I've been monitoring the release of new graphics card models from manufacturers like NVIDIA and AMD, analyzing their specifications and capabilities. Overall, my focus has been on understanding how graphics cards continue to push the boundaries of visual computing.</p>`;

        document.getElementById('ttl').textContent = "Featured Article";
        document.getElementById('techy').textContent = 'I rely on these sources to stay up to date with the latest changes and releases in the world of GPUs (Graphics Processing Units). TechRadar provides in-depth reviews and analysis, offering valuable insights into the latest technologies. For a direct comparison between NVIDIA GPUs, I turn to the official NVIDIA Studio website, where detailed specifications and features are readily available. AMD\'s official website is another essential resource for exploring their GPU lineup and innovations. Additionally, YouTube channels like Linus Tech Tips offer insightful videos and demonstrations, helping me stay informed about GPUs and other computing components.';
        document.querySelector('#Tech-Monitoring .content h4').textContent = "My links";

        document.querySelector('#Contact h2').textContent = 'Contact';
        document.querySelector('#Contact .title').textContent = 'Don\'t hesitate to contact me for any questions or inquiries, I will be happy to help you.';
        document.querySelector('#Contact .title + .content .title span').textContent = ' Email:';
        document.querySelector('#Contact .title + .content .title p').textContent = 'xavierjmashton@gmail.com';
        document.querySelector('#Contact .title + .content .title + .title span').textContent = ' Telephone:';
        document.querySelector('#Contact .title + .content .title + .title p').textContent = '+33 7 83 69 20 89';
        
        document.querySelector('footer p').textContent = '© 2024 - Portfolio by Xavier ASHTON';
    }
}
