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
        document.querySelector('#Tech-Monitoring .content h3').textContent = 'Dernières tendances technologiques';
        document.querySelector('#Tech-Monitoring .content p').textContent = "Au cours des derniers mois, j'ai suivi de près le paysage dynamique de la technologie, en restant à jour avec les dernières tendances et innovations. Voici quelques-uns des développements remarquables:";
        document.querySelector('#Tech-Monitoring .content ul').innerHTML = `
        <p>Avancées en intelligence artificielle et en apprentissage automatique, notamment dans le traitement du langage naturel et la vision par ordinateur.</p>
        <p>L'essor de la technologie blockchain et ses applications au-delà de la cryptomonnaie, y compris la gestion de la chaîne d'approvisionnement et la vérification de l'identité numérique.</p>
        <p>Les menaces émergentes en matière de cybersécurité et l'importance de mesures de cybersécurité robustes pour protéger les données sensibles.</p>
        <p>L'évolution des services de cloud computing, avec un accent sur les environnements hybrides et multi-cloud pour une évolutivité et une flexibilité accrues.</p>
        `;
    
        document.querySelector('#Tech-Monitoring .content h4').textContent = "Article vedette";
        document.getElementById('techy').textContent = 'Un des articles remarquables que j\'ai récemment découvert s\'intitule "L\'avenir du travail : Adopter les technologies de collaboration à distance." Il explore comment le travail à distance a remodelé notre façon de collaborer et discute du rôle de technologies innovantes telles que la réalité virtuelle et la réalité augmentée dans la facilitation de la collaboration à distance sans faille.';
        document.querySelector('#Tech-Monitoring .content a').textContent = 'Lire la suite';
        document.querySelector('#Tech-Monitoring .content a').href = 'https://www.techradar.com/news/computing-components/graphics-cards/amd-vs-nvidia-who-makes-the-best-graphics-cards-699480';
        document.querySelector('#Tech-Monitoring .content a').target = '_blank';
           
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
        document.querySelector('#Tech-Monitoring .content h3').textContent = 'Latest Tech Trends';
        document.querySelector('#Tech-Monitoring .content p:nth-child(2)').textContent = 'Over the past few months, I\'ve been actively monitoring the dynamic landscape of technology, staying updated with the latest trends and innovations.';
        document.querySelector('#Tech-Monitoring .content ul').innerHTML = `
        <p>Advancements in artificial intelligence and machine learning, particularly in natural language processing and computer vision.</p>
        <p>The rise of blockchain technology and its applications beyond cryptocurrency, including supply chain management and digital identity verification.</p>
        <p>Emerging cybersecurity threats and the importance of robust cybersecurity measures in safeguarding sensitive data.</p>
        <p>The evolution of cloud computing services, with a focus on hybrid and multi-cloud environments for improved scalability and flexibility.</p>
        `;

        document.querySelector('#Tech-Monitoring .content h4').textContent = "Featured Article";
        document.getElementById('techy').textContent = 'One of the notable articles I recently came across is titled "The Future of Work: Embracing Remote Collaboration Technologies." It explores how remote work has reshaped our approach to collaboration and discusses the role of innovative technologies such as virtual reality and augmented reality in facilitating seamless remote collaboration.';
        document.querySelector('#Tech-Monitoring .content a').textContent = 'Read more';
        document.querySelector('#Tech-Monitoring .content a').href = 'https://www.techradar.com/news/computing-components/graphics-cards/amd-vs-nvidia-who-makes-the-best-graphics-cards-699480';
        document.querySelector('#Tech-Monitoring .content a').target = '_blank';

        document.querySelector('#Contact h2').textContent = 'Contact';
        document.querySelector('#Contact .title').textContent = 'Don\'t hesitate to contact me for any questions or inquiries, I will be happy to help you.';
        document.querySelector('#Contact .title + .content .title span').textContent = ' Email:';
        document.querySelector('#Contact .title + .content .title p').textContent = 'xavierjmashton@gmail.com';
        document.querySelector('#Contact .title + .content .title + .title span').textContent = ' Telephone:';
        document.querySelector('#Contact .title + .content .title + .title p').textContent = '+33 7 83 69 20 89';
        
        document.querySelector('footer p').textContent = '© 2024 - Portfolio by Xavier ASHTON';
    }
}
