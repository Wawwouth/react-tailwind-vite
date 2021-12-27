export type liveChannel = {
  streamer: string;
  category: string;
  title: string;
  viewers: string;
  profilePicture?: string
}

export type TwitchDataType = {
  following: liveChannel[];
}

export const data: TwitchDataType = {
  following: [
    {streamer: 'Chess', 
      category: 'Chess', 
      viewers: '21,2 k', 
      title: 'FIDE World Rapid & Blitz Championships 2021',
      profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/320d61dc-5202-44ad-a203-8a8d7a9cbfa9-profile_image-70x70.png'
    },
    {streamer: 'Etoiles', 
      category: 'Mario Kart 8', 
      viewers: '8,1 k', 
      title: 'Tournoi Mario Kart du DIMANCHE // Objectif 250',
      profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/4eecaab8-4de3-4bcc-b2b7-f3a03e8273a8-profile_image-70x70.png'
    },
    {streamer: 'BlitzStream', 
      category: 'Chess', 
      viewers: '5,5 k', 
      title: 'Championnat du Monde de Rapide on suit MVL et Firouzja',
      profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f338a550-1963-4449-ab31-e99d30cd4876-profile_image-70x70.png'
    },
    {streamer: 'Waolol1', 
      category: 'League of Legends', 
      viewers: '5,4 k', 
      title: 'KC WAO !!!!! soloQ mon frere duoQ Toucouille',
      profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a6dbd657-0dc8-444b-ab53-feafa9fcd5ac-profile_image-70x70.png'
    },
    {streamer: 'rhobalas_lol', 
      category: `I'm Only Sleeping`, 
      viewers: '2,4 k', 
      title: 'SUBATHON DE NOEL !subathon :giveaway !nordvpn',
      profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ab7be94b-dd10-43ad-9a81-ef1b021fd2e1-profile_image-70x70.png'
    },
    {streamer: 'SolaryFortnite', 
      category: 'Fortnite', 
      viewers: '1,2 k', 
      title: 'BlastR - MEILLEUR TRIO EU GRIND ARENE',
      profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/41bcfffb-29d4-433e-a13e-6fdf40bebc89-profile_image-70x70.png'
    },
    {streamer: 'zacknani', 
      category: 'Football Manager 2022', 
      viewers: '1,2 k', 
      title: 'Zack - Bonjour bonjour !',
      profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/46301a70-a0bd-4721-8505-6422ae194cf9-profile_image-70x70.png'
    },
  ]
}