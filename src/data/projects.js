const projects = [
  {
    id: "1",
    slug: "shareaplate",
    title: "ShareAPlate - Food Waste Reduction Platform",
    image: "/shareaplate-home.png",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Firebase"],
    summary:
      "A MERN Stack-powered platform connecting restaurants, charities, and individuals to reduce food waste and support communities.",
    details:
      "ShareAPlate facilitates efficient food donation and distribution by connecting surplus food providers with charities and individuals in need. It features real-time donation tracking, role-based access control, and geolocation matching to ensure timely and safe food transfers.",
    live: "https://share-a-plate-a1shuvo.web.app/",
    github: "https://github.com/a1shuvo/share-a-plate-client",
    challenges:
      "Implementing real-time synchronization between multiple user roles required careful state management. Designing secure authentication and authorization while maintaining a smooth UX was a critical challenge. Handling edge cases in donation matching to minimize waste was also complex.",
    futurePlans:
      "Plan to integrate AI-driven matching algorithms to improve donation allocation efficiency. Developing mobile apps to increase accessibility and introducing analytics dashboards for impact measurement are key future improvements.",
  },
  {
    id: "2",
    slug: "thinkup",
    title: "ThinkUP - Knowledge Sharing Platform",
    image: "/thinkup-home.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    summary:
      "A community-driven platform for posting articles, engaging in discussions, and sharing knowledge.",
    details:
      "ThinkUP empowers users to create, share, and discuss content in a collaborative environment. It supports threaded discussions, rich text formatting, and user profiles. Advanced search capabilities enable easy content discovery, enhancing knowledge exchange across diverse topics.",
    live: "https://think-up-a1shuvo.web.app/",
    github: "https://github.com/a1shuvo/thinkup-client",
    challenges:
      "Building an efficient and scalable threaded comment system while ensuring fast query responses was demanding. Optimizing search functionality for relevancy and performance involved fine-tuning database indexes and queries. Balancing a rich UI with responsive design also required careful consideration.",
    futurePlans:
      "Introducing real-time notifications and collaborative editing features. Enhancing mobile responsiveness and implementing content moderation tools will improve user engagement and platform trustworthiness.",
  },
  {
    id: "3",
    slug: "gardenhub",
    title: "GardenHub - Gardening Community & Tips Hub",
    image: "/gardenhub-home.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
    ],
    summary:
      "An interactive gardening platform for sharing tips, asking questions, and connecting with plant lovers.",
    details:
      "GardenHub provides a space for gardeners to share knowledge, organize local events, and ask questions. It features role-based dashboards, user content moderation, and personalized gardening tips. The platform fosters a supportive community with event calendars and interactive forums.",
    live: "https://garden-hub-a1shuvo.web.app/",
    github: "https://github.com/a1shuvo/garden-hub-client",
    challenges:
      "Creating an intuitive and accessible UI that serves both casual users and experts was complex. Ensuring content moderation without hindering community interaction required thoughtful design. Integrating event management features added additional backend complexity.",
    futurePlans:
      "Plans include AI-driven plant care recommendations, a marketplace for plant swaps, and expanded social features such as user groups and live chat to foster stronger community bonds.",
  },
];

export default projects;
